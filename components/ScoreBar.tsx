interface ScoreBarProps {
  score: number | null
}

export default function ScoreBar({ score }: ScoreBarProps) {
  if (score === null) {
    return (
      <div className="text-[10px] font-label-md mt-1.5 text-center text-on-surface-variant">
        Not in DB
      </div>
    )
  }

  const colorClass = score >= 70 ? 'bg-green-600' : score >= 40 ? 'bg-slate-400' : 'bg-red-600'

  return (
    <>
      <div className="w-full bg-surface-container-highest h-1.5 rounded-full mt-1.5 overflow-hidden">
        <div className={`${colorClass} h-full rounded-full`} style={{ width: `${score}%` }}></div>
      </div>
      <div className="text-[10px] font-mono-md mt-1 text-center font-bold">{score}%</div>
    </>
  )
}
