const tones = {
  neutral: 'border-slate-700 bg-slate-800 text-slate-300',
  success: 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300',
  warning: 'border-amber-400/20 bg-amber-400/10 text-amber-300',
  danger: 'border-rose-400/20 bg-rose-400/10 text-rose-300',
  info: 'border-sky-400/20 bg-sky-400/10 text-sky-300',
}

export default function Badge({ children, tone = 'neutral', className = '' }) {
  const style = tones[tone] ?? tones.neutral

  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${style} ${className}`}>
      {children}
    </span>
  )
}
