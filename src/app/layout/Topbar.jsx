import { Bell, Search } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import Breadcrumbs from '../../shared/components/Breadcrumbs.jsx'
import { getNavigationItem } from '../navigation/navigationItems.js'

export default function Topbar() {
  const { pathname } = useLocation()
  const current = getNavigationItem(pathname)

  return (
    <header className="flex min-h-16 items-center justify-between gap-4 border-b border-slate-800 bg-slate-950/80 px-4 py-3 sm:px-6 lg:px-8">
      <div className="min-w-0">
        <p className="text-sm font-medium text-slate-200">{current?.label ?? 'Page not found'}</p>
        <div className="mt-1 hidden sm:block"><Breadcrumbs /></div>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <button type="button" disabled aria-label="Search coming soon" title="Search will be added later" className="grid h-9 w-9 cursor-not-allowed place-items-center rounded-lg border border-slate-800 text-slate-600 opacity-70">
          <Search size={17} />
        </button>
        <button type="button" disabled aria-label="Notifications coming soon" title="Notifications will be added later" className="grid h-9 w-9 cursor-not-allowed place-items-center rounded-lg border border-slate-800 text-slate-600 opacity-70">
          <Bell size={17} />
        </button>
        <div className="ml-1 grid h-9 w-9 place-items-center rounded-full bg-slate-800 text-xs font-semibold text-emerald-300" aria-label="Demo profile">LB</div>
      </div>
    </header>
  )
}
