import Skeleton from '../Skeleton'

export default function FiltersSkeleton() {
  return (
    <div className="sticky top-16 z-20 flex items-center gap-md px-lg py-sm bg-surface-container-low border-b border-outline-variant">
      <Skeleton className="h-4 w-12" />
      <Skeleton className="h-8 w-28 rounded-lg" />
      <Skeleton className="h-8 w-24 rounded-lg" />
      <Skeleton className="h-8 w-20 rounded-lg" />
      <Skeleton className="h-8 w-24 rounded-lg" />
      <Skeleton className="h-8 w-28 rounded-lg" />
      <div className="ml-auto">
        <Skeleton className="h-8 w-24 rounded-lg" />
      </div>
    </div>
  )
}
