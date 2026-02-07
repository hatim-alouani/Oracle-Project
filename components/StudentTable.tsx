"use client";

import { Student, AttendanceRow, AttendanceStatus } from "@/lib/types";
import { fullName } from "@/lib/utils";

export default function StudentTable({
  students,
  value,
  onChange,
}: {
  students: Student[];
  value: Record<number, AttendanceRow>;
  onChange: (next: Record<number, AttendanceRow>) => void;
}) {
  function setStatus(id: number, status: AttendanceStatus) {
    const prev = value[id] ?? { student_id: id, status: "PRESENT" as const };
    const next: AttendanceRow = { ...prev, status };
    if (status !== "LATE") next.minutes_late = null;
    onChange({ ...value, [id]: next });
  }

  function setMinutes(id: number, minutes: number) {
    const prev = value[id] ?? { student_id: id, status: "LATE" as const };
    onChange({ ...value, [id]: { ...prev, status: "LATE", minutes_late: minutes } });
  }

  function setReason(id: number, reason: string) {
    const prev = value[id] ?? { student_id: id, status: "PRESENT" as const };
    onChange({ ...value, [id]: { ...prev, reason } });
  }

  return (
    <div className="rounded bg-white shadow-soft overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-black/5">
            <tr className="text-left">
              <th className="p-3 font-extrabold">Student</th>
              <th className="p-3 font-extrabold">Status</th>
              <th className="p-3 font-extrabold">Minutes late</th>
              <th className="p-3 font-extrabold">Reason</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => {
              const row = value[s.student_id] ?? { student_id: s.student_id, status: "PRESENT" as const };
              return (
                <tr key={s.student_id} className="border-t border-black/5">
                  <td className="p-3">
                    <div className="font-semibold">{fullName(s)}</div>
                    <div className="text-xs text-black/50">{s.email ?? "-"}</div>
                  </td>

                  <td className="p-3">
                    <div className="flex flex-wrap gap-2">
                      {(["PRESENT", "ABSENT", "LATE"] as AttendanceStatus[]).map((st) => (
                        <button
                          key={st}
                          type="button"
                          onClick={() => setStatus(s.student_id, st)}
                          className={[
                            "rounded px-3 py-1.5 border text-xs font-extrabold",
                            row.status === st
                              ? "border-[#2e89c6] bg-[#2e89c6] text-white"
                              : "border-black/10 bg-white text-black/70 hover:bg-black/5",
                          ].join(" ")}
                        >
                          {st}
                        </button>
                      ))}
                    </div>
                  </td>

                  <td className="p-3">
                    <input
                      type="number"
                      min={0}
                      disabled={row.status !== "LATE"}
                      value={row.status === "LATE" ? (row.minutes_late ?? 0) : ""}
                      onChange={(e) => setMinutes(s.student_id, Number(e.target.value || 0))}
                      className="w-28 rounded border border-black/10 px-2 py-2 disabled:bg-black/5"
                      placeholder="0"
                    />
                  </td>

                  <td className="p-3">
                    <input
                      type="text"
                      value={row.reason ?? ""}
                      onChange={(e) => setReason(s.student_id, e.target.value)}
                      className="w-full rounded border border-black/10 px-3 py-2"
                      placeholder="Optional"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
