import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Hero />

      <SectionTitle title="Admin Modules" subtitle="Choose a section to manage attendance and analytics." />

      <div className="grid gap-6 md:grid-cols-3">
        <Link href="/statistics" className="rounded bg-white shadow-soft overflow-hidden hover:translate-y-[-2px] transition">
          <div className="h-28 bg-gradient-to-r from-[#7b56b3]/25 to-[#7b56b3]/10" />
          <div className="p-5">
            <div className="text-sm font-extrabold">Statistics</div>
            <div className="text-sm text-black/60 mt-1">Monthly/semester indicators and summaries.</div>
          </div>
        </Link>

        <Link href="/students" className="rounded bg-white shadow-soft overflow-hidden hover:translate-y-[-2px] transition">
          <div className="h-28 bg-gradient-to-r from-black/10 to-black/5" />
          <div className="p-5">
            <div className="text-sm font-extrabold">Students</div>
            <div className="text-sm text-black/60 mt-1">Add or remove students in the database.</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
