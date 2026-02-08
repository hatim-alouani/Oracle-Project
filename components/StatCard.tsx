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
    blue: "bg-blue-50 border-blue-200 text-blue-700",
    green: "bg-green-50 border-green-200 text-green-700",
    red: "bg-red-50 border-red-200 text-red-700",
    yellow: "bg-yellow-50 border-yellow-200 text-yellow-700",
    purple: "bg-purple-50 border-purple-200 text-purple-700",
  };

  return (
    <div className={`rounded-lg border p-4 ${colorClasses[color]}`}>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs font-semibold opacity-80">{label}</div>
          <div className="mt-1 text-2xl font-extrabold">{value}</div>
        </div>
        {icon && <div className="opacity-60">{icon}</div>}
      </div>
    </div>
  );
}
