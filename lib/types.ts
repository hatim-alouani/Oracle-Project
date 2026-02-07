export type Student = {
  student_id: number;
  first_name: string;
  last_name: string;
  email?: string | null;
  absence_count?: number;
  late_count?: number;
  day_check?: number;
};

export type AttendanceStatus = "PRESENT" | "ABSENT" | "LATE";

export type AttendanceRow = {
  student_id: number;
  status: AttendanceStatus;
  minutes_late?: number | null;
  reason?: string | null;
};

export type AttendancePayload = {
  date: string;          // YYYY-MM-DD
  class_id?: number | null; // optional if you don't manage classes yet
  rows: AttendanceRow[];
};
