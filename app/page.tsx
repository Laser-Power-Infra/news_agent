'use client'

import { useState, useEffect, useMemo } from 'react'
import Sidebar from '../components/Sidebar'
import TopNav from '../components/TopNav'
import FilterBar from '../components/FilterBar'
import type { Filters } from '../components/FilterBar'
import NewsFeedHeader from '../components/NewsFeedHeader'
import NewsTable from '../components/NewsTable'
import type { NewsItem } from '../components/NewsTable'
import LoadingScreen from '../components/LoadingScreen'
import Pagination from '../components/Pagination'

const defaultFilters: Filters = {
  company: null,
  category: null,
  status: null,
  sentiment: null,
  priority: null,
  dateRange: null,
}

export default function Home() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [newsData, setNewsData] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState<Filters>(defaultFilters)
  const [lastScraped, setLastScraped] = useState<string | null>(null)
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc')

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch('/api/news')
        if (!res.ok) throw new Error('Failed to fetch')
        const json = await res.json()
        setNewsData(json.items)
        setLastScraped(json.lastScraped)
      } catch (err) {
        console.error('Failed to load news:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchNews()
  }, [])

  const companies = useMemo(() => [...new Set(newsData.map((d) => d.company))], [newsData])
  const categories = useMemo(
    () => [...new Set(newsData.flatMap((d) => d.categories))],
    [newsData]
  )

  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 10

  const filteredData = useMemo(() => {
    let data = newsData

    if (searchTerm) {
      const q = searchTerm.toLowerCase()
      data = data.filter((item) =>
        [item.headline, item.description, item.company, item.source, ...item.categories]
          .join(' ')
          .toLowerCase()
          .includes(q)
      )
    }

    if (filters.company) {
      data = data.filter((item) => item.company === filters.company)
    }

    if (filters.category) {
      data = data.filter((item) => item.categories.includes(filters.category!))
    }

    if (filters.sentiment) {
      data = data.filter((item) => item.sentiment === filters.sentiment)
    }

    if (filters.priority) {
      const ranges: Record<string, [number, number]> = {
        high: [70, 100],
        medium: [40, 69],
        low: [0, 39],
      }
      const range = ranges[filters.priority]
      if (range) {
        const [min, max] = range
        data = data.filter((item) => {
          if (item.priorityScore === null) return false
          return item.priorityScore >= min && item.priorityScore <= max
        })
      }
    }

    if (filters.dateRange && filters.dateRange !== 'all') {
      const msMap: Record<string, number> = {
        '24h': 24 * 60 * 60 * 1000,
        '7d': 7 * 24 * 60 * 60 * 1000,
        '30d': 30 * 24 * 60 * 60 * 1000,
      }
      const ms = msMap[filters.dateRange]
      if (ms) {
        const cutoff = Date.now() - ms
        data = data.filter((item) => {
          if (!item.publishedDate) return true
          return new Date(item.publishedDate).getTime() >= cutoff
        })
      }
    }

    data = [...data].sort((a, b) => {
      const da = a.publishedDate ? new Date(a.publishedDate).getTime() : 0
      const db = b.publishedDate ? new Date(b.publishedDate).getTime() : 0
      return sortOrder === 'desc' ? db - da : da - db
    })

    return data
  }, [newsData, searchTerm, filters, sortOrder])

  const paginatedData = useMemo(
    () => filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize),
    [filteredData, currentPage, pageSize]
  )

  useEffect(() => {
    setCurrentPage(1)
  }, [filteredData])

  function handleFilterChange(key: keyof Filters, value: string | null) {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  function handleClearAll() {
    setFilters(defaultFilters)
  }

  async function handleRemoveCategory(newsId: string, categoryId: number) {
    try {
      const res = await fetch(`/api/news/${newsId}/categories/${categoryId}`, {
        method: 'DELETE',
      })
      if (!res.ok) throw new Error('Failed to remove')
      setNewsData((prev) =>
        prev.map((item) => {
          if (item.id !== newsId) return item
          const idx = item.categoryIds.indexOf(categoryId)
          if (idx === -1) return item
          const newCategories = item.categories.filter((_, i) => i !== idx)
          const newCategoryIds = item.categoryIds.filter((_, i) => i !== idx)
          return {
            ...item,
            categories: newCategories,
            categoryIds: newCategoryIds,
            category: newCategories.length > 0 ? newCategories.join(', ').toUpperCase() : 'Not in DB',
          }
        })
      )
    } catch (err) {
      console.error('Failed to remove category:', err)
    }
  }

  return (
    <>
      <main className="min-h-screen flex flex-col">
        <TopNav searchTerm={searchTerm} onSearchChange={setSearchTerm} lastScraped={lastScraped} />
        <FilterBar
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearAll={handleClearAll}
          companies={companies}
          categories={categories}
        />
        <NewsFeedHeader />
        {loading ? (
          <LoadingScreen />
        ) : (
          <div className="px-xl pb-xl flex-1 flex flex-col">
            <div className="bg-surface rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col flex-1">
              <NewsTable
                items={paginatedData}
                selectedId={selectedId}
                onSelect={setSelectedId}
                onRemoveCategory={handleRemoveCategory}
                sortOrder={sortOrder}
                onSortChange={() => setSortOrder((prev) => (prev === 'desc' ? 'asc' : 'desc'))}
              />
              <Pagination total={filteredData.length} currentPage={currentPage} onPageChange={setCurrentPage} />
            </div>
          </div>
        )}
      </main>
    </>
  )
}
