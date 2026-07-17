interface SentimentBadgeProps {
  sentiment: 'positive' | 'neutral' | 'negative' | null
}

const sentimentStyles: Record<string, string> = {
  positive: 'bg-green-100 text-green-800',
  neutral: 'bg-slate-100 text-slate-600',
  negative: 'bg-red-100 text-red-800',
}

export default function SentimentBadge({ sentiment }: SentimentBadgeProps) {
  if (!sentiment) {
    return (
      <span className="px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-tighter bg-surface-container-high text-on-surface-variant">
        Not in DB
      </span>
    )
  }

  return (
    <span
      className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-tighter ${sentimentStyles[sentiment]}`}
    >
      {sentiment}
    </span>
  )
}
