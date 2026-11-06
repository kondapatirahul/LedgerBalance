import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { appConfig } from '../../shared/constants/appConfig.js'
import Badge from '../../shared/components/Badge.jsx'
import Card from '../../shared/components/Card.jsx'
import PageHeader from '../../shared/components/PageHeader.jsx'
import MetricCard from '../dashboard/components/MetricCard.jsx'
import MovementChart from '../dashboard/components/MovementChart.jsx'
import RecentActivity from '../dashboard/components/RecentActivity.jsx'
import SummaryPeriodSelect from '../dashboard/components/SummaryPeriodSelect.jsx'
import AccountBalanceBreakdown from '../dashboard/components/AccountBalanceBreakdown.jsx'
import DashboardQuickLinks from '../dashboard/components/DashboardQuickLinks.jsx'
import DashboardDataNotice from '../dashboard/components/DashboardDataNotice.jsx'
import { summaryPeriods } from '../dashboard/data/summaryData.js'

export default function HomePage() {
  const [period, setPeriod] = useState('month')
  const selectedSummary = summaryPeriods[period]

  return (
    <div className="space-y-7">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <PageHeader
          eyebrow={`${appConfig.name} · Dashboard`}
          title="Good overview. Clear records."
          description="A snapshot of account activity and money movement for the LedgerBalance workspace."
        />
        <div className="flex flex-wrap items-center gap-3">
          <SummaryPeriodSelect value={period} onChange={setPeriod} />
          <Badge tone="warning">Demo data only</Badge>
        </div>
      </div>

      <section aria-label={`${selectedSummary.label} financial summary`} className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {selectedSummary.metrics.map((metric) => <MetricCard key={metric.label} metric={metric} />)}
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.15fr_1fr]" aria-label="Account allocation and implementation status">
        <AccountBalanceBreakdown />
        <Card title="Integrity status" description="Current implementation status">
          <div className="flex items-start gap-3 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4">
            <div>
              <p className="font-medium text-slate-200">Financial operations are not enabled</p>
              <p className="mt-1 text-sm leading-6 text-slate-400">
                These dashboard figures are static sample data. No deposits, withdrawals or transfers can be performed in this delivery.
              </p>
            </div>
          </div>
          <Link to="/accounts" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-emerald-300 hover:text-emerald-200">
            Explore account module <ArrowRight size={15} />
          </Link>
        </Card>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.35fr_1fr]" aria-label="Money movement and summary note">
        <MovementChart />
        <Card title="Summary note" description="How to read these figures">
          <p className="text-sm leading-6 text-slate-400">
            The period selector changes the illustrative inflow and outflow totals. The account allocation is also fictional. Live balances will be supplied by authorized database queries after account access controls and ledger operations are implemented.
          </p>
        </Card>
      </section>

      <RecentActivity />
      <DashboardQuickLinks />
      <DashboardDataNotice />
    </div>
  )
}
