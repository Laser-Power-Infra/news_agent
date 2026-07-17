'use client'

import { useState, useRef, useEffect } from 'react'

export interface Filters {
  company: string | null
  category: string | null
  status: string | null
  sentiment: string | null
  priority: string | null
  dateRange: string | null
}

interface FilterBarProps {
  filters: Filters
  onFilterChange: (key: keyof Filters, value: string | null) => void
  onClearAll: () => void
  companies: string[]
  categories: string[]
}

interface FilterDef {
  key: keyof Filters
  label: string
  options: { label: string; value: string }[]
}

export default function FilterBar({ filters, onFilterChange, onClearAll, companies, categories }: FilterBarProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const filterDefs: FilterDef[] = [
    {
      key: 'company',
      label: 'Company',
      options: companies.map((c) => ({ label: c, value: c })),
    },
    {
      key: 'category',
      label: 'Category',
      options: categories.map((c) => ({ label: c, value: c })),
    },
    {
      key: 'status',
      label: 'Status',
      options: [
        { label: 'Active', value: 'ACTIVE' },
        { label: 'Inactive', value: 'INACTIVE' },
      ],
    },
    {
      key: 'sentiment',
      label: 'Sentiment',
      options: [
        { label: 'Positive', value: 'positive' },
        { label: 'Neutral', value: 'neutral' },
        { label: 'Negative', value: 'negative' },
      ],
    },
    {
      key: 'priority',
      label: 'Priority',
      options: [
        { label: 'High (≥70)', value: 'high' },
        { label: 'Medium (40–69)', value: 'medium' },
        { label: 'Low (<40)', value: 'low' },
      ],
    },
    {
      key: 'dateRange',
      label: 'Date Range',
      options: [
        { label: 'All Time', value: 'all' },
        { label: 'Last 24 Hours', value: '24h' },
        { label: 'Last 7 Days', value: '7d' },
        { label: 'Last 30 Days', value: '30d' },
      ],
    },
  ]

  const hasActiveFilters = Object.values(filters).some((v) => v !== null)

  return (
    <div
      ref={containerRef}
      className="sticky top-16 z-30 flex items-center gap-md px-lg py-sm bg-surface-container-low border-b border-outline-variant flex-wrap"
    >
      <span className="text-label-md font-bold text-on-secondary-fixed-variant mr-md uppercase tracking-wider shrink-0">
        Filters
      </span>
      {filterDefs.map((def) => {
        const isActive = filters[def.key] !== null
        const isOpen = openDropdown === def.key
        const selectedOption = def.options.find((o) => o.value === filters[def.key])
        return (
          <div key={def.key} className="relative">
            <button
              onClick={() => setOpenDropdown(isOpen ? null : def.key)}
              className={
                isActive
                  ? 'bg-white shadow-sm rounded-lg px-md py-sm text-primary font-bold font-label-md flex items-center gap-xs border border-primary/50 transition-all hover:bg-surface-container-highest'
                  : 'text-on-secondary-fixed-variant px-md py-sm font-label-md font-medium hover:bg-surface-container-highest transition-all rounded-lg flex items-center gap-xs border border-transparent'
              }
            >
              {selectedOption?.label || def.label}
              <span className="material-symbols-outlined text-[16px]">expand_more</span>
            </button>
            {isOpen && (
              <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-lg border border-outline-variant z-50 py-1 max-h-64 overflow-y-auto">
                <button
                  className="w-full text-left px-md py-2 text-body-sm text-on-surface-variant hover:bg-surface-container-low"
                  onClick={() => {
                    onFilterChange(def.key, null)
                    setOpenDropdown(null)
                  }}
                >
                  {def.key === 'dateRange' ? 'Any Time' : `All`}
                </button>
                <div className="border-t border-outline-variant/30 my-1" />
                {def.options.map((opt) => (
                  <button
                    key={opt.value}
                    className={`w-full text-left px-md py-2 text-body-sm hover:bg-surface-container-low ${
                      filters[def.key] === opt.value
                        ? 'text-primary font-bold bg-surface-container-low'
                        : 'text-on-surface'
                    }`}
                    onClick={() => {
                      onFilterChange(def.key, opt.value)
                      setOpenDropdown(null)
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        )
      })}
      {hasActiveFilters && (
        <button onClick={onClearAll} className="ml-auto shrink-0 text-primary hover:underline font-label-md px-md">
          Clear All
        </button>
      )}
    </div>
  )
}
