"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import SectionTitle from "@/components/SectionTitle";
import Toast from "@/components/Toast";
import { fetchStudents } from "@/lib/api";
import { Student } from "@/lib/types";
import { fullName } from "@/lib/utils";

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
        const list = await fetchStudents();
        const found = list.find((s) => s.student_id === studentId) ?? null;
        setStudent(found);

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

  const absences = (student as any)?.absence_count ?? 0;
  const late = (student as any)?.late_count ?? 0;
  const dayCheck = (student as any)?.day_check ?? 0;

  const isAlert = absences >= ABSENCE_ALERT_THRESHOLD;
  const daysLeft = Math.max(0, ABSENCE_ALERT_THRESHOLD - absences);

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

            <div className="mt-6 grid gap-6 md:grid-cols-2">
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

              <div className="rounded border border-black/10 p-4 md:col-span-2">
                <div className="text-sm font-extrabold">How alerts work</div>
                <div className="mt-2 text-sm text-black/70">
                  Rule: <span className="font-extrabold">absences ≥ 5</span>{" "}
                  triggers an alert.
                </div>
                <div className="mt-2 text-sm text-black/60">
                  Later improvement: store attendance history by date to generate
                  monthly/semester reports.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
