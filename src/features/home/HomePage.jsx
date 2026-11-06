import { ArrowRight, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { appConfig } from '../../shared/constants/appConfig.js'
import Badge from '../../shared/components/Badge.jsx'
import Card from '../../shared/components/Card.jsx'
import PageHeader from '../../shared/components/PageHeader.jsx'
import MetricCard from '../dashboard/components/MetricCard.jsx'
import MovementChart from '../dashboard/components/MovementChart.jsx'
import RecentActivity from '../dashboard/components/RecentActivity.jsx'
import { dashboardMetrics } from '../dashboard/data/dashboardData.js'

export default function HomePage() {
  return (
    <div className="space-y-7">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <PageHeader
          eyebrow={`${appConfig.name} · Dashboard`}
          title="Good overview. Clear records."
          description="A snapshot of account activity and money movement for the LedgerBalance workspace."
        />
        <Badge tone="warning">Demo data only</Badge>
      </div>

      <section aria-label="Financial summary" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {dashboardMetrics.map((metric) => <MetricCard key={metric.label} metric={metric} />)}
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.35fr_1fr]">
        <MovementChart />
        <Card title="Integrity status" description="Current implementation status">
          <div className="flex items-start gap-3 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4">
            <ShieldCheck className="mt-0.5 shrink-0 text-amber-300" size={20} />
            <div>
              <p className="font-medium text-slate-200">Financial operations are not enabled</p>
              <p className="mt-1 text-sm leading-6 text-slate-400">These dashboard figures are static sample data. No deposits, withdrawals or transfers can be performed in this delivery.</p>
            </div>
          </div>
          <Link to="/accounts" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-emerald-300 hover:text-emerald-200">
            Explore account module <ArrowRight size={15} />
          </Link>
        </Card>
      </section>

      <RecentActivity />
    </div>
  )
}
