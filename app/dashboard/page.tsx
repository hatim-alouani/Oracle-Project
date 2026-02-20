"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import StatCard from "@/components/StatCard";
import LoadingSpinner from "@/components/LoadingSpinner";
import Link from "next/link";
import { fetchDashboardStats, fetchStudents } from "@/lib/api";
import { DashboardStats } from "@/lib/types";

export default function Page() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const [dashboardData, students] = await Promise.all([
          fetchDashboardStats(),
          fetchStudents(),
        ]);
        
        // Fallback to student count if API doesn't return it
        if (!dashboardData.totalStudents && students.length > 0) {
          dashboardData.totalStudents = students.length;
        }
        
        setStats(dashboardData);
      } catch (e) {
        console.error("Failed to load dashboard stats:", e);
        setStats({
          totalStudents: 0,
          activeAlerts: 0,
          atRiskStudents: 0,
          recentAnomalies: [],
        });
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      <Hero />

      <div className="mb-8 mt-12 animate-fade-in">
        <div className="mb-2">
          <h1 className="text-4xl font-bold text-slate-900">
            Dashboard
          </h1>
          <p className="mt-2 text-lg text-slate-600">
            Overview of attendance analytics and system status
          </p>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          {/* Stats Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12 stagger-animation">
            <StatCard
              label="Total Students"
              value={stats?.totalStudents ?? 0}
              color="blue"
              icon={
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              }
            />
            <StatCard
              label="Active Alerts"
              value={stats?.activeAlerts ?? 0}
              color="red"
              icon={
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              }
            />
            <StatCard
              label="At-Risk Students"
              value={stats?.atRiskStudents ?? 0}
              color="yellow"
              icon={
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
            />
            <StatCard
              label="Recent Anomalies"
              value={stats?.recentAnomalies?.length ?? 0}
              color="purple"
              icon={
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
            />
          </div>

          {/* Quick Actions */}
          <div className="mb-12">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Quick Actions</h2>
              <p className="mt-1 text-gray-600">Access key features quickly</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Link 
                href="/students" 
                className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/60 backdrop-blur-xl shadow-xl shadow-black/10 transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20"></div>
                <div className="relative p-8">
                  <div className="mb-4 rounded-xl bg-blue-100 w-12 h-12 flex items-center justify-center">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">Manage Students</div>
                  <div className="text-sm text-gray-600 mt-2">Add, remove, and mark attendance</div>
                </div>
              </Link>
              
              <Link 
                href="/alerts" 
                className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/60 backdrop-blur-xl shadow-xl shadow-black/10 transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-600/20"></div>
                <div className="relative p-8">
                  <div className="mb-4 rounded-xl bg-red-100 w-12 h-12 flex items-center justify-center">
                    <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div className="text-xl font-bold text-gray-900 group-hover:text-red-700 transition-colors">View Alerts</div>
                  <div className="text-sm text-gray-600 mt-2">Monitor attendance alerts</div>
                </div>
              </Link>
              
              <Link 
                href="/reports" 
                className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/60 backdrop-blur-xl shadow-xl shadow-black/10 transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/20"></div>
                <div className="relative p-8">
                  <div className="mb-4 rounded-xl bg-purple-100 w-12 h-12 flex items-center justify-center">
                    <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">Generate Reports</div>
                  <div className="text-sm text-gray-600 mt-2">Monthly, semester, and risk reports</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Recent Anomalies */}
          {stats?.recentAnomalies && stats.recentAnomalies.length > 0 && (
            <>
              <SectionTitle title="Recent Anomalies" subtitle="Latest detected attendance patterns." />
              <div className="rounded bg-white shadow-soft overflow-hidden mb-8">
                <table className="w-full text-sm">
                  <thead className="bg-black/5">
                    <tr className="text-left">
                      <th className="p-3 font-extrabold">Pattern Type</th>
                      <th className="p-3 font-extrabold">Student</th>
                      <th className="p-3 font-extrabold">Detection Date</th>
                      <th className="p-3 font-extrabold">Severity</th>
                      <th className="p-3 font-extrabold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats.recentAnomalies.slice(0, 5).map((anomaly, idx) => (
                      <tr key={idx} className="border-t border-black/5">
                        <td className="p-3 font-semibold">{anomaly.patternType}</td>
                        <td className="p-3 text-black/70">Student {anomaly.studentId}</td>
                        <td className="p-3 text-black/60">{new Date(anomaly.detectionDate).toLocaleDateString()}</td>
                        <td className="p-3">
                          <span className={`rounded px-2 py-1 text-xs font-bold ${
                            anomaly.severity === "HIGH" ? "bg-red-100 text-red-700" :
                            anomaly.severity === "MEDIUM" ? "bg-yellow-100 text-yellow-700" :
                            "bg-green-100 text-green-700"
                          }`}>
                            {anomaly.severity}
                          </span>
                        </td>
                        <td className="p-3">
                          {anomaly.isResolved ? (
                            <span className="text-xs text-green-600 font-bold">✓ Resolved</span>
                          ) : (
                            <span className="text-xs text-orange-600 font-bold">⚠ Active</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* Admin Modules */}
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

            <Link href="/classes" className="rounded bg-white shadow-soft overflow-hidden hover:translate-y-[-2px] transition">
              <div className="h-28 bg-gradient-to-r from-green-500/25 to-green-500/10" />
              <div className="p-5">
                <div className="text-sm font-extrabold">Classes</div>
                <div className="text-sm text-black/60 mt-1">Manage classes and enrollments.</div>
              </div>
            </Link>

            <Link href="/alerts" className="rounded bg-white shadow-soft overflow-hidden hover:translate-y-[-2px] transition">
              <div className="h-28 bg-gradient-to-r from-red-500/25 to-red-500/10" />
              <div className="p-5">
                <div className="text-sm font-extrabold">Alerts</div>
                <div className="text-sm text-black/60 mt-1">View and manage attendance alerts.</div>
              </div>
            </Link>

            <Link href="/anomalies" className="rounded bg-white shadow-soft overflow-hidden hover:translate-y-[-2px] transition">
              <div className="h-28 bg-gradient-to-r from-purple-500/25 to-purple-500/10" />
              <div className="p-5">
                <div className="text-sm font-extrabold">Anomalies</div>
                <div className="text-sm text-black/60 mt-1">Detected attendance patterns and anomalies.</div>
              </div>
            </Link>

            <Link href="/reports" className="rounded bg-white shadow-soft overflow-hidden hover:translate-y-[-2px] transition">
              <div className="h-28 bg-gradient-to-r from-blue-500/25 to-blue-500/10" />
              <div className="p-5">
                <div className="text-sm font-extrabold">Reports</div>
                <div className="text-sm text-black/60 mt-1">Generate and export detailed reports.</div>
              </div>
            </Link>

            <Link href="/settings" className="rounded bg-white shadow-soft overflow-hidden hover:translate-y-[-2px] transition">
              <div className="h-28 bg-gradient-to-r from-yellow-500/25 to-yellow-500/10" />
              <div className="p-5">
                <div className="text-sm font-extrabold">Settings</div>
                <div className="text-sm text-black/60 mt-1">Configure alert thresholds and rules.</div>
              </div>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
