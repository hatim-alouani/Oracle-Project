"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import Toast from "@/components/Toast";
import {
  addStudent,
  fetchStudents,
  removeStudent,
  markStudentPresent,
  markStudentLate,
  markStudentAbsent,
} from "@/lib/api";
import { Student } from "@/lib/types";
import { fullName } from "@/lib/utils";

function Avatar({ name }: { name: string }) {
  const initials = useMemo(() => {
    const parts = name.trim().split(/\s+/);
    const a = parts[0]?.[0] ?? "U";
    const b = parts[1]?.[0] ?? "";
    return (a + b).toUpperCase();
  }, [name]);

  return (
    <div className="h-10 w-10 rounded-full bg-[#2e89c6]/10 border border-[#2e89c6]/25 flex items-center justify-center">
      <span className="text-xs font-extrabold text-[#2e89c6]">{initials}</span>
    </div>
  );
}

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [toast, setToast] = useState<{ type: "ok" | "err"; msg: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [markedStudents, setMarkedStudents] = useState<Set<number>>(new Set());

  const [first_name, setFirst] = useState("");
  const [last_name, setLast] = useState("");
  const [email, setEmail] = useState("");

  async function reload() {
    const list = await fetchStudents();
    setStudents(list);
  }

  useEffect(() => {
    reload().catch((e: any) => setToast({ type: "err", msg: e?.message ?? "Failed to load students" }));
  }, []);

  async function onAdd() {
    setLoading(true);
    setToast(null);
    try {
      await addStudent({
        first_name: first_name.trim(),
        last_name: last_name.trim(),
        email: email.trim() || undefined,
      });
      setFirst("");
      setLast("");
      setEmail("");
      await reload();
      setToast({ type: "ok", msg: "Student added successfully." });
    } catch (e: any) {
      setToast({ type: "err", msg: e?.message ?? "Failed to add student" });
    } finally {
      setLoading(false);
    }
  }

  async function onRemove(id: number) {
    if (!confirm("Remove this student?")) return;
    setLoading(true);
    setToast(null);
    try {
      await removeStudent({ student_id: id });
      await reload();
      setToast({ type: "ok", msg: "Student removed successfully." });
    } catch (e: any) {
      setToast({ type: "err", msg: e?.message ?? "Failed to remove student" });
    } finally {
      setLoading(false);
    }
  }

  async function onMarkPresent(student: Student) {
    setLoading(true);
    setToast(null);
    try {
      // Immediately mark as processed to disable buttons
      setMarkedStudents((prev) => new Set(prev).add(student.studentId));
      await markStudentPresent({ student_id: student.studentId });
      await reload(); // so dayCheck updates immediately
      setToast({ type: "ok", msg: "Student marked as present." });
    } catch (e: any) {
      // If failed, remove from marked set
      setMarkedStudents((prev) => {
        const next = new Set(prev);
        next.delete(student.studentId);
        return next;
      });
      setToast({ type: "err", msg: e?.message ?? "Failed to mark present" });
    } finally {
      setLoading(false);
    }
  }

  async function onMarkLate(student: Student) {
    setLoading(true);
    setToast(null);
    try {
      // Immediately mark as processed to disable buttons
      setMarkedStudents((prev) => new Set(prev).add(student.studentId));
      await markStudentLate({ student_id: student.studentId });
      await reload();
      setToast({ type: "ok", msg: "Student marked as late." });
    } catch (e: any) {
      // If failed, remove from marked set
      setMarkedStudents((prev) => {
        const next = new Set(prev);
        next.delete(student.studentId);
        return next;
      });
      setToast({ type: "err", msg: e?.message ?? "Failed to mark late" });
    } finally {
      setLoading(false);
    }
  }

  async function onMarkAbsent(student: Student) {
    setLoading(true);
    setToast(null);
    try {
      // Immediately mark as processed to disable buttons
      setMarkedStudents((prev) => new Set(prev).add(student.studentId));
      await markStudentAbsent({ student_id: student.studentId });
      await reload();
      setToast({ type: "ok", msg: "Student marked as absent." });
    } catch (e: any) {
      // If failed, remove from marked set
      setMarkedStudents((prev) => {
        const next = new Set(prev);
        next.delete(student.studentId);
        return next;
      });
      setToast({ type: "err", msg: e?.message ?? "Failed to mark absent" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <SectionTitle title="Students" subtitle="Manage students + mark daily attendance (calls n8n webhooks)." />

      {toast ? (
        <div className="mb-4">
          <Toast type={toast.type} msg={toast.msg} />
        </div>
      ) : null}

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Add Student */}
        <div className="lg:col-span-4 rounded bg-white shadow-soft p-5">
          <div className="text-sm font-extrabold">Add Student</div>

          <label className="mt-4 block text-xs font-bold text-black/70">First name</label>
          <input
            className="mt-2 w-full rounded border border-black/10 px-3 py-2"
            value={first_name}
            onChange={(e) => setFirst(e.target.value)}
          />

          <label className="mt-4 block text-xs font-bold text-black/70">Last name</label>
          <input
            className="mt-2 w-full rounded border border-black/10 px-3 py-2"
            value={last_name}
            onChange={(e) => setLast(e.target.value)}
          />

          <label className="mt-4 block text-xs font-bold text-black/70">Email (optional)</label>
          <input
            className="mt-2 w-full rounded border border-black/10 px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            onClick={onAdd}
            disabled={loading || !first_name.trim() || !last_name.trim()}
            className="mt-5 w-full rounded bg-[#2e89c6] px-4 py-3 text-white font-extrabold disabled:opacity-60"
          >
            {loading ? "Working..." : "Add Student"}
          </button>

          <div className="mt-4 text-xs text-black/50">
            Alert rule: <span className="font-extrabold text-black/70">5+ absences</span>
          </div>
        </div>

        {/* Students list */}
        <div className="lg:col-span-8 rounded bg-white shadow-soft overflow-hidden">
          <div className="bg-black/5 p-4 flex items-center justify-between">
            <div className="text-sm font-extrabold">All Students</div>
            <div className="text-xs text-black/60">{students.length} student(s)</div>
          </div>

          {/* No header row (as requested) */}
          <div className="divide-y divide-black/5">
            {students.map((s) => {
              const dayCheckDisabled = s.dayCheck === 1;
              const isMarked = markedStudents.has(s.studentId);
              const buttonsDisabled = dayCheckDisabled || isMarked || loading;

              const abs = s.absenceCount ?? 0;
              const late = s.lateCount ?? 0;
              const isAlert = abs >= 5;

              return (
                <div key={s.studentId} className="p-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3 min-w-0">
                    <Link href={`/students/${s.studentId}`} className="shrink-0">
                      <Avatar name={fullName(s)} />
                    </Link>

                    <div className="min-w-0">
                      <Link href={`/students/${s.studentId}`} className="block truncate font-extrabold hover:underline">
                        {fullName(s)}
                      </Link>
                      <div className="truncate text-xs text-black/60">{s.email ?? "-"}</div>

                      <div className="mt-2 flex items-center gap-2 text-xs">
                        <span className="rounded bg-black/5 px-2 py-1">
                          Absences: <span className="font-extrabold">{abs}</span>
                        </span>
                        <span className="rounded bg-black/5 px-2 py-1">
                          Late: <span className="font-extrabold">{late}</span>
                        </span>
                        {isAlert ? (
                          <span className="rounded bg-red-50 border border-red-600/20 px-2 py-1 text-red-700 font-extrabold">
                            ALERT
                          </span>
                        ) : (
                          <span className="rounded bg-emerald-50 border border-emerald-600/20 px-2 py-1 text-emerald-700 font-extrabold">
                            OK
                          </span>
                        )}
                        {dayCheckDisabled ? (
                          <span className="rounded bg-blue-50 border border-blue-600/20 px-2 py-1 text-blue-700 font-extrabold">
                            Marked today
                          </span>
                        ) : (
                          <span className="rounded bg-black/5 px-2 py-1 text-black/70 font-extrabold">
                            Not marked
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 sm:justify-end">
                    <button
                      onClick={() => onMarkPresent(s)}
                      disabled={buttonsDisabled}
                      className="rounded border border-green-600/30 bg-green-50 px-3 py-2 text-xs font-extrabold text-green-700 hover:bg-green-100 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Present
                    </button>
                    <button
                      onClick={() => onMarkLate(s)}
                      disabled={buttonsDisabled}
                      className="rounded border border-yellow-600/30 bg-yellow-50 px-3 py-2 text-xs font-extrabold text-yellow-700 hover:bg-yellow-100 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Late
                    </button>
                    <button
                      onClick={() => onMarkAbsent(s)}
                      disabled={buttonsDisabled}
                      className="rounded border border-orange-600/30 bg-orange-50 px-3 py-2 text-xs font-extrabold text-orange-700 hover:bg-orange-100 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Absent
                    </button>

                    <button
                      onClick={() => onRemove(s.studentId)}
                      disabled={loading}
                      className="rounded border border-red-600/30 bg-red-50 px-3 py-2 text-xs font-extrabold text-red-700 hover:bg-red-100 disabled:opacity-60"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}

            {students.length === 0 ? (
              <div className="p-5 text-black/60">No students yet. Add one on the left.</div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
