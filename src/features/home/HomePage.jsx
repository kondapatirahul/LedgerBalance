import { ArrowUpRight, ShieldCheck, Wallet, Workflow } from 'lucide-react'
import { appConfig } from '../../shared/constants/appConfig.js'

const highlights = [
  { label: 'Account balances', detail: 'Account overview will appear here', icon: Wallet },
  { label: 'Money movement', detail: 'Deposits and transfers are not enabled yet', icon: Workflow },
  { label: 'Ledger integrity', detail: 'Every posting will be traceable', icon: ShieldCheck },
]

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/50 p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-emerald-300">{appConfig.name} · Day 1</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Money movement you can prove.</h1>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
              A clear workspace for accounts, transactions and an append-only financial record. We are building the interface before enabling money operations.
            </p>
          </div>
          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">Setup 03/25</span>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold">Workspace modules</h2>
            <p className="mt-1 text-sm text-slate-500">The application shell is ready for the next modules.</p>
          </div>
          <span className="text-xs text-slate-500">Preview</span>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map(({ label, detail, icon: Icon }) => (
            <article key={label} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-slate-800 text-emerald-300"><Icon size={19} /></div>
              <h3 className="mt-4 font-semibold">{label}</h3>
              <p className="mt-2 text-sm leading-5 text-slate-500">{detail}</p>
              <div className="mt-5 flex items-center gap-1 text-xs font-medium text-slate-600">Coming in a later delivery <ArrowUpRight size={13} /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/30 p-5">
        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-0.5 text-emerald-300" size={20} />
          <div>
            <h2 className="text-sm font-semibold">Safety-first development</h2>
            <p className="mt-1 text-sm leading-6 text-slate-500">This version is a frontend shell only. It does not create accounts, store balances or move money. Those operations must be enforced by database transactions and server-side authorization.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
