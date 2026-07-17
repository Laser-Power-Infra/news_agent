import Skeleton from '../Skeleton'
import NewsRowSkeleton from './NewsRowSkeleton'

export default function NewsTableSkeleton() {
  return (
    <div className="bg-surface rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col flex-1">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse table-fixed">
          <thead className="bg-surface-container border-b border-outline-variant">
            <tr>
              <th className="px-md py-4 w-[36%]"><Skeleton className="h-3 w-20" /></th>
              <th className="px-md py-4 w-[12%]"><Skeleton className="h-3 w-16" /></th>
              <th className="px-md py-4 w-[7%]"><Skeleton className="h-3 w-14" /></th>
              <th className="px-md py-4 w-[12%]"><Skeleton className="h-3 w-18" /></th>
              <th className="px-md py-4 w-[10%]"><Skeleton className="h-3 w-14" /></th>
              <th className="px-md py-4 w-[10%]"><Skeleton className="h-3 w-12" /></th>
              <th className="px-md py-4 w-[8%]"><Skeleton className="h-3 w-16" /></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/30">
            {Array.from({ length: 8 }).map((_, i) => (
              <NewsRowSkeleton key={i} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-auto px-lg py-3 bg-surface-container-low flex justify-between items-center border-t border-outline-variant">
        <Skeleton className="h-4 w-44" />
        <div className="flex items-center gap-xs">
          <Skeleton className="h-8 w-8 rounded" />
          <Skeleton className="h-8 w-8 rounded" />
          <Skeleton className="h-8 w-8 rounded" />
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-8 w-10 rounded" />
          <Skeleton className="h-8 w-8 rounded" />
        </div>
      </div>
    </div>
  )
}
