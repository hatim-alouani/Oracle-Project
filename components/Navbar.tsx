"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const items = [
  // { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/students", label: "Students" },
  { href: "/classes", label: "Classes" },
  { href: "/alerts", label: "Alerts" },
  { href: "/anomalies", label: "Anomalies" },
  { href: "/reports", label: "Reports" },
  { href: "/statistics", label: "Statistics" },
  { href: "/settings", label: "Settings" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Unified header with navigation */}
      <div className="w-full bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white border-b-4 border-blue-600 shadow-lg sticky top-0 z-50">
        <div className="container-page">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-4 hover:opacity-90 transition-all duration-300 group">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative grid h-14 w-14 place-items-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 shadow-xl transform group-hover:scale-105 transition-transform">
                  <span className="text-2xl font-black">🎓</span>
                </div>
              </div>
              <div className="leading-tight">
                <div className="text-xl font-bold tracking-tight">Attendance Portal</div>
                {/* <div className="text-xs text-slate-300 font-medium">Educational Analytics & Monitoring System</div> */}
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {items.map((it) => {
                const isActive = pathname === it.href;
                return (
                  <Link
                    key={it.href}
                    href={it.href}
                    className={`relative px-5 py-2 text-sm font-semibold transition-all duration-300 rounded-md ${
                      isActive
                        ? "text-white bg-blue-600"
                        : "text-slate-300 hover:text-white hover:bg-slate-600"
                    }`}
                  >
                    {it.label}
                  </Link>
                );
              })}
            </nav>

            {/* System Status & Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <div className="hidden xl:flex items-center gap-2 text-xs text-slate-300">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                <span>Online</span>
              </div>

              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-white p-2 hover:bg-slate-600 rounded transition"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50 animate-fade-in" onClick={() => setMobileMenuOpen(false)}>
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl animate-slide-in-right" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-800">Navigation</h2>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-slate-100 rounded transition">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="space-y-2">
                {items.map((it) => {
                  const isActive = pathname === it.href;
                  return (
                    <Link
                      key={it.href}
                      href={it.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "text-blue-700 bg-blue-50 font-semibold"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <span>{it.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
