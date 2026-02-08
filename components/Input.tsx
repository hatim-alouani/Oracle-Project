"use client";

export default function Input({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
  disabled = false,
  error,
}: {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email" | "number" | "date" | "password";
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
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={`w-full rounded border px-3 py-2 text-sm transition ${
          error
            ? "border-red-600 focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
            : "border-black/10 focus:border-[#2e89c6] focus:ring-2 focus:ring-[#2e89c6]/20"
        } disabled:bg-black/5 disabled:cursor-not-allowed outline-none`}
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
