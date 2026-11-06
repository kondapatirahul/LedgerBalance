import { NavLink } from 'react-router-dom'
import { Activity, ArrowLeftRight, ClipboardList, LayoutDashboard, Wallet } from 'lucide-react'
import BrandMark from '../../shared/components/BrandMark.jsx'

const navigation = [
  { label: 'Overview', to: '/', icon: LayoutDashboard, end: true },
  { label: 'Accounts', to: '/accounts', icon: Wallet },
  { label: 'Transactions', to: '/transactions', icon: ArrowLeftRight },
  { label: 'Statements', to: '/statements', icon: ClipboardList },
  { label: 'Audit activity', to: '/audit', icon: Activity },
]

export default function Sidebar() {
  return (
    <aside className="border-b border-slate-800 bg-slate-900/90 p-4 lg:min-h-screen lg:w-64 lg:border-b-0 lg:border-r lg:p-5">
      <div className="flex items-center gap-3 px-2 py-2">
        <BrandMark />
        <div>
          <p className="font-semibold tracking-tight">LedgerBalance</p>
          <p className="text-xs text-slate-500">Money movement you can prove</p>
        </div>
      </div>

      <p className="mb-3 mt-8 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Workspace</p>
      <nav aria-label="Main navigation" className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-1">
        {navigation.map(({ label, to, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) => `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${isActive ? 'bg-emerald-400/10 font-semibold text-emerald-300 ring-1 ring-inset ring-emerald-400/20' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'}`}
          >
            <Icon size={17} strokeWidth={1.8} />
            <span>{label}</span>
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
