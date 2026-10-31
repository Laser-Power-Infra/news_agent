import NewsFeedSkeleton from './skeletons/NewsFeedSkeleton'

export default function LoadingScreen() {
  return (
    <>
      <p className="px-xl pb-sm text-body-sm text-on-surface-variant">Loading latest news…</p>
      <NewsFeedSkeleton />
    </>
  )
}
