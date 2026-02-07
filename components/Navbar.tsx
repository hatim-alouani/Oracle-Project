import Link from "next/link";

const items = [
  { href: "/", label: "Home" },
  { href: "/statistics", label: "Statistics" },
  { href: "/students", label: "Students" },
];

export default function Navbar() {
  return (
    <div className="w-full bg-[#222] text-white shadow">
      <div className="container-page flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded bg-[#2e89c6]">
            <span className="text-lg font-black">A</span>
          </div>
          <div className="leading-tight">
            <div className="font-semibold">Attendance Portal</div>
            <div className="text-xs text-white/70">Oracle + n8n + Vercel</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          {items.map((it) => (
            <Link key={it.href} href={it.href} className="text-white/85 hover:text-white">
              {it.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden text-xs text-white/70">Menu in header</div>
      </div>
    </div>
  );
}
