export type Student = {
  student_id: number;
  first_name: string;
  last_name: string;
  email?: string | null;
  absence_count?: number;
  late_count?: number;
  day_check?: number;
};

export type Class = {
  class_id: number;
  class_name: string;
  semester: string;
};

export type AttendanceStatus = "PRESENT" | "ABSENT" | "LATE";

export type AttendanceRow = {
  student_id: number;
  status: AttendanceStatus;
  minutes_late?: number | null;
  reason?: string | null;
  class_id?: number | null;
};

export type AttendancePayload = {
  date: string;          // YYYY-MM-DD
  class_id?: number | null;
  rows: AttendanceRow[];
};

export type Alert = {
  alert_id: number;
  student_id: number;
  student_name?: string;
  alert_type: string;
  message: string;
  threshold?: number;
  created_at: string;
};

export type Anomaly = {
  pattern_id: number;
  student_id: number;
  student_name?: string;
  pattern_type: string;
  description: string;
  severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  detection_date: string;
  is_resolved: number;
};

export type MonthlyReportRow = {
  student_id: number;
  full_name: string;
  month: string;
  total_days: number;
  days_present: number;
  days_late: number;
  days_absent: number;
  attendance_rate: number;
  avg_minutes_late: number;
};
