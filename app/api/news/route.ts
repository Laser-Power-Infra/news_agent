import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const search = searchParams.get('search') || ''

  const where = search
    ? {
        OR: [
          { headline: { contains: search, mode: 'insensitive' as const } },
          { source: { contains: search, mode: 'insensitive' as const } },
          { description: { contains: search, mode: 'insensitive' as const } },
          { companies: { name: { contains: search, mode: 'insensitive' as const } } },
        ],
      }
    : {}

  try {
    const news = await prisma.scraped_news.findMany({
      where,
      include: {
        companies: true,
        news_category_mapping: {
          include: {
            categories: true,
          },
        },
      },
      orderBy: { published_date: 'desc' },
    })

    const lastScraped = await prisma.scraped_news.aggregate({
      _max: { created_at: true },
    })

    const mapped = news.map((item) => {
      const categoryNames = item.news_category_mapping.map((m) => m.categories.name)
      return {
        id: String(item.id),
        headline: item.headline,
        description: item.description ?? 'No description ',
        url: item.url,
        company: item.companies?.name ?? 'Not in DB',
        category: categoryNames.join(', ').toUpperCase() || 'No Category',
        categories: categoryNames,
        categoryIds: item.news_category_mapping.map((m) => m.category_id),
        publishedAt: item.published_date
          ? formatRelativeTime(item.published_date)
          : 'Not in DB',
        source: item.source ?? 'Not in DB',
        sentiment: (item.impact_prediction?.toLowerCase() as 'positive' | 'neutral' | 'negative') ?? null,
        priorityScore: item.priority_score ?? null,
        score: null,
        publishedDate: item.published_date?.toISOString() ?? null,
      }
    })

    return NextResponse.json({
      items: mapped,
      lastScraped: lastScraped._max.created_at?.toISOString() ?? null,
    })
  } catch (error) {
    console.error('Failed to fetch news:', error)
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 })
  }
}

export function formatRelativeTime(date: Date): string {
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  if (diffMins < 1) return 'Just now'
  if (diffMins < 60) return `${diffMins}m ago`
  const diffHours = Math.floor(diffMins / 60)
  if (diffHours < 24) return `${diffHours}h ${diffMins % 60}m ago`
  const diffDays = Math.floor(diffHours / 24)
  return `${diffDays}d ago`
}
