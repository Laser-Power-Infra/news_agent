'use client'

interface NavItem {
  label: string
  icon: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Dashboard', icon: 'dashboard', href: '/' },
  { label: 'Companies', icon: 'business', href: '/companies' },
  { label: 'Categories', icon: 'category', href: '/categories' },
  { label: 'News Feed', icon: 'newspaper', href: '/news-feed' },
  { label: 'Reports', icon: 'assessment', href: '/reports' },
  { label: 'Alerts', icon: 'notifications', href: '/alerts' },
]

export default function Sidebar({ activeItem = 'News Feed' }: { activeItem?: string }) {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-surface flex flex-col py-lg border-r border-outline-variant">
      <div className="px-lg mb-xl">
        <h1 className="font-headline-sm text-headline-sm font-bold text-primary">News Intelligence</h1>
        <p className="text-on-surface-variant font-label-md uppercase tracking-widest mt-xs opacity-70">
          Enterprise Edition
        </p>
      </div>
      <nav className="flex-1 flex flex-col gap-xs px-md">
        {navItems.map((item) => {
          const isActive = item.label === activeItem
          return (
            <a
              key={item.label}
              href={item.href}
              className={
                isActive
                  ? 'flex items-center gap-md px-md py-sm rounded-lg text-primary bg-secondary-container/30 border-l-4 border-primary transition-all'
                  : 'flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200'
              }
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className={`font-body-md ${isActive ? 'font-bold' : ''}`}>{item.label}</span>
            </a>
          )
        })}
      </nav>
      <div className="px-lg pt-lg mt-md border-t border-outline-variant/30">
        <div className="flex items-center gap-md mb-lg">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7bs45e_D83gvPmTHIeflLs-k15LaB7bTzoT1Rg_f-UP7TnjhQYwZrO11hmNnGbbB1tjzx1TZGbzwCimZJypIM9jU4Hd-LIyNM3Y82zyBoNq1XPfN056163MdZKYum7_dUI3O2s3E2vklScFv9-3YxVlbp91RipwcFyDAKSI47gPhRvL6k7Whb56XwK5tkztvlRFvpw3pBJuBDLlEI468o6NJibwMb3GYSQ-a4c9eyjRIVJSw_te-3"
              alt="User avatar"
            />
          </div>
          <div>
            <p className="font-body-sm font-bold text-on-surface">CFO User Profile</p>
            <p className="text-label-md text-on-surface-variant">Global Access</p>
          </div>
        </div>
        <button className="w-full py-sm bg-primary-container text-white rounded-lg font-label-md font-bold hover:shadow-lg transition-all active:scale-95">
          Export Reports
        </button>
      </div>
    </aside>
  )
}
