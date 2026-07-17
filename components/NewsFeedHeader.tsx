export default function NewsFeedHeader() {
  return (
    <div className="px-xl pt-xl pb-lg bg-surface">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="font-display-lg text-display-lg text-on-surface">News Feed</h2>
          <p className="text-body-lg text-on-surface-variant mt-sm">
            Real-time enterprise news monitoring and sentiment analysis.
          </p>
        </div>
        <div className="flex gap-sm">
          {/* <button className="flex items-center gap-sm px-md py-2 border border-outline-variant rounded-lg font-label-md hover:bg-surface-container-highest transition-all">
            <span className="material-symbols-outlined text-[18px]">sync</span>
            Refresh
          </button>
          <button className="flex items-center gap-sm px-md py-2 bg-primary text-white rounded-lg font-label-md hover:shadow-lg transition-all active:scale-95">
            <span className="material-symbols-outlined text-[18px]">add</span>
            New Alert
          </button> */}
        </div>
      </div>
    </div>
  )
}
