import { Link } from 'react-router-dom'
import { ShieldCheck } from 'lucide-react'

export default function AuthShell({ children, eyebrow = 'SECURE ACCESS' }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-10 text-slate-100">
      <div className="w-full max-w-md">
        <Link to="/" className="mb-8 flex items-center justify-center gap-3 text-lg font-bold tracking-tight text-white">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-400 text-slate-950">
            <ShieldCheck size={22} />
          </span>
          LedgerBalance
        </Link>
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-black/20 sm:p-8">
          <p className="text-center text-[11px] font-bold tracking-[0.2em] text-emerald-300">{eyebrow}</p>
          {children}
        </div>
        <p className="mt-6 text-center text-xs leading-5 text-slate-600">
          Development preview · Do not enter real banking passwords or financial credentials.
        </p>
      </div>
    </main>
  )
}
