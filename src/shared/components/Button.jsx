const variants = {
  primary: 'bg-emerald-400 text-slate-950 hover:bg-emerald-300 focus-visible:outline-emerald-300',
  secondary: 'border border-slate-700 bg-slate-800 text-slate-100 hover:bg-slate-700 focus-visible:outline-slate-400',
  ghost: 'text-slate-300 hover:bg-slate-800 hover:text-white focus-visible:outline-slate-400',
  danger: 'bg-rose-500 text-white hover:bg-rose-400 focus-visible:outline-rose-400',
}

export default function Button({
  children,
  variant = 'primary',
  type = 'button',
  disabled = false,
  loading = false,
  className = '',
  onClick,
}) {
  const style = variants[variant] ?? variants.primary

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`inline-flex min-h-10 items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${style} ${className}`}
    >
      {loading ? 'Please wait…' : children}
    </button>
  )
}
