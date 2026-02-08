"use client";

import { useEffect, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import Toast from "@/components/Toast";
import {
  fetchAlerts,
  fetchAnomalies,
  fetchMonthlyReport,
  fetchStudents
} from "@/lib/api";
import { Alert, Anomaly, MonthlyReportRow } from "@/lib/types";

export default function StatisticsPage() {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [anomalies, setAnomalies] = useState<Anomaly[]>([]);
  const [report, setReport] = useState<MonthlyReportRow[]>([]);
  const [stats, setStats] = useState({ totalStudents: 0, totalAbsences: 0, attendanceRate: 0 });

  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<{ type: "ok" | "err"; msg: string } | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const [alertList, anomalyList, reportList, studentList] = await Promise.all([
          fetchAlerts(),
          fetchAnomalies(),
          fetchMonthlyReport(),
          fetchStudents()
        ]);

        setAlerts(alertList);
        setAnomalies(anomalyList);
        setReport(reportList);

        // Calculate basic stats
        const totalAbsences = reportList.reduce((acc, row) => acc + (row.days_absent || 0), 0);
        const totalDays = reportList.reduce((acc, row) => acc + (row.total_days || 0), 0);
        const rate = totalDays > 0
          ? (reportList.reduce((acc, row) => acc + (row.days_present || 0), 0) / totalDays) * 100
          : 0;

        setStats({
          totalStudents: studentList.length,
          totalAbsences,
          attendanceRate: Math.round(rate * 10) / 10
        });
      } catch (e: any) {
        setToast({ type: "err", msg: e?.message ?? "Failed to load statistics" });
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="space-y-8">
      <SectionTitle
        title="Analytics Dashboard"
        subtitle="Real-time insights on attendance, risks, and anomalies."
      />

      {toast && (
        <div className="mb-4">
          <Toast type={toast.type} msg={toast.msg} />
        </div>
      )}

      {/* KPI Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl bg-white p-6 shadow-sm border border-black/5">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Students</div>
          <div className="mt-2 text-3xl font-extrabold text-gray-900">{stats.totalStudents}</div>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-sm border border-black/5">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Attendance Rate</div>
          <div className="mt-2 text-3xl font-extrabold text-blue-600">{stats.attendanceRate}%</div>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-sm border border-black/5">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Active Alerts</div>
          <div className="mt-2 text-3xl font-extrabold text-red-600">{alerts.length}</div>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-sm border border-black/5">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Anomalies Detected</div>
          <div className="mt-2 text-3xl font-extrabold text-orange-600">{anomalies.length}</div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Active Alerts Section */}
        <div className="rounded-xl bg-white shadow-sm border border-black/5 overflow-hidden">
          <div className="p-5 border-b border-black/5 flex justify-between items-center bg-gray-50/50">
            <h3 className="font-bold text-gray-900">Active Alerts</h3>
            <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded-full">{alerts.length}</span>
          </div>
          <div className="divide-y divide-black/5 max-h-[400px] overflow-y-auto">
            {alerts.length === 0 ? (
              <div className="p-8 text-center text-gray-500 text-sm">No active alerts. Great job!</div>
            ) : (
              alerts.map((alert) => (
                <div key={alert.alert_id} className="p-4 hover:bg-gray-50/50 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm font-bold text-gray-900">{alert.student_name || `Student #${alert.student_id}`}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{alert.message}</div>
                    </div>
                    <span className="text-[10px] font-mono text-gray-400">
                      {new Date(alert.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Anomalies Section */}
        <div className="rounded-xl bg-white shadow-sm border border-black/5 overflow-hidden">
          <div className="p-5 border-b border-black/5 flex justify-between items-center bg-gray-50/50">
            <h3 className="font-bold text-gray-900">Detected Anomalies</h3>
            <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded-full">{anomalies.length}</span>
          </div>
          <div className="divide-y divide-black/5 max-h-[400px] overflow-y-auto">
            {anomalies.length === 0 ? (
              <div className="p-8 text-center text-gray-500 text-sm">No anomalies detected. Pattern analysis is active.</div>
            ) : (
              anomalies.map((anomaly) => (
                <div key={anomaly.pattern_id} className="p-4 hover:bg-gray-50/50 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm font-bold text-gray-900">{anomaly.student_name || `Student #${anomaly.student_id}`}</div>
                      <div className="text-xs text-gray-600 mt-0.5">{anomaly.description}</div>
                      <span className={`inline-block mt-2 text-[10px] font-bold px-2 py-0.5 rounded border ${anomaly.severity === 'HIGH' || anomaly.severity === 'CRITICAL'
                          ? 'bg-red-50 text-red-700 border-red-200'
                          : 'bg-yellow-50 text-yellow-700 border-yellow-200'
                        }`}>
                        {anomaly.severity} SEVERITY
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-400">
                      {new Date(anomaly.detection_date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Monthly Report Table */}
      <div className="rounded-xl bg-white shadow-sm border border-black/5 overflow-hidden">
        <div className="p-5 border-b border-black/5 bg-gray-50/50">
          <h3 className="font-bold text-gray-900">Monthly Attendance Report</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50/50 text-gray-500 border-b border-black/5">
              <tr>
                <th className="p-4 font-semibold">Student</th>
                <th className="p-4 font-semibold">Month</th>
                <th className="p-4 font-semibold text-center">Rate</th>
                <th className="p-4 font-semibold text-center">Present</th>
                <th className="p-4 font-semibold text-center">Absent</th>
                <th className="p-4 font-semibold text-center">Late</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {report.map((row, i) => (
                <tr key={`${row.student_id}-${i}`} className="hover:bg-gray-50/50">
                  <td className="p-4 font-medium text-gray-900">{row.full_name}</td>
                  <td className="p-4 text-gray-500">{row.month}</td>
                  <td className="p-4 text-center">
                    <span className={`font-bold ${row.attendance_rate >= 90 ? 'text-green-600' :
                        row.attendance_rate >= 75 ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                      {row.attendance_rate}%
                    </span>
                  </td>
                  <td className="p-4 text-center text-gray-600">{row.days_present}</td>
                  <td className="p-4 text-center text-red-600 font-medium">{row.days_absent}</td>
                  <td className="p-4 text-center text-yellow-600">{row.days_late}</td>
                </tr>
              ))}
              {report.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-gray-500">
                    No monthly data available yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
