import { appConfig } from '../constants/appConfig.js'

/** Format a major-unit amount for display only; never use this for ledger arithmetic. */
export function formatMoney(amount, currency = appConfig.defaultCurrency) {
  const numericAmount = Number(amount)

  if (!Number.isFinite(numericAmount)) {
    return '—'
  }

  return new Intl.NumberFormat(appConfig.locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numericAmount)
}
