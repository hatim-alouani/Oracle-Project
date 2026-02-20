export default function StatCard({
  label,
  value,
  icon,
  color = "blue",
}: {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  color?: "blue" | "green" | "red" | "yellow" | "purple";
}) {
  const colorClasses = {
    blue: "from-blue-500 to-blue-600 border-blue-200 text-blue-700",
    green: "from-green-500 to-green-600 border-green-200 text-green-700",
    red: "from-red-500 to-red-600 border-red-200 text-red-700",
    yellow: "from-yellow-500 to-yellow-600 border-yellow-200 text-yellow-700",
    purple: "from-purple-500 to-purple-600 border-purple-200 text-purple-700",
  };

  const iconBgClasses = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    red: "bg-red-100 text-red-600",
    yellow: "bg-yellow-100 text-yellow-600",
    purple: "bg-purple-100 text-purple-600",
  };

  const accentClasses = {
    blue: "bg-gradient-to-r from-blue-500 to-blue-400",
    green: "bg-gradient-to-r from-green-500 to-green-400",
    red: "bg-gradient-to-r from-red-500 to-red-400",
    yellow: "bg-gradient-to-r from-yellow-500 to-yellow-400",
    purple: "bg-gradient-to-r from-purple-500 to-purple-400",
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 card-hover">
      {/* Top accent bar */}
      <div className={`h-1 ${accentClasses[color]}`}></div>
      
      {/* Content */}
      <div className="relative p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide">{label}</div>
            <div className="mt-3 text-4xl font-bold text-slate-900">{value}</div>
          </div>
          {icon && (
            <div className={`rounded-xl p-3 ${iconBgClasses[color]} shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
              {icon}
            </div>
          )}
        </div>
        
        {/* Hover effect indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colorClasses[color]} opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
    </div>
  );
}
