"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import SectionTitle from "@/components/SectionTitle";
import Toast from "@/components/Toast";
import { fetchStudents, fetchAttendanceHistory } from "@/lib/api";
import { Student, AttendanceRecord } from "@/lib/types";
import { fullName } from "@/lib/utils";
import AreaChart from "@/components/AreaChart";

const ABSENCE_ALERT_THRESHOLD = 5;

function Avatar({ name }: { name: string }) {
  const initials = useMemo(() => {
    const parts = name.trim().split(/\s+/);
    const a = parts[0]?.[0] ?? "U";
    const b = parts[1]?.[0] ?? "";
    return (a + b).toUpperCase();
  }, [name]);

  return (
    <div className="h-14 w-14 rounded-full bg-[#2e89c6]/10 border border-[#2e89c6]/25 flex items-center justify-center">
      <span className="text-sm font-extrabold text-[#2e89c6]">{initials}</span>
    </div>
  );
}

function ProgressBar({
  label,
  value,
  max,
}: {
  label: string;
  value: number;
  max: number;
}) {
  const pct = max <= 0 ? 0 : Math.min(100, Math.round((value / max) * 100));

  return (
    <div className="rounded border border-black/10 p-4">
      <div className="flex items-center justify-between">
        <div className="text-xs font-extrabold text-black/70">{label}</div>
        <div className="text-xs font-extrabold text-black/80">{value}</div>
      </div>

      <div className="mt-3 h-3 w-full rounded bg-black/10 overflow-hidden">
        <div className="h-full rounded bg-[#2e89c6]" style={{ width: `${pct}%` }} />
      </div>

      <div className="mt-2 text-[11px] text-black/50">{pct}%</div>
    </div>
  );
}

export default function StudentProfilePage() {
  const params = useParams();
  const studentId = Number(params?.id);

  const [student, setStudent] = useState<Student | null>(null);
  const [history, setHistory] = useState<AttendanceRecord[]>([]);
  const [toast, setToast] = useState<{ type: "ok" | "err"; msg: string } | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!Number.isFinite(studentId)) return;

    (async () => {
      setLoading(true);
      setToast(null);
      try {
        const [list, historyData] = await Promise.all([
          fetchStudents(),
          fetchAttendanceHistory({ student_id: studentId, limit: 30 }),
        ]);
        const found = list.find((s) => s.studentId === studentId) ?? null;
        setStudent(found);
        setHistory(historyData);

        if (!found) {
          setToast({ type: "err", msg: "Student not found." });
        }
      } catch (e: any) {
        setToast({ type: "err", msg: e?.message ?? "Failed to load student" });
      } finally {
        setLoading(false);
      }
    })();
  }, [studentId]);

  const absences = student?.absenceCount ?? 0;
  const late = student?.lateCount ?? 0;
  const dayCheck = student?.dayCheck ?? 0;

  const isAlert = absences >= ABSENCE_ALERT_THRESHOLD;
  const daysLeft = Math.max(0, ABSENCE_ALERT_THRESHOLD - absences);

  // Prepare chart data (estimated weekly progression)
  const chartData = useMemo(() => {
    const estimatedPresent = Math.max(0, 20 - absences - late);
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return days.map((day, i) => ({
      label: day,
      absences: Math.round((absences / 7) * (i + 1)),
      late: Math.round((late / 7) * (i + 1)),
      present: Math.round((estimatedPresent / 7) * (i + 1)),
    }));
  }, [absences, late]);

  return (
    <div>
      <SectionTitle
        title="Student Profile"
        subtitle="Attendance statistics and alert status."
      />

      {toast ? (
        <div className="mb-4">
          <Toast type={toast.type} msg={toast.msg} />
        </div>
      ) : null}

      <div className="mb-4">
        <Link
          href="/students"
          className="text-sm font-extrabold text-[#2e89c6] hover:underline"
        >
          ← Back to Students
        </Link>
      </div>

      {loading ? (
        <div className="rounded bg-white shadow-soft p-6 text-black/60">
          Loading...
        </div>
      ) : !student ? (
        <div className="rounded bg-white shadow-soft p-6 text-black/60">
          No data.
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-12">
          {/* LEFT CARD */}
          <div className="lg:col-span-4 rounded bg-white shadow-soft p-6">
            <div className="flex items-center gap-4">
              <Avatar name={fullName(student)} />
              <div className="min-w-0">
                <div className="truncate text-lg font-extrabold">
                  {fullName(student)}
                </div>
                <div className="truncate text-sm text-black/60">
                  {student.email ?? "-"}
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-2 text-sm">
              <div className="flex items-center justify-between rounded bg-black/5 px-3 py-2">
                <span className="text-black/70 font-bold">Absences</span>
                <span className="font-extrabold">{absences}</span>
              </div>
              <div className="flex items-center justify-between rounded bg-black/5 px-3 py-2">
                <span className="text-black/70 font-bold">Late</span>
                <span className="font-extrabold">{late}</span>
              </div>
              <div className="flex items-center justify-between rounded bg-black/5 px-3 py-2">
                <span className="text-black/70 font-bold">Marked today</span>
                <span className="font-extrabold">
                  {dayCheck === 1 ? "Yes" : "No"}
                </span>
              </div>
            </div>

            {/* ALERT BOX */}
            <div className="mt-6 rounded border border-black/10 p-4">
              <div className="text-xs font-extrabold text-black/70">
                Alert threshold
              </div>
              <div className="mt-1 text-sm text-black/70">
                Alert at{" "}
                <span className="font-extrabold">{ABSENCE_ALERT_THRESHOLD}</span>{" "}
                absences
              </div>

              {!isAlert ? (
                <div className="mt-3 rounded bg-emerald-50 border border-emerald-600/20 p-3">
                  <div className="text-xs font-extrabold text-emerald-700">
                    OK
                  </div>
                  <div className="text-sm text-emerald-800">
                    {daysLeft} day(s) left until alert.
                  </div>
                </div>
              ) : (
                <div className="mt-3 rounded bg-red-50 border border-red-600/20 p-3">
                  <div className="text-xs font-extrabold text-red-700">
                    ALERT
                  </div>
                  <div className="text-sm text-red-800">
                    Student has reached the absence limit (≥{" "}
                    {ABSENCE_ALERT_THRESHOLD}).
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="lg:col-span-8 rounded bg-white shadow-soft p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-extrabold">Statistics</div>
                <div className="text-xs text-black/60">
                  Simple graph based on stored counters
                </div>
              </div>

              {isAlert ? (
                <div className="rounded bg-red-50 border border-red-600/20 px-3 py-2 text-xs font-extrabold text-red-700">
                  ALERT STAGE
                </div>
              ) : (
                <div className="rounded bg-emerald-50 border border-emerald-600/20 px-3 py-2 text-xs font-extrabold text-emerald-700">
                  NORMAL
                </div>
              )}
            </div>

            <div className="mt-6 grid gap-6">
              {/* Attendance Trend Chart */}
              <div className="rounded border border-black/10 p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm font-extrabold">Attendance Trend</div>
                    <div className="text-xs text-black/60">Estimated weekly progression</div>
                  </div>
                  
                  {/* Legend */}
                  <div className="flex flex-wrap gap-3 text-xs">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded bg-green-500"></div>
                      <span className="font-bold text-green-700">Present</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded bg-yellow-500"></div>
                      <span className="font-bold text-yellow-700">Late</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded bg-red-500"></div>
                      <span className="font-bold text-red-700">Absent</span>
                    </div>
                  </div>
                </div>

                <AreaChart data={chartData} height={250} width={600} />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <ProgressBar
                  label="Absence Progress (towards alert)"
                  value={absences}
                  max={ABSENCE_ALERT_THRESHOLD}
                />

                <ProgressBar
                  label="Late Progress (simple scale)"
                  value={late}
                  max={10}
                />
              </div>
            </div>
          </div>

          {/* ATTENDANCE HISTORY */}
          <div className="lg:col-span-12 rounded bg-white shadow-soft p-6">
            <div className="text-sm font-extrabold mb-4">Attendance History</div>
            {history.length === 0 ? (
              <div className="text-black/60 text-sm">No attendance records found.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-black/5">
                    <tr className="text-left">
                      <th className="p-3 font-extrabold">Date</th>
                      <th className="p-3 font-extrabold">Status</th>
                      <th className="p-3 font-extrabold">Class</th>
                      <th className="p-3 font-extrabold">Minutes Late</th>
                      <th className="p-3 font-extrabold">Reason</th>
                    </tr>
                  </thead>
                  <tbody>
                    {history.map((record, idx) => (
                      <tr key={record.attendanceId || idx} className="border-t border-black/5">
                        <td className="p-3 text-black/70">
                          {record.sessionDate
                            ? new Date(record.sessionDate).toLocaleDateString()
                            : "-"}
                        </td>
                        <td className="p-3">
                          <span
                            className={`rounded px-2 py-1 text-xs font-bold ${
                              record.status === "PRESENT"
                                ? "bg-green-100 text-green-700"
                                : record.status === "LATE"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {record.status}
                          </span>
                        </td>
                        <td className="p-3 text-black/60">
                          {(record as any).className || (record.classId ? `Class ${record.classId}` : "-")}
                        </td>
                        <td className="p-3 text-black/70">
                          {record.status === "LATE" ? (record.minutesLate ?? 0) : "-"}
                        </td>
                        <td className="p-3 text-black/60 text-xs">
                          {record.reason || "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <div className="mt-3 text-xs text-black/50">
              Showing last {history.length} record(s)
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
