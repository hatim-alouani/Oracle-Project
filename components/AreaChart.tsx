export default function AreaChart({ 
  data,
  height = 300,
  width = 800 
}: { 
  data: { label: string; absences: number; late: number; present: number }[];
  height?: number;
  width?: number;
}) {
  if (data.length === 0) return null;

  const maxValue = Math.max(...data.map(d => Math.max(d.absences, d.late, d.present)), 1);
  const padding = 50;
  const chartWidth = width - 2 * padding;
  const chartHeight = height - 2 * padding;

  const xStep = chartWidth / (data.length - 1 || 1);
  
  const getY = (value: number) => padding + chartHeight - (value / maxValue) * chartHeight;

  // Create paths for area fills
  const createAreaPath = (values: number[]) => {
    const linePath = values.map((val, i) => 
      `${i === 0 ? 'M' : 'L'} ${padding + i * xStep} ${getY(val)}`
    ).join(' ');
    const bottomPath = `L ${padding + (values.length - 1) * xStep} ${padding + chartHeight} L ${padding} ${padding + chartHeight} Z`;
    return linePath + ' ' + bottomPath;
  };

  const absencesArea = createAreaPath(data.map(d => d.absences));
  const lateArea = createAreaPath(data.map(d => d.late));
  const presentArea = createAreaPath(data.map(d => d.present));

  return (
    <div className="overflow-x-auto">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full" style={{ maxWidth: `${width}px` }}>
        <defs>
          <linearGradient id="absencesGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="lateGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="presentGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((fraction) => {
          const y = padding + chartHeight * (1 - fraction);
          return (
            <g key={fraction}>
              <line
                x1={padding}
                y1={y}
                x2={width - padding}
                y2={y}
                stroke="#e5e7eb"
                strokeWidth="1"
              />
              <text
                x={padding - 10}
                y={y + 4}
                textAnchor="end"
                fontSize="12"
                fill="#6b7280"
              >
                {Math.round(maxValue * fraction)}
              </text>
            </g>
          );
        })}

        {/* X-axis labels */}
        {data.map((d, i) => (
          <text
            key={i}
            x={padding + i * xStep}
            y={height - padding + 20}
            textAnchor="middle"
            fontSize="10"
            fill="#6b7280"
          >
            {d.label}
          </text>
        ))}

        {/* Area fills */}
        <path d={presentArea} fill="url(#presentGradient)" />
        <path d={lateArea} fill="url(#lateGradient)" />
        <path d={absencesArea} fill="url(#absencesGradient)" />

        {/* Lines */}
        <path 
          d={data.map((d, i) => `${i === 0 ? 'M' : 'L'} ${padding + i * xStep} ${getY(d.present)}`).join(' ')} 
          fill="none" 
          stroke="#10b981" 
          strokeWidth="2.5" 
        />
        <path 
          d={data.map((d, i) => `${i === 0 ? 'M' : 'L'} ${padding + i * xStep} ${getY(d.late)}`).join(' ')} 
          fill="none" 
          stroke="#f59e0b" 
          strokeWidth="2.5" 
        />
        <path 
          d={data.map((d, i) => `${i === 0 ? 'M' : 'L'} ${padding + i * xStep} ${getY(d.absences)}`).join(' ')} 
          fill="none" 
          stroke="#ef4444" 
          strokeWidth="2.5" 
        />

        {/* Points */}
        {data.map((d, i) => (
          <g key={i}>
            <circle cx={padding + i * xStep} cy={getY(d.present)} r="4" fill="#10b981" stroke="white" strokeWidth="2" />
            <circle cx={padding + i * xStep} cy={getY(d.late)} r="4" fill="#f59e0b" stroke="white" strokeWidth="2" />
            <circle cx={padding + i * xStep} cy={getY(d.absences)} r="4" fill="#ef4444" stroke="white" strokeWidth="2" />
          </g>
        ))}
      </svg>
    </div>
  );
}
