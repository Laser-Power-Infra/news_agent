'use client'

import SentimentBadge from './SentimentBadge'

interface NewsRowProps {
  headline: string
  description: string
  url: string
  company: string
  category: string
  categories: string[]
  categoryIds: number[]
  publishedAt: string
  source: string
  sentiment: 'positive' | 'neutral' | 'negative' | null
  priorityScore: number | null
  id: string
  isSelected: boolean
  onSelect: () => void
  onShowDescription?: (text: string) => void
  onRemoveCategory?: (newsId: string, categoryId: number) => void
}

export default function NewsRow({
  headline,
  description,
  url,
  company,
  category,
  categories,
  categoryIds,
  publishedAt,
  source,
  sentiment,
  priorityScore,
  id,
  isSelected,
  onSelect,
  onShowDescription,
  onRemoveCategory,
}: NewsRowProps) {
  return (
    <tr
      className={`hover:bg-surface-container-low transition-colors cursor-pointer group news-row ${isSelected ? 'bg-secondary-container/30 row-active' : ''}`}
      onClick={onSelect}
    >
      <td className="px-md py-3 align-top">
        <div className="font-body-md font-semibold text-on-surface leading-tight group-hover:text-primary transition-colors">
          {headline}
        </div>
        {description !== 'Not in DB' ? (
          <div className="mt-1">
            <div className="text-[11px] text-on-surface-variant opacity-70 line-clamp-1">
              {description}
            </div>
            <div className="flex items-center gap-2 mt-1.5">
              <button
                className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed text-[10px] font-bold flex items-center gap-1 border border-outline-variant/30 hover:bg-primary-fixed-dim transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  onShowDescription?.(description)
                }}
              >
                <span className="material-symbols-outlined text-[12px]">description</span>
                Show description
              </button>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-[10px] font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                Click to see full article →
              </a>
            </div>
          </div>
        ) : (
          <div className="mt-1">
            <div className="text-[11px] text-on-surface-variant">No description</div>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-[10px] font-medium mt-1 inline-block"
              onClick={(e) => e.stopPropagation()}
            >
              Click to see full article →
            </a>
          </div>
        )}
      </td>
      <td className="px-md py-3 text-body-sm font-medium align-top">{company}</td>
      <td className="px-md py-3 align-top">
        <div className="flex items-center gap-1.5">
          {priorityScore !== null ? (
            <>
              <div className="w-full max-w-[40px] bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${priorityScore >= 70 ? 'bg-green-600' : priorityScore >= 40 ? 'bg-slate-400' : 'bg-red-600'}`}
                  style={{ width: `${priorityScore}%` }}
                />
              </div>
              <span className="text-[10px] font-mono-md font-bold">{priorityScore}</span>
            </>
          ) : (
            <span className="text-[10px] text-on-surface-variant">—</span>
          )}
        </div>
      </td>
      <td className="px-md py-3 align-top">
        <div className="flex flex-wrap gap-1">
          {categories.length > 0 ? (
            categories.map((cat, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-surface-container-high text-[11px] text-on-surface-variant font-bold border border-outline-variant/50 group/cat"
              >
                {cat.toUpperCase()}
                <button
                  className="w-3 h-3 flex items-center justify-center rounded-full  text-black hover:bg-red-100 hover:text-red-600 transition-colors  group-hover/cat:opacity-100"
                  onClick={(e) => {
                    e.stopPropagation()
                    onRemoveCategory?.(id, categoryIds[i])
                  }}
                >
                  <span className="material-symbols-outlined text-[10px]! leading-none"  >close</span>
                </button>
              </span>
            ))
          ) : (
            <span className="text-[11px] text-on-surface-variant">No category</span>
          )}
        </div>
      </td>
      <td className="px-md py-3 text-body-sm text-on-surface-variant align-top">{publishedAt}</td>
      <td className="px-md py-3 text-body-sm font-mono-md align-top">{source}</td>
      <td className="px-md py-3 align-top">
        <SentimentBadge sentiment={sentiment} />
      </td>
    </tr>
  )
}
