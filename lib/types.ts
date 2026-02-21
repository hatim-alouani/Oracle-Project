export type {
  Student,
  ClassItem,
  AttendanceRecord,
  AlertItem,
  Enrollment,
  AlertThreshold,
  AnomalyPattern,
  MonthlyAttendanceRow,
  SemesterKpiRow,
  ClassAttendanceRow,
  StudentRiskRow,
  DashboardStats,
} from "./mappers";

export type AttendanceStatus = "PRESENT" | "ABSENT" | "LATE";

export type AttendanceRow = {
  studentId: number;
  status: AttendanceStatus;
  minutesLate?: number | null;
  reason?: string | null;
};

export type AttendancePayload = {
  date: string; // YYYY-MM-DD
  classId?: number | null;
  rows: AttendanceRow[];
};
