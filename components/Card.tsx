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
    <div className={`rounded bg-white shadow-soft overflow-hidden ${className}`}>
      {(title || subtitle || actions) && (
        <div className="bg-black/5 p-4 flex items-center justify-between">
          <div>
            {title && <div className="text-sm font-extrabold">{title}</div>}
            {subtitle && <div className="text-xs text-black/60 mt-1">{subtitle}</div>}
          </div>
          {actions && <div>{actions}</div>}
        </div>
      )}
      <div className="p-4">{children}</div>
    </div>
  );
}
