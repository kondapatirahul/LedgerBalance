export default function Card({
  children,
  title,
  description,
  action,
  className = '',
  contentClassName = '',
}) {
  return (
    <section className={`rounded-2xl border border-slate-800 bg-slate-900/70 ${className}`}>
      {(title || description || action) && (
        <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-800 px-5 py-4">
          <div>
            {title && <h2 className="font-semibold text-slate-100">{title}</h2>}
            {description && <p className="mt-1 text-sm text-slate-500">{description}</p>}
          </div>
          {action}
        </div>
      )}
      <div className={`p-5 ${contentClassName}`}>{children}</div>
    </section>
  )
}
