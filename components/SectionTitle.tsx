export default function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mt-10 mb-4">
      <div className="border-b border-[#2e89c6]/60 pb-2">
        <h2 className="text-lg font-extrabold text-[#111]">{title}</h2>
        {subtitle ? <p className="text-sm text-black/60 mt-1">{subtitle}</p> : null}
      </div>
    </div>
  );
}
