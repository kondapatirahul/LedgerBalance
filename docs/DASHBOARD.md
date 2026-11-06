# Dashboard module

The dashboard currently uses static sample data from `src/features/dashboard/data/dashboardData.js`.

## Components

- `MetricCard.jsx`: displays one financial summary metric.
- `MovementChart.jsx`: CSS-based monthly comparison chart.
- `RecentActivity.jsx`: responsive sample activity table.

## Important limitation

The displayed amounts, changes, dates, and activity rows are illustrative only. They are not fetched from Supabase and must not be treated as real account balances or financial records. The dashboard is a presentation module; authoritative balances will be read from secured database operations in later modules.
