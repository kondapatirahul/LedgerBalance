export const chartRanges = [
  { value: '3', label: 'Last 3 months' },
  { value: '6', label: 'Last 6 months' },
]

export const chartSeries = {
  incoming: { label: 'Money in', color: '#34d399' },
  outgoing: { label: 'Money out', color: '#38bdf8' },
}

export function getChartSummary(rows) {
  return rows.reduce(
    (summary, row) => ({
      incoming: summary.incoming + row.incoming,
      outgoing: summary.outgoing + row.outgoing,
    }),
    { incoming: 0, outgoing: 0 },
  )
}
