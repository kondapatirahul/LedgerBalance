import { NavLink } from 'react-router-dom'
import BrandMark from '../../shared/components/BrandMark.jsx'
import { navigationItems } from '../navigation/navigationItems.js'

export default function Sidebar() {
  return (
    <aside className="border-b border-slate-800 bg-slate-900/90 p-4 lg:min-h-screen lg:w-64 lg:shrink-0 lg:border-b-0 lg:border-r lg:p-5">
      <div className="flex items-center gap-3 px-2 py-2">
        <BrandMark />
        <div className="min-w-0">
          <p className="font-semibold tracking-tight">LedgerBalance</p>
          <p className="text-xs text-slate-500">Money movement you can prove</p>
        </div>
      </div>

      <div className="mt-7 flex items-center justify-between px-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Workspace</p>
        <span className="rounded-md border border-slate-800 px-2 py-0.5 text-[10px] text-slate-500">PREVIEW</span>
      </div>

      <nav aria-label="Main navigation" className="mt-3 flex gap-1 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
        {navigationItems.map(({ label, to, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) => `group flex min-h-10 shrink-0 items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 lg:w-full ${isActive ? 'bg-emerald-400/10 font-semibold text-emerald-300 ring-1 ring-inset ring-emerald-400/20' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'}`}
          >
            {({ isActive }) => (
              <>
                <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
                <span className="whitespace-nowrap">{label}</span>
                {isActive && <span className="ml-auto hidden h-1.5 w-1.5 rounded-full bg-emerald-300 lg:block" aria-hidden="true" />}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="mt-8 hidden rounded-xl border border-slate-800 bg-slate-950/70 p-4 lg:block">
        <p className="text-xs font-semibold text-slate-300">Development preview</p>
        <p className="mt-1 text-xs leading-5 text-slate-500">Financial operations are not enabled in this setup stage.</p>
      </div>
    </aside>
  )
}
