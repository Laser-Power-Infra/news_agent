import Skeleton from '../Skeleton'

export default function NewsRowSkeleton() {
  return (
    <tr className="animate-pulse">
      <td className="px-md py-3 align-top">
        <Skeleton className="h-4 w-11/12 mb-2" />
        <Skeleton className="h-3 w-3/4 mb-2" />
        <Skeleton className="h-5 w-28 rounded-full" />
      </td>
      <td className="px-md py-3 align-top">
        <Skeleton className="h-4 w-5/6" />
      </td>
      <td className="px-md py-3 align-top">
        <div className="flex items-center gap-1.5">
          <Skeleton className="h-1.5 w-8 rounded-full" />
          <Skeleton className="h-3 w-4" />
        </div>
      </td>
      <td className="px-md py-3 align-top">
        <Skeleton className="h-6 w-16 rounded-full" />
      </td>
      <td className="px-md py-3 align-top">
        <Skeleton className="h-4 w-5/6" />
      </td>
      <td className="px-md py-3 align-top">
        <Skeleton className="h-4 w-3/4" />
      </td>
      <td className="px-md py-3 align-top">
        <Skeleton className="h-6 w-16 rounded-md" />
      </td>
    </tr>
  )
}
