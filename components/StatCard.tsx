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
    blue: "from-blue-500 to-blue-600 bg-blue-50/10 border-blue-200/50 text-blue-700",
    green: "from-green-500 to-green-600 bg-green-50/10 border-green-200/50 text-green-700",
    red: "from-red-500 to-red-600 bg-red-50/10 border-red-200/50 text-red-700",
    yellow: "from-yellow-500 to-yellow-600 bg-yellow-50/10 border-yellow-200/50 text-yellow-700",
    purple: "from-purple-500 to-purple-600 bg-purple-50/10 border-purple-200/50 text-purple-700",
  };

  const iconBgClasses = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    red: "bg-red-100 text-red-600",
    yellow: "bg-yellow-100 text-yellow-600",
    purple: "bg-purple-100 text-purple-600",
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/60 backdrop-blur-xl shadow-xl shadow-black/10 transition-all duration-300 hover:shadow-2xl hover:shadow-black/20">
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[color]} opacity-10`}></div>
      
      {/* Content */}
      <div className="relative p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-600/80">{label}</div>
            <div className="mt-2 text-3xl font-bold text-gray-900">{value}</div>
          </div>
          {icon && (
            <div className={`rounded-xl p-3 ${iconBgClasses[color]} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
              {icon}
            </div>
          )}
        </div>
        
        {/* Subtle animated gradient border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
    </div>
  );
}
