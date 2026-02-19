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
    <div className={`group relative overflow-hidden rounded-2xl border border-white/20 bg-white/60 backdrop-blur-xl shadow-xl shadow-black/10 transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 ${className}`}>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      
      {(title || subtitle || actions) && (
        <div className="relative border-b border-white/20 bg-white/30 p-6 flex items-center justify-between">
          <div>
            {title && <div className="text-lg font-bold text-gray-900">{title}</div>}
            {subtitle && <div className="text-sm text-gray-600 mt-1">{subtitle}</div>}
          </div>
          {actions && <div>{actions}</div>}
        </div>
      )}
      <div className="relative p-6">{children}</div>
    </div>
  );
}
