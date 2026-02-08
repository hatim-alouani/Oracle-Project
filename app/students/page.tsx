"use client";

import { useEffect, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import Toast from "@/components/Toast";
import StudentTable from "@/components/StudentTable";
import {
  addStudent,
  fetchStudents,
  fetchClasses,
  markStudentPresent,
  markStudentLate,
  markStudentAbsent,
  removeStudent,
} from "@/lib/api";
import { Student, Class, AttendanceRow } from "@/lib/types";

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [classes, setClasses] = useState<Class[]>([]);
  const [selectedClassId, setSelectedClassId] = useState<number | null>(null);

  // Attendance state
  const [attendanceState, setAttendanceState] = useState<Record<number, AttendanceRow>>({});

  const [toast, setToast] = useState<{ type: "ok" | "err"; msg: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const [first_name, setFirst] = useState("");
  const [last_name, setLast] = useState("");
  const [email, setEmail] = useState("");

  async function reload() {
    try {
      const [studentList, classList] = await Promise.all([
        fetchStudents(),
        fetchClasses()
      ]);
      setStudents(studentList);
      setClasses(classList);
    } catch (e: any) {
      setToast({ type: "err", msg: e?.message ?? "Failed to load data" });
    }
  }

  useEffect(() => {
    reload();
  }, []);

  async function onRemoveStudent(id: number) {
    if (loading) return;
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

  async function onSubmitAttendance() {
    if (!selectedClassId && classes.length > 0) {
      if (!confirm("No class selected. Submit generic attendance?")) return;
    }

    setLoading(true);
    setToast(null);

    try {
      // Process all students who have a status set
      const promises = Object.values(attendanceState).map(row => {
        const payload = {
          student_id: row.student_id,
          class_id: selectedClassId,
          reason: row.reason,
          minutes_late: row.minutes_late
        };

        if (row.status === "PRESENT") {
          return markStudentPresent(payload);
        } else if (row.status === "LATE") {
          return markStudentLate({ ...payload, minutes_late: payload.minutes_late || 0 });
        } else {
          return markStudentAbsent(payload);
        }
      });

      await Promise.all(promises);
      setAttendanceState({}); // Clear state after success
      await reload();
      setToast({ type: "ok", msg: `Attendance recorded for ${promises.length} student(s).` });
    } catch (e: any) {
      setToast({ type: "err", msg: e?.message ?? "Failed to record attendance" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <SectionTitle title="Students & Attendance" subtitle="Manage students and record daily attendance." />

      {toast && (
        <div className="mb-4">
          <Toast type={toast.type} msg={toast.msg} />
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Left: Add Student */}
        <div className="lg:col-span-3 space-y-6">
          <div className="rounded-xl bg-white shadow-sm border border-black/5 p-5">
            <div className="text-sm font-bold border-b border-black/5 pb-3 mb-4">Add Student</div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">First Name</label>
                <input
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  value={first_name}
                  onChange={(e) => setFirst(e.target.value)}
                  placeholder="e.g. John"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">Last Name</label>
                <input
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  value={last_name}
                  onChange={(e) => setLast(e.target.value)}
                  placeholder="e.g. Doe"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">Email (Optional)</label>
                <input
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                />
              </div>

              <button
                onClick={onAdd}
                disabled={loading || !first_name.trim() || !last_name.trim()}
                className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
              >
                {loading ? "Adding..." : "Add Student"}
              </button>
            </div>
          </div>
        </div>

        {/* Right: Attendance Table */}
        <div className="lg:col-span-9 space-y-4">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 rounded-xl border border-black/5 shadow-sm">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="text-sm font-semibold text-gray-600 whitespace-nowrap">Class Context:</span>
              <select
                className="w-full sm:w-64 rounded-lg border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-gray-50/50"
                value={selectedClassId ?? ""}
                onChange={(e) => setSelectedClassId(e.target.value ? Number(e.target.value) : null)}
              >
                <option value="">-- General / No Class --</option>
                {classes.map(c => (
                  <option key={c.class_id} value={c.class_id}>
                    {c.class_name} ({c.semester})
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-3 w-full sm:w-auto">
              <button
                onClick={() => setAttendanceState({})}
                disabled={Object.keys(attendanceState).length === 0}
                className="flex-1 sm:flex-none px-4 py-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors disabled:opacity-50"
              >
                Reset
              </button>
              <button
                onClick={onSubmitAttendance}
                disabled={loading || Object.keys(attendanceState).length === 0}
                className="flex-1 sm:flex-none rounded-lg bg-green-600 px-6 py-2 text-sm font-bold text-white hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-all"
              >
                {loading ? "Saving..." : `Submit Attendance (${Object.keys(attendanceState).length})`}
              </button>
            </div>
          </div>

          <StudentTable
            students={students}
            value={attendanceState}
            onChange={setAttendanceState}
            onRemove={onRemoveStudent}
          />
        </div>
      </div>
    </div>
  );
}
