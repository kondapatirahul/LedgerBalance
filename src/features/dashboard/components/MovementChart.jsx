import { useMemo, useState } from 'react'
import Card from '../../../shared/components/Card.jsx'
import ChartControls from './ChartControls.jsx'
import { movementByMonth } from '../data/dashboardData.js'
import { chartSeries, getChartSummary } from '../data/chartConfig.js'

const chartWidth = 640
const chartHeight = 220
const left = 42
const right = 12
const top = 14
const bottom = 34

function formatAxisValue(value) {
  return `${value}k`
}

export default function MovementChart() {
  const [range, setRange] = useState('6')
  const [visibleSeries, setVisibleSeries] = useState({ incoming: true, outgoing: true })
  const rows = useMemo(() => movementByMonth.slice(-Number(range)), [range])
  const summary = useMemo(() => getChartSummary(rows), [rows])
  const maxValue = Math.max(10, ...rows.flatMap((row) => [row.incoming, row.outgoing]))
  const scaleMax = Math.ceil(maxValue / 20) * 20
  const plotWidth = chartWidth - left - right
  const plotHeight = chartHeight - top - bottom
  const xFor = (index) => left + (rows.length === 1 ? plotWidth / 2 : (index / (rows.length - 1)) * plotWidth)
  const yFor = (value) => top + plotHeight - (value / scaleMax) * plotHeight

  function toggleSeries(key) {
    setVisibleSeries((current) => {
      const next = { ...current, [key]: !current[key] }
      if (!next.incoming && !next.outgoing) return current
      return next
    })
  }

  const linePoints = (key) => rows.map((row, index) => `${xFor(index)},${yFor(row[key])}`).join(' ')

  return (
    <Card title="Money movement" description="Illustrative monthly activity · not connected to a live ledger">
      <ChartControls
        range={range}
        onRangeChange={setRange}
        visibleSeries={visibleSeries}
        onSeriesChange={toggleSeries}
      />

      <div className="mt-5 grid grid-cols-2 gap-3">
        {visibleSeries.incoming && (
          <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-3">
            <p className="text-xs text-slate-400">Money in · selected period</p>
            <p className="mt-1 text-lg font-semibold text-emerald-300">₹{(summary.incoming * 1000).toLocaleString('en-IN')}</p>
          </div>
        )}
        {visibleSeries.outgoing && (
          <div className="rounded-xl border border-sky-400/15 bg-sky-400/5 p-3">
            <p className="text-xs text-slate-400">Money out · selected period</p>
            <p className="mt-1 text-lg font-semibold text-sky-300">₹{(summary.outgoing * 1000).toLocaleString('en-IN')}</p>
          </div>
        )}
      </div>

      <div className="mt-4 overflow-hidden rounded-xl bg-slate-950/50 p-2 sm:p-3">
        <svg
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          role="img"
          aria-label={`Illustrative money movement chart for the last ${range} months. Money in total ${summary.incoming} thousand rupees and money out total ${summary.outgoing} thousand rupees.`}
          className="h-auto w-full"
        >
          {[0, 1, 2, 3].map((step) => {
            const value = (scaleMax / 3) * step
            const y = yFor(value)
            return (
              <g key={step}>
                <line x1={left} x2={chartWidth - right} y1={y} y2={y} stroke="#334155" strokeDasharray="4 5" />
                <text x={left - 8} y={y + 4} fill="#64748b" fontSize="10" textAnchor="end">{formatAxisValue(Math.round(value))}</text>
              </g>
            )
          })}

          {visibleSeries.incoming && (
            <>
              <polyline points={linePoints('incoming')} fill="none" stroke={chartSeries.incoming.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              {rows.map((row, index) => (
                <g key={`incoming-${row.month}`}>
                  <circle cx={xFor(index)} cy={yFor(row.incoming)} r="4" fill={chartSeries.incoming.color} stroke="#0f172a" strokeWidth="2" />
                  <title>{`${row.month}: money in ₹${(row.incoming * 1000).toLocaleString('en-IN')}`}</title>
                </g>
              ))}
            </>
          )}

          {visibleSeries.outgoing && (
            <>
              <polyline points={linePoints('outgoing')} fill="none" stroke={chartSeries.outgoing.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              {rows.map((row, index) => (
                <g key={`outgoing-${row.month}`}>
                  <circle cx={xFor(index)} cy={yFor(row.outgoing)} r="4" fill={chartSeries.outgoing.color} stroke="#0f172a" strokeWidth="2" />
                  <title>{`${row.month}: money out ₹${(row.outgoing * 1000).toLocaleString('en-IN')}`}</title>
                </g>
              ))}
            </>
          )}

          {rows.map((row, index) => (
            <text key={row.month} x={xFor(index)} y={chartHeight - 9} fill="#94a3b8" fontSize="11" textAnchor="middle">{row.month}</text>
          ))}
        </svg>
      </div>
      <p className="mt-3 text-xs leading-5 text-slate-500">Values are sample figures shown in thousands of rupees. Hiding a series changes its display only; it does not change any account balance or ledger record.</p>
    </Card>
  )
}
