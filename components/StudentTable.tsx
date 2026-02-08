"use client";

import { Student, AttendanceRow, AttendanceStatus } from "@/lib/types";
import { fullName } from "@/lib/utils";

export default function StudentTable({
  students,
  value,
  onChange,
  onRemove,
}: {
  students: Student[];
  value: Record<number, AttendanceRow>;
  onChange: (next: Record<number, AttendanceRow>) => void;
  onRemove: (id: number) => void;
}) {
  function updateRow(id: number, updates: Partial<AttendanceRow>) {
    const prev = value[id] ?? { student_id: id, status: "PRESENT" as const };
    const next = { ...prev, ...updates };

    // Auto-clear logic
    if (next.status !== "LATE") next.minutes_late = null;

    onChange({ ...value, [id]: next });
  }

  return (
    <div className="rounded-xl border border-black/5 bg-white shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50/50 border-b border-black/5">
            <tr className="text-left text-gray-500">
              <th className="p-4 font-semibold w-[200px]">Student</th>
              <th className="p-4 font-semibold w-[300px]">Status</th>
              <th className="p-4 font-semibold w-[120px]">Minutes Late</th>
              <th className="p-4 font-semibold">Reason / Note</th>
              <th className="p-4 font-semibold w-[80px]">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/5">
            {students.map((s) => {
              const row = value[s.student_id] ?? { student_id: s.student_id, status: "PRESENT" as const };
              return (
                <tr key={s.student_id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-4">
                    <div className="font-semibold text-gray-900">{fullName(s)}</div>
                    <div className="text-xs text-gray-500">{s.email ?? "No email"}</div>
                  </td>

                  <td className="p-4">
                    <div className="flex flex-wrap gap-2">
                      {(["PRESENT", "LATE", "ABSENT"] as AttendanceStatus[]).map((st) => (
                        <button
                          key={st}
                          type="button"
                          onClick={() => updateRow(s.student_id, { status: st })}
                          className={`
                            px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all
                            ${row.status === st
                              ? st === "PRESENT" ? "bg-green-100 border-green-200 text-green-700"
                                : st === "LATE" ? "bg-yellow-100 border-yellow-200 text-yellow-700"
                                  : "bg-red-100 border-red-200 text-red-700"
                              : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
                            }
                          `}
                        >
                          {st}
                        </button>
                      ))}
                    </div>
                  </td>

                  <td className="p-4">
                    <input
                      type="number"
                      min={0}
                      disabled={row.status !== "LATE"}
                      value={row.minutes_late ?? ""}
                      onChange={(e) => updateRow(s.student_id, { minutes_late: e.target.valueAsNumber || 0 })}
                      className="w-20 rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed transition-all"
                      placeholder={row.status === "LATE" ? "Mins" : "-"}
                    />
                  </td>

                  <td className="p-4">
                    <input
                      type="text"
                      value={row.reason ?? ""}
                      onChange={(e) => updateRow(s.student_id, { reason: e.target.value })}
                      className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      placeholder="Optional reason..."
                    />
                  </td>

                  <td className="p-4">
                    <button
                      onClick={() => {
                        if (confirm(`Are you sure you want to remove ${fullName(s)}?`)) {
                          onRemove(s.student_id);
                        }
                      }}
                      className="text-red-500 hover:text-red-700 p-2 rounded hover:bg-red-50 transition-colors"
                      title="Remove Student"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
            {students.length === 0 && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-gray-500">
                  No students found. Add one to get started.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
