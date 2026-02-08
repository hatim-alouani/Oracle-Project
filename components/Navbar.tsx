"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Dashboard" },
  { href: "/students", label: "Students" },
  { href: "/classes", label: "Classes" },
  { href: "/alerts", label: "Alerts" },
  { href: "/anomalies", label: "Anomalies" },
  { href: "/reports", label: "Reports" },
  { href: "/statistics", label: "Statistics" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="w-full bg-[#222] text-white shadow">
      <div className="container-page flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition">
          <div className="grid h-9 w-9 place-items-center rounded bg-[#2e89c6]">
            <span className="text-lg font-black">A</span>
          </div>
          <div className="leading-tight">
            <div className="font-semibold">Attendance Portal</div>
            <div className="text-xs text-white/70">Oracle + n8n + Next.js</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold">
          {items.map((it) => {
            const isActive = pathname === it.href;
            return (
              <Link
                key={it.href}
                href={it.href}
                className={`transition ${
                  isActive
                    ? "text-[#2e89c6] border-b-2 border-[#2e89c6] pb-1"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {it.label}
              </Link>
            );
          })}
        </nav>

        <div className="lg:hidden text-xs text-white/70">☰ Menu</div>
      </div>
    </div>
  );
}
