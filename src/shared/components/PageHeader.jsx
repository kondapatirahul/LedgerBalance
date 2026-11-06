export default function PageHeader({ eyebrow, title, description, actions, className = '' }) {
  return (
    <header className={`flex flex-col justify-between gap-4 sm:flex-row sm:items-end ${className}`}>
      <div className="max-w-3xl">
        {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">{eyebrow}</p>}
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">{title}</h1>
        {description && <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>}
      </div>
      {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
    </header>
  )
}
