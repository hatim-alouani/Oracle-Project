"use client";

export default function Select({
  label,
  value,
  onChange,
  options,
  placeholder = "Select an option",
  required = false,
  disabled = false,
  error,
}: {
  label?: string;
  value: string | number;
  onChange: (value: string) => void;
  options: { value: string | number; label: string }[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
}) {
  return (
    <div>
      {label && (
        <label className="block text-xs font-bold text-black/70 mb-2">
          {label}
          {required && <span className="text-red-600 ml-1">*</span>}
        </label>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        disabled={disabled}
        className={`w-full rounded border px-3 py-2 text-sm transition ${
          error
            ? "border-red-600 focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
            : "border-black/10 focus:border-[#2e89c6] focus:ring-2 focus:ring-[#2e89c6]/20"
        } disabled:bg-black/5 disabled:cursor-not-allowed outline-none`}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
