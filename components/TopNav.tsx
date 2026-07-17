'use client'

interface TopNavProps {
  searchTerm: string
  onSearchChange: (value: string) => void
}

export default function TopNav({ searchTerm, onSearchChange }: TopNavProps) {
  return (
    <header className="sticky top-0 z-30 flex justify-between items-center px-lg h-16 bg-surface-bright shadow-sm border-b border-outline-variant">
      <div className="flex items-center gap-lg flex-1">
        <div className="relative w-full max-w-md group">
          {/* <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">
            search
          </span>
          <input
            className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-full text-body-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            placeholder="Search news, companies, or tickers..."
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          /> */}
        </div>
      </div>
      <div className="flex items-center gap-md">
        {/* <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all rounded-full">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all rounded-full">
          <span className="material-symbols-outlined">account_circle</span>
        </button> */}
        <div className="h-6 w-px bg-outline-variant mx-2"></div>
        <div className="px-md py-1.5 rounded-md bg-tertiary-container text-on-tertiary-container font-label-md font-bold text-[10px] uppercase tracking-wider">
          Referesh after 8 hours
        </div>
      </div>
    </header>
  )
}
