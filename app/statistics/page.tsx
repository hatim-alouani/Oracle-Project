"use client";

import { useEffect, useMemo, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import Toast from "@/components/Toast";
import AreaChart from "@/components/AreaChart";
import { fetchStudents, fetchAlerts } from "@/lib/api";
import { Student, AlertItem } from "@/lib/types";
import { fullName } from "@/lib/utils";

export default function StatisticsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [alerts, setAlerts] = useState<AlertItem[]>([]);
  const [toast, setToast] = useState<{ type: "ok" | "err"; msg: string } | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const [studentList, alertList] = await Promise.all([
          fetchStudents(),
          fetchAlerts(),
        ]);
        setStudents(studentList);
        setAlerts(alertList);
      } catch (e: any) {
        setToast({ type: "err", msg: e?.message ?? "Failed to load data" });
      }
    })();
  }, []);

  const stats = useMemo(() => {
    const totalStudents = students.length;
    const totalAbsences = students.reduce((sum, s) => sum + (s.absenceCount ?? 0), 0);
    const totalLate = students.reduce((sum, s) => sum + (s.lateCount ?? 0), 0);
    const alertCount = students.filter(s => (s.absenceCount ?? 0) >= 5).length;
    
    // Calculate estimated total days (absences + late = days with issues, assume 20 days per student)
    const estimatedTotalDays = totalStudents * 20;
    const totalIssues = totalAbsences + totalLate;
    const estimatedPresent = Math.max(0, estimatedTotalDays - totalIssues);
    const attendanceRate = estimatedTotalDays > 0 
      ? ((estimatedPresent / estimatedTotalDays) * 100).toFixed(1)
      : "0.0";

    return {
      totalStudents,
      totalAbsences,
      totalLate,
      alertCount,
      estimatedPresent,
      attendanceRate,
    };
  }, [students]);

  const chartData = useMemo(() => {
    // Prepare data for each student
    return students.slice(0, 10).map(s => ({
      label: fullName(s).split(' ')[0] || 'Student',
      absences: s.absenceCount ?? 0,
      late: s.lateCount ?? 0,
      present: Math.max(0, 20 - (s.absenceCount ?? 0) - (s.lateCount ?? 0)), // Estimate present days
    }));
  }, [students]);

  return (
    <div>
      <SectionTitle
        title="Statistics & Analytics"
        subtitle="Overall attendance metrics and trends based on student records."
      />

      {toast ? (
        <div className="mb-4">
          <Toast type={toast.type} msg={toast.msg} />
        </div>
      ) : null}

      {/* KPIs */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <div className="rounded bg-white shadow-soft p-5">
          <div className="text-xs font-bold text-black/60">Total Students</div>
          <div className="text-3xl font-extrabold text-[#2e89c6] mt-2">{stats.totalStudents}</div>
        </div>

        <div className="rounded bg-white shadow-soft p-5">
          <div className="text-xs font-bold text-black/60">Total Absences</div>
          <div className="text-3xl font-extrabold text-red-600 mt-2">{stats.totalAbsences}</div>
        </div>

        <div className="rounded bg-white shadow-soft p-5">
          <div className="text-xs font-bold text-black/60">Total Late</div>
          <div className="text-3xl font-extrabold text-yellow-600 mt-2">{stats.totalLate}</div>
        </div>

        <div className="rounded bg-white shadow-soft p-5">
          <div className="text-xs font-bold text-black/60">Students with Alerts</div>
          <div className="text-3xl font-extrabold text-orange-600 mt-2">{stats.alertCount}</div>
          <div className="text-xs text-black/50 mt-1">≥5 absences</div>
        </div>
      </div>

      {/* Attendance Rate */}
      <div className="rounded bg-white shadow-soft p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-sm font-extrabold">Overall Attendance Rate</div>
            <div className="text-xs text-black/60 mt-1">Estimated based on 20 days per student</div>
          </div>
          <div className="text-4xl font-extrabold text-green-600">{stats.attendanceRate}%</div>
        </div>
        
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded bg-green-50 border border-green-200 p-3">
            <div className="text-xs font-bold text-green-700">Estimated Present</div>
            <div className="text-xl font-extrabold text-green-800 mt-1">{stats.estimatedPresent}</div>
          </div>
          <div className="rounded bg-red-50 border border-red-200 p-3">
            <div className="text-xs font-bold text-red-700">Absences</div>
            <div className="text-xl font-extrabold text-red-800 mt-1">{stats.totalAbsences}</div>
          </div>
          <div className="rounded bg-yellow-50 border border-yellow-200 p-3">
            <div className="text-xs font-bold text-yellow-700">Late Arrivals</div>
            <div className="text-xl font-extrabold text-yellow-800 mt-1">{stats.totalLate}</div>
          </div>
        </div>
      </div>

      {/* Attendance Trend Chart */}
      <div className="rounded bg-white shadow-soft p-6 mb-6">
        <div className="text-sm font-extrabold mb-2">Attendance Trends (First 10 Students)</div>
        <div className="text-xs text-black/60 mb-4">
          Comparing absences, late arrivals, and estimated present days per student
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-6 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-red-500"></div>
            <span className="font-bold text-red-700">Absences</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-yellow-500"></div>
            <span className="font-bold text-yellow-700">Late</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-green-500"></div>
            <span className="font-bold text-green-700">Present (Est.)</span>
          </div>
        </div>

        {students.length > 0 ? (
          <AreaChart data={chartData} />
        ) : (
          <div className="text-center text-black/60 py-8">No student data available</div>
        )}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Students Breakdown */}
        <div className="lg:col-span-2 rounded bg-white shadow-soft p-6">
          <div className="text-sm font-extrabold mb-4">Student Breakdown</div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-black/5">
                <tr className="text-left">
                  <th className="p-3 font-extrabold">ID</th>
                  <th className="p-3 font-extrabold">First Name</th>
                  <th className="p-3 font-extrabold">Last Name</th>
                  <th className="p-3 font-extrabold">Email</th>
                  <th className="p-3 font-extrabold text-red-700">Absences</th>
                  <th className="p-3 font-extrabold text-yellow-700">Late</th>
                  <th className="p-3 font-extrabold">Status</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => {
                  const abs = s.absenceCount ?? 0;
                  const late = s.lateCount ?? 0;
                  const isAlert = abs >= 5;

                  return (
                    <tr key={s.studentId} className="border-t border-black/5">
                      <td className="p-3 text-black/70">{s.studentId}</td>
                      <td className="p-3 font-semibold">{s.firstName}</td>
                      <td className="p-3 font-semibold">{s.lastName}</td>
                      <td className="p-3 text-black/60">{s.email ?? "-"}</td>
                      <td className="p-3 text-red-700 font-bold">{abs}</td>
                      <td className="p-3 text-yellow-700 font-bold">{late}</td>
                      <td className="p-3">
                        {isAlert ? (
                          <span className="rounded bg-red-50 border border-red-600/20 px-2 py-1 text-xs text-red-700 font-extrabold">
                            ALERT
                          </span>
                        ) : (
                          <span className="rounded bg-green-50 border border-green-600/20 px-2 py-1 text-xs text-green-700 font-extrabold">
                            OK
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
                {students.length === 0 ? (
                  <tr>
                    <td className="p-5 text-black/60" colSpan={7}>
                      No students found.
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>

        {/* Alerts Panel */}
        <div className="lg:col-span-1 rounded bg-white shadow-soft p-6">
          <div className="text-sm font-extrabold mb-4">Active Alerts</div>
          
          {alerts.length === 0 ? (
            <div className="rounded border border-black/10 bg-black/5 p-4">
              <div className="text-xs font-extrabold text-black/70">No Active Alerts</div>
              <div className="text-sm text-black/60 mt-1">
                All students are within acceptable attendance limits.
              </div>
            </div>
          ) : (
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {alerts.slice(0, 10).map((alert) => (
                <div 
                  key={alert.alertId} 
                  className={`rounded border p-3 ${
                    alert.alertType === 'ABSENCE' 
                      ? 'bg-red-50 border-red-200' 
                      : alert.alertType === 'LATE'
                      ? 'bg-yellow-50 border-yellow-200'
                      : 'bg-orange-50 border-orange-200'
                  }`}
                >
                  <div className={`text-xs font-extrabold ${
                    alert.alertType === 'ABSENCE' 
                      ? 'text-red-700' 
                      : alert.alertType === 'LATE'
                      ? 'text-yellow-700'
                      : 'text-orange-700'
                  }`}>
                    {alert.alertType}
                  </div>
                  <div className="text-sm text-black/80 mt-1">
                    {alert.message}
                  </div>
                  <div className="text-xs text-black/50 mt-1">
                    {new Date(alert.createdAt).toLocaleDateString()}
                  </div>
                </div>
              ))}
              {alerts.length > 10 && (
                <div className="text-xs text-center text-black/60 pt-2">
                  + {alerts.length - 10} more alerts
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
