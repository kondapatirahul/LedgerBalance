import { ArrowUpRight, ShieldCheck, Wallet, Workflow } from 'lucide-react'
import { appConfig } from '../../shared/constants/appConfig.js'
import Badge from '../../shared/components/Badge.jsx'
import Card from '../../shared/components/Card.jsx'
import PageHeader from '../../shared/components/PageHeader.jsx'
import StatCard from '../../shared/components/StatCard.jsx'

const highlights = [
  { label: 'Account balances', detail: 'Account overview will appear here', icon: Wallet, tone: 'emerald' },
  { label: 'Money movement', detail: 'Deposits and transfers are not enabled yet', icon: Workflow, tone: 'sky' },
  { label: 'Ledger integrity', detail: 'Every posting will be traceable', icon: ShieldCheck, tone: 'violet' },
]

export default function HomePage() {
  return (
    <div className="space-y-8">
      <Card className="overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/50" contentClassName="p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <PageHeader
            eyebrow={`${appConfig.name} · Day 1`}
            title="Money movement you can prove."
            description="A clear workspace for accounts, transactions and an append-only financial record. We are building the interface before enabling money operations."
          />
          <Badge tone="success">Setup 04/25</Badge>
        </div>
      </Card>

      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-100">Workspace modules</h2>
          <p className="mt-1 text-sm text-slate-500">Reusable interface components now power the overview cards.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map(({ label, detail, icon: Icon, tone }) => (
            <StatCard key={label} label={label} value="Coming soon" detail={detail} icon={Icon} tone={tone} />
          ))}
        </div>
      </section>

      <Card title="Safety-first development" description="Financial controls are being built separately from presentation components.">
        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-0.5 shrink-0 text-emerald-300" size={20} />
          <div>
            <p className="text-sm leading-6 text-slate-400">This version is a frontend shell only. It does not create accounts, store balances or move money. Those operations must be enforced by database transactions and server-side authorization.</p>
            <div className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-slate-500">Integrity work is planned separately <ArrowUpRight size={13} /></div>
          </div>
        </div>
      </Card>
    </div>
  )
}
