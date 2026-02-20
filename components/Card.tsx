export default function Card({
  title,
  subtitle,
  children,
  className = "",
  actions,
}: {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  actions?: React.ReactNode;
}) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl card-hover ${className}`}>
      {/* Top accent when hovering */}
      <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      
      {(title || subtitle || actions) && (
        <div className="relative border-b border-slate-200 bg-slate-50/50 p-6 flex items-center justify-between">
          <div>
            {title && <div className="text-lg font-bold text-slate-900">{title}</div>}
            {subtitle && <div className="text-sm text-slate-600 mt-1">{subtitle}</div>}
          </div>
          {actions && <div>{actions}</div>}
        </div>
      )}
      <div className="relative p-6">{children}</div>
    </div>
  );
}
