"use client";

import { useEffect, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import EmptyState from "@/components/EmptyState";
import LoadingSpinner from "@/components/LoadingSpinner";
import Toast from "@/components/Toast";
import Button from "@/components/Button";
import Input from "@/components/Input";
import {
  fetchMonthlyReport,
  fetchSemesterKpis,
  fetchRiskAssessment,
} from "@/lib/api";
import { MonthlyAttendanceRow, SemesterKpiRow, StudentRiskRow } from "@/lib/types";

type ReportType = "monthly" | "semester" | "risk";

export default function ReportsPage() {
  const [activeReport, setActiveReport] = useState<ReportType>("monthly");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ type: "ok" | "err"; msg: string } | null>(null);

  // Monthly Report
  const [monthlyData, setMonthlyData] = useState<MonthlyAttendanceRow[]>([]);
  const [monthFilter, setMonthFilter] = useState("");

  // Semester KPIs
  const [semesterData, setSemesterData] = useState<SemesterKpiRow[]>([]);

  // Risk Assessment
  const [riskData, setRiskData] = useState<StudentRiskRow[]>([]);

  async function loadReport() {
    setLoading(true);
    setToast(null);
    try {
      if (activeReport === "monthly") {
        const data = await fetchMonthlyReport(
          monthFilter ? { month: monthFilter } : undefined
        );
        setMonthlyData(data);
      } else if (activeReport === "semester") {
        const data = await fetchSemesterKpis();
        setSemesterData(data);
      } else if (activeReport === "risk") {
        const data = await fetchRiskAssessment();
        setRiskData(data);
      }
    } catch (e: any) {
      setToast({ type: "err", msg: e?.message ?? `Failed to load ${activeReport} report` });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadReport();
  }, [activeReport]);

  function exportToCSV(data: any[], filename: string) {
    if (data.length === 0) {
      setToast({ type: "err", msg: "No data to export" });
      return;
    }

    const headers = Object.keys(data[0]);
    const csvContent = [
      headers.join(","),
      ...data.map((row) =>
        headers.map((h) => JSON.stringify(row[h] ?? "")).join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${filename}-${new Date().toISOString().split("T")[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);

    setToast({ type: "ok", msg: "CSV exported successfully" });
  }

  return (
    <div>
      <SectionTitle
        title="Reports"
        subtitle="Generate and export detailed analytics reports."
      />

      {toast && (
        <div className="mb-4">
          <Toast type={toast.type} msg={toast.msg} />
        </div>
      )}

      {/* Report Type Selector */}
      <div className="flex gap-2 mb-6 border-b border-black/10">
        <button
          onClick={() => setActiveReport("monthly")}
          className={`px-4 py-2 font-bold text-sm transition ${
            activeReport === "monthly"
              ? "border-b-2 border-[#2e89c6] text-[#2e89c6]"
              : "text-black/60 hover:text-black"
          }`}
        >
          Monthly Report
        </button>
        <button
          onClick={() => setActiveReport("semester")}
          className={`px-4 py-2 font-bold text-sm transition ${
            activeReport === "semester"
              ? "border-b-2 border-[#2e89c6] text-[#2e89c6]"
              : "text-black/60 hover:text-black"
          }`}
        >
          Semester KPIs
        </button>
        <button
          onClick={() => setActiveReport("risk")}
          className={`px-4 py-2 font-bold text-sm transition ${
            activeReport === "risk"
              ? "border-b-2 border-[#2e89c6] text-[#2e89c6]"
              : "text-black/60 hover:text-black"
          }`}
        >
          Risk Assessment
        </button>
      </div>

      {/* Monthly Report */}
      {activeReport === "monthly" && (
        <>
          <Card title="Filters & Export" className="mb-6">
            <div className="flex flex-wrap gap-4 items-end">
              <div className="flex-1 min-w-[200px]">
                <Input
                  label="Month (YYYY-MM)"
                  type="text"
                  value={monthFilter}
                  onChange={setMonthFilter}
                  placeholder="e.g., 2026-02"
                />
              </div>
              <Button onClick={loadReport} variant="secondary">
                Apply Filter
              </Button>
              <Button
                onClick={() => exportToCSV(monthlyData, "monthly-report")}
                variant="primary"
                disabled={monthlyData.length === 0}
              >
                Export CSV
              </Button>
            </div>
          </Card>

          {loading ? (
            <LoadingSpinner />
          ) : monthlyData.length === 0 ? (
            <Card>
              <EmptyState message="No monthly report data available." />
            </Card>
          ) : (
            <Card title={`Monthly Report ${monthFilter ? `(${monthFilter})` : ""}`}>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-black/5">
                    <tr className="text-left">
                      <th className="p-3 font-extrabold">Student</th>
                      <th className="p-3 font-extrabold">Month</th>
                      <th className="p-3 font-extrabold">Total Classes</th>
                      <th className="p-3 font-extrabold">Present</th>
                      <th className="p-3 font-extrabold">Absent</th>
                      <th className="p-3 font-extrabold">Late</th>
                      <th className="p-3 font-extrabold">Attendance Rate</th>
                      <th className="p-3 font-extrabold">Avg Minutes Late</th>
                    </tr>
                  </thead>
                  <tbody>
                    {monthlyData.map((row, idx) => (
                      <tr key={idx} className="border-t border-black/5">
                        <td className="p-3 font-semibold">{row.fullName}</td>
                        <td className="p-3 text-black/70">{row.monthName}</td>
                        <td className="p-3">{row.totalDays}</td>
                        <td className="p-3 text-green-700 font-semibold">{row.daysPresent}</td>
                        <td className="p-3 text-red-700 font-semibold">{row.daysAbsent}</td>
                        <td className="p-3 text-yellow-700 font-semibold">{row.daysLate}</td>
                        <td className="p-3">
                          <span
                            className={`rounded px-2 py-1 text-xs font-bold ${
                              row.attendanceRate >= 90
                                ? "bg-green-100 text-green-700"
                                : row.attendanceRate >= 75
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {row.attendanceRate.toFixed(1)}%
                          </span>
                        </td>
                        <td className="p-3 text-black/70">{row.avgMinutesLate.toFixed(1)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          )}
        </>
      )}

      {/* Semester KPIs */}
      {activeReport === "semester" && (
        <>
          <div className="mb-6 flex justify-end">
            <Button
              onClick={() => exportToCSV(semesterData, "semester-kpis")}
              variant="primary"
              size="sm"
              disabled={semesterData.length === 0}
            >
              Export CSV
            </Button>
          </div>

          {loading ? (
            <LoadingSpinner />
          ) : semesterData.length === 0 ? (
            <Card>
              <EmptyState message="No semester KPI data available." />
            </Card>
          ) : (
            <div className="space-y-6">
              {semesterData.map((semester, idx) => (
                <Card key={idx} title={`Semester: ${semester.semester}`}>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                    <div className="rounded bg-blue-50 border border-blue-200 p-4">
                      <div className="text-xs font-semibold text-blue-700 opacity-80">
                        Total Students
                      </div>
                      <div className="mt-1 text-2xl font-extrabold text-blue-700">
                        {semester.totalStudents}
                      </div>
                    </div>
                    <div className="rounded bg-purple-50 border border-purple-200 p-4">
                      <div className="text-xs font-semibold text-purple-700 opacity-80">
                        Total Classes
                      </div>
                      <div className="mt-1 text-2xl font-extrabold text-purple-700">
                        {semester.totalClasses}
                      </div>
                    </div>
                    <div className="rounded bg-green-50 border border-green-200 p-4">
                      <div className="text-xs font-semibold text-green-700 opacity-80">
                        Avg Attendance Rate
                      </div>
                      <div className="mt-1 text-2xl font-extrabold text-green-700">
                        {semester.avgAttendanceRate.toFixed(1)}%
                      </div>
                    </div>
                    <div className="rounded bg-yellow-50 border border-yellow-200 p-4">
                      <div className="text-xs font-semibold text-yellow-700 opacity-80">
                        At-Risk Students
                      </div>
                      <div className="mt-1 text-2xl font-extrabold text-yellow-700">
                        {semester.atRiskStudents}
                      </div>
                    </div>
                    <div className="rounded bg-red-50 border border-red-200 p-4">
                      <div className="text-xs font-semibold text-red-700 opacity-80">
                        Students with Alerts
                      </div>
                      <div className="mt-1 text-2xl font-extrabold text-red-700">
                        {semester.studentsWithAlerts}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </>
      )}

      {/* Risk Assessment */}
      {activeReport === "risk" && (
        <>
          <div className="mb-6 flex justify-end">
            <Button
              onClick={() => exportToCSV(riskData, "risk-assessment")}
              variant="primary"
              size="sm"
              disabled={riskData.length === 0}
            >
              Export CSV
            </Button>
          </div>

          {loading ? (
            <LoadingSpinner />
          ) : riskData.length === 0 ? (
            <Card>
              <EmptyState message="No risk assessment data available." />
            </Card>
          ) : (
            <Card title="Risk Assessment">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-black/5">
                    <tr className="text-left">
                      <th className="p-3 font-extrabold">Student</th>
                      <th className="p-3 font-extrabold">Risk Level</th>
                      <th className="p-3 font-extrabold">Absences</th>
                      <th className="p-3 font-extrabold">Late Count</th>
                      <th className="p-3 font-extrabold">Anomalies</th>
                      <th className="p-3 font-extrabold">Active Alerts</th>
                    </tr>
                  </thead>
                  <tbody>
                    {riskData
                      .sort((a, b) => {
                        const order = { HIGH: 0, MEDIUM: 1, LOW: 2 };
                        return (
                          (order[a.riskLevel as keyof typeof order] ?? 3) -
                          (order[b.riskLevel as keyof typeof order] ?? 3)
                        );
                      })
                      .map((row, idx) => (
                        <tr key={idx} className="border-t border-black/5">
                          <td className="p-3 font-semibold">{row.studentName}</td>
                          <td className="p-3">
                            <span
                              className={`rounded px-2 py-1 text-xs font-bold ${
                                row.riskLevel === "HIGH"
                                  ? "bg-red-100 text-red-700"
                                  : row.riskLevel === "MEDIUM"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-green-100 text-green-700"
                              }`}
                            >
                              {row.riskLevel}
                            </span>
                          </td>
                          <td className="p-3 text-red-700 font-semibold">{row.absenceCount}</td>
                          <td className="p-3 text-yellow-700 font-semibold">{row.lateCount}</td>
                          <td className="p-3">{row.detectedAnomalies}</td>
                          <td className="p-3">{row.activeAlerts}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </Card>
          )}
        </>
      )}
    </div>
  );
}
