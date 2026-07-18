'use client'

interface TopNavProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  lastScraped: string | null
}

function formatRelativeTime(dateStr: string): string {
  const now = Date.now()
  const date = new Date(dateStr).getTime()
  const diffMs = now - date
  const diffMins = Math.floor(diffMs / 60000)
  if (diffMins < 1) return 'Just now'
  if (diffMins < 60) return `${diffMins}m ago`
  const diffHours = Math.floor(diffMins / 60)
  if (diffHours < 24) return `${diffHours}h ${diffMins % 60}m ago`
  const diffDays = Math.floor(diffHours / 24)
  return `${diffDays}d ago`
}

export default function TopNav({ searchTerm, onSearchChange, lastScraped }: TopNavProps) {
  return (
    <header className="sticky top-0 z-30 flex justify-between items-center px-lg h-16 bg-surface-bright shadow-sm border-b border-outline-variant">
      <div className="flex items-center gap-lg flex-1">
        <div className="relative w-full max-w-md group" />
      </div>
      <div className="flex items-center gap-md">
        <div className="h-6 w-px bg-outline-variant mx-2" />
        <div className="px-md py-1.5 rounded-md bg-primary-container text-on-primary-container font-label-md font-bold text-[10px] whitespace-nowrap">
          Last scraped: {lastScraped ? formatRelativeTime(lastScraped) : 'Never'}
        </div>
      </div>
    </header>
  )
}
