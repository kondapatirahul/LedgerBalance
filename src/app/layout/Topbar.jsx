import { Bell, Search } from 'lucide-react'

export default function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-800 bg-slate-950/80 px-4 sm:px-6 lg:px-8">
      <div>
        <p className="text-sm font-medium text-slate-200">Workspace</p>
        <p className="hidden text-xs text-slate-500 sm:block">Your financial operations at a glance</p>
      </div>
      <div className="flex items-center gap-2">
        <button type="button" aria-label="Search (coming soon)" title="Search will be added later" className="grid h-9 w-9 place-items-center rounded-lg border border-slate-800 text-slate-400 hover:bg-slate-900">
          <Search size={17} />
        </button>
        <button type="button" aria-label="Notifications (coming soon)" title="Notifications will be added later" className="grid h-9 w-9 place-items-center rounded-lg border border-slate-800 text-slate-400 hover:bg-slate-900">
          <Bell size={17} />
        </button>
        <div className="ml-1 grid h-9 w-9 place-items-center rounded-full bg-slate-800 text-xs font-semibold text-emerald-300" aria-label="Demo profile">LB</div>
      </div>
    </header>
  )
}
