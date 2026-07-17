'use client'

const PAGE_SIZE = 10

interface PaginationProps {
  total: number
  currentPage: number
  onPageChange: (page: number) => void
}

function getPageRange(current: number, total: number): (number | '...')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)

  const pages: (number | '...')[] = [1]
  if (current > 3) pages.push('...')

  const start = Math.max(2, current - 1)
  const end = Math.min(total - 1, current + 1)

  for (let i = start; i <= end; i++) pages.push(i)

  if (current < total - 2) pages.push('...')
  pages.push(total)

  return pages
}

export default function Pagination({ total, currentPage, onPageChange }: PaginationProps) {
  const totalPages = Math.ceil(total / PAGE_SIZE)
  if (totalPages <= 1) return null

  const pages = getPageRange(currentPage, totalPages)
  const from = (currentPage - 1) * PAGE_SIZE + 1
  const to = Math.min(currentPage * PAGE_SIZE, total)

  return (
    <div className="mt-auto px-lg py-3 bg-surface-container-low flex justify-between items-center border-t border-outline-variant">
      <span className="text-label-md text-on-surface-variant font-medium">
        Showing {from}–{to} of {total} results
      </span>
      <div className="flex items-center gap-xs">
        <button
          className="p-1 text-outline hover:text-on-surface transition-colors disabled:opacity-30"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <div className="flex items-center gap-1">
          {pages.map((page, i) =>
            page === '...' ? (
              <span key={`e${i}`} className="text-outline px-1 text-body-sm">
                ...
              </span>
            ) : (
              <button
                key={page}
                className={`w-8 h-8 flex items-center justify-center rounded font-label-md transition-colors ${
                  page === currentPage
                    ? 'bg-primary text-white'
                    : 'hover:bg-surface-container-high text-on-surface-variant'
                }`}
                onClick={() => onPageChange(page)}
              >
                {page}
              </button>
            )
          )}
        </div>
        <button
          className="p-1 text-outline hover:text-on-surface transition-colors disabled:opacity-30"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  )
}
