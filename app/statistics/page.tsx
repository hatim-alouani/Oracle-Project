"use client";

import { useEffect, useMemo, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import Toast from "@/components/Toast";
import { fetchStudents } from "@/lib/api";
import { Student } from "@/lib/types";

export default function StatisticsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [toast, setToast] = useState<{ type: "ok" | "err"; msg: string } | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const list = await fetchStudents();
        setStudents(list);
      } catch (e: any) {
        setToast({ type: "err", msg: e?.message ?? "Failed to load students" });
      }
    })();
  }, []);

  const kpis = useMemo(() => {
    return {
      totalStudents: students.length,
      // These will be real once you add attendance stats endpoints
      monthlyAbsences: "—",
      monthlyLate: "—",
      alerts: "—",
    };
  }, [students.length]);

  return (
    <div>
      <SectionTitle
        title="Statistics & Alerts"
        subtitle="This page is ready. Plug real stats/alerts endpoints from n8n when you create them."
      />

      {toast ? (
        <div className="mb-4">
          <Toast type={toast.type} msg={toast.msg} />
        </div>
      ) : null}

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8 rounded bg-white shadow-soft p-6">
          <div className="text-sm font-extrabold">Key Indicators</div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded bg-black/5 p-4">
              <div className="text-xs text-black/60">Total students</div>
              <div className="text-2xl font-extrabold">{kpis.totalStudents}</div>
            </div>
            <div className="rounded bg-black/5 p-4">
              <div className="text-xs text-black/60">Monthly absences</div>
              <div className="text-2xl font-extrabold">{kpis.monthlyAbsences}</div>
              <div className="text-xs text-black/50 mt-1">Connect an n8n stats endpoint later.</div>
            </div>
            <div className="rounded bg-black/5 p-4">
              <div className="text-xs text-black/60">Monthly lateness</div>
              <div className="text-2xl font-extrabold">{kpis.monthlyLate}</div>
            </div>
            <div className="rounded bg-black/5 p-4">
              <div className="text-xs text-black/60">Active alerts</div>
              <div className="text-2xl font-extrabold">{kpis.alerts}</div>
            </div>
          </div>

          <div className="mt-6 text-sm font-extrabold">Students list (for quick check)</div>
          <div className="mt-2 text-sm text-black/60">
            Once attendance is stored, we’ll show per-student absences/lateness here.
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-black/5">
                <tr className="text-left">
                  <th className="p-3 font-extrabold">ID</th>
                  <th className="p-3 font-extrabold">First name</th>
                  <th className="p-3 font-extrabold">Last name</th>
                  <th className="p-3 font-extrabold">Email</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.student_id} className="border-t border-black/5">
                    <td className="p-3">{s.student_id}</td>
                    <td className="p-3">{s.first_name}</td>
                    <td className="p-3">{s.last_name}</td>
                    <td className="p-3 text-black/60">{s.email ?? "-"}</td>
                  </tr>
                ))}
                {students.length === 0 ? (
                  <tr>
                    <td className="p-5 text-black/60" colSpan={4}>
                      No students found.
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>

        <div className="lg:col-span-4 rounded bg-white shadow-soft p-6">
          <div className="text-sm font-extrabold">Alerts</div>
          <div className="mt-2 text-sm text-black/60">
            Add an n8n webhook like <span className="font-semibold">GET /alerts</span> to load real alerts from Oracle.
          </div>

          <div className="mt-4 space-y-3">
            <div className="rounded border border-black/10 bg-black/5 p-4">
              <div className="text-xs font-extrabold text-black/70">Not connected yet</div>
              <div className="text-sm text-black/60 mt-1">
                When your Oracle trigger inserts alerts, we’ll display them here.
              </div>
            </div>
          </div>

          <div className="mt-6 text-xs text-black/50">
            Next step: create n8n endpoint that returns alerts from <code>alerts</code> table.
          </div>
        </div>
      </div>
    </div>
  );
}
