import Skeleton from '../Skeleton'
import FiltersSkeleton from './FiltersSkeleton'
import NewsTableSkeleton from './NewsTableSkeleton'

export default function NewsFeedSkeleton() {
  return (
    <div className="flex-1 flex flex-col">
      {/* <FiltersSkeleton /> */}
      {/* <div className="px-xl pt-xl pb-lg bg-surface">
        <div className="flex justify-between items-end">
          <div>
            <Skeleton className="h-8 w-56 mb-2" />
            <Skeleton className="h-5 w-96" />
          </div>
          <div className="flex gap-sm">
            <Skeleton className="h-9 w-24 rounded-lg" />
            <Skeleton className="h-9 w-28 rounded-lg" />
          </div>
        </div>
      </div> */}
      <div className="px-xl pb-xl flex-1 flex flex-col">
        <NewsTableSkeleton />
      </div>
    </div>
  )
}
