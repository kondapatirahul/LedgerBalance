# LedgerBalance

ZIP 07 extends the existing dashboard with period-based financial summary cards and a demo account balance allocation panel.

## Apply this ZIP

Extract its contents into the existing LedgerBalance repository root. Do not replace the repository or remove files from ZIPs 01–06.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Data status

All financial values in this dashboard extension are fictional sample data. The period selector changes local presentation data only. Live balances must later be fetched from authorized database-side operations; browser state is never the source of truth for money.
