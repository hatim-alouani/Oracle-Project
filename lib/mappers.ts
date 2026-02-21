export type Student = {
  studentId: number;
  firstName: string;
  lastName: string;
  email: string;
  absenceCount?: number;
  lateCount?: number;
  dayCheck?: 0 | 1;
  createdDate?: string;
  updatedDate?: string;
};

export type ClassItem = {
  classId: number;
  className: string;
  semester: string;
};

export type AttendanceRecord = {
  attendanceId: number;
  studentId: number;
  classId: number;
  sessionDate: string;
  status: "PRESENT" | "LATE" | "ABSENT";
  minutesLate?: number;
  reason?: string;
  createdAt?: string;
};

export type AlertItem = {
  alertId: number;
  studentId: number;
  alertType: string;
  message: string;
  createdAt: string;
  status: "ACTIVE" | "RESOLVED" | string;
};

export type Enrollment = {
  enrollmentId: number;
  studentId: number;
  classId: number;
  enrollmentDate: string;
  status: "ACTIVE" | "DROPPED" | "COMPLETED";
};

export type AlertThreshold = {
  thresholdId: number;
  thresholdType: string;
  thresholdValue: number;
  period: "DAILY" | "WEEKLY" | "MONTHLY" | "SEMESTER";
  description?: string;
  isActive: 0 | 1;
  createdDate?: string;
  updatedDate?: string;
};

export type AnomalyPattern = {
  patternId: number;
  studentId: number;
  patternType: string;
  detectionDate: string;
  description?: string;
  severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  isResolved: 0 | 1;
  resolvedDate?: string;
};

export type MonthlyAttendanceRow = {
  studentId: number;
  firstName: string;
  lastName: string;
  fullName: string;
  month: string;
  monthName: string;
  totalDays: number;
  daysPresent: number;
  daysLate: number;
  daysAbsent: number;
  attendanceRate: number;
  avgMinutesLate: number;
};

export type SemesterKpiRow = {
  semester: string;
  totalStudents: number;
  totalClasses: number;
  avgAttendanceRate: number;
  atRiskStudents: number;
  studentsWithAlerts: number;
};

export type ClassAttendanceRow = {
  classId: number;
  className: string;
  semester: string;
  enrolledStudents: number;
  totalAttendanceRecords: number;
  totalPresent: number;
  totalLate: number;
  totalAbsent: number;
  classAttendanceRate: number;
};

export type StudentRiskRow = {
  studentId: number;
  studentName: string;
  email: string;
  absenceCount: number;
  lateCount: number;
  activeAlerts: number;
  detectedAnomalies: number;
  riskLevel: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL" | string;
  riskPriority: number;
};

export type DashboardStats = {
  totalStudents: number;
  activeAlerts: number;
  atRiskStudents: number;
  recentAnomalies?: AnomalyPattern[];
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Normalize a key by lowercasing and removing underscores
 * e.g., "STUDENT_ID" -> "studentid", "student_id" -> "studentid"
 */
export function normalizeKey(key: string): string {
  return key.toLowerCase().replace(/_/g, "");
}

/**
 * Pick the first non-null/undefined value from an object using multiple possible keys
 * Supports: camelCase, snake_case, UPPER_SNAKE_CASE, PascalCase
 */
export function pickFirst<T = any>(obj: any, keys: string[]): T | undefined {
  for (const key of keys) {
    if (obj[key] !== undefined && obj[key] !== null) {
      return obj[key];
    }
  }
  return undefined;
}

/**
 * Safely convert to number, returning default if invalid
 */
export function toNumberSafe(value: any, defaultValue: number = 0): number {
  if (typeof value === "number") return value;
  if (typeof value === "string") {
    const parsed = parseFloat(value);
    return isNaN(parsed) ? defaultValue : parsed;
  }
  return defaultValue;
}

/**
 * Safely convert to string
 */
export function toStringSafe(value: any, defaultValue: string = ""): string {
  if (value === null || value === undefined) return defaultValue;
  return String(value);
}

/**
 * Convert Oracle date to ISO string if needed
 */
export function toIsoDateSafe(value: any): string | undefined {
  if (!value) return undefined;
  if (typeof value === "string") {
    // Already ISO or valid date string
    try {
      return new Date(value).toISOString();
    } catch {
      return value;
    }
  }
  return undefined;
}


export function mapStudent(item: any): Student {
  return {
    studentId: toNumberSafe(
      pickFirst(item, ["studentId", "student_id", "STUDENT_ID", "StudentId"]),
      0
    ),
    firstName: toStringSafe(
      pickFirst(item, ["firstName", "first_name", "FIRST_NAME", "FirstName"]),
      ""
    ),
    lastName: toStringSafe(
      pickFirst(item, ["lastName", "last_name", "LAST_NAME", "LastName"]),
      ""
    ),
    email: toStringSafe(
      pickFirst(item, ["email", "EMAIL", "Email"]),
      ""
    ),
    absenceCount: toNumberSafe(
      pickFirst(item, ["absenceCount", "absence_count", "ABSENCE_COUNT", "AbsenceCount"])
    ),
    lateCount: toNumberSafe(
      pickFirst(item, ["lateCount", "late_count", "LATE_COUNT", "LateCount"])
    ),
    dayCheck: pickFirst(item, ["dayCheck", "day_check", "DAY_CHECK", "DayCheck"]) as 0 | 1 | undefined,
    createdDate: toIsoDateSafe(
      pickFirst(item, ["createdDate", "created_date", "CREATED_DATE", "CreatedDate"])
    ),
    updatedDate: toIsoDateSafe(
      pickFirst(item, ["updatedDate", "updated_date", "UPDATED_DATE", "UpdatedDate"])
    ),
  };
}

export function mapClass(item: any): ClassItem {
  return {
    classId: toNumberSafe(
      pickFirst(item, ["classId", "class_id", "CLASS_ID", "ClassId"]),
      0
    ),
    className: toStringSafe(
      pickFirst(item, ["className", "class_name", "CLASS_NAME", "ClassName"]),
      ""
    ),
    semester: toStringSafe(
      pickFirst(item, ["semester", "SEMESTER", "Semester"]),
      ""
    ),
  };
}

export function mapAttendance(item: any): AttendanceRecord {
  return {
    attendanceId: toNumberSafe(
      pickFirst(item, ["attendanceId", "attendance_id", "ATTENDANCE_ID", "AttendanceId"]),
      0
    ),
    studentId: toNumberSafe(
      pickFirst(item, ["studentId", "student_id", "STUDENT_ID", "StudentId"]),
      0
    ),
    classId: toNumberSafe(
      pickFirst(item, ["classId", "class_id", "CLASS_ID", "ClassId"]),
      0
    ),
    sessionDate: toStringSafe(
      pickFirst(item, ["sessionDate", "session_date", "SESSION_DATE", "SessionDate"]),
      ""
    ),
    status: (
      pickFirst(item, ["status", "STATUS", "Status"]) || "PRESENT"
    ) as "PRESENT" | "LATE" | "ABSENT",
    minutesLate: toNumberSafe(
      pickFirst(item, ["minutesLate", "minutes_late", "MINUTES_LATE", "MinutesLate"])
    ),
    reason: toStringSafe(
      pickFirst(item, ["reason", "REASON", "Reason"])
    ),
    createdAt: toIsoDateSafe(
      pickFirst(item, ["createdAt", "created_at", "CREATED_AT", "CreatedAt"])
    ),
  };
}

export function mapAlert(item: any): AlertItem {
  return {
    alertId: toNumberSafe(
      pickFirst(item, ["alertId", "alert_id", "ALERT_ID", "AlertId"]),
      0
    ),
    studentId: toNumberSafe(
      pickFirst(item, ["studentId", "student_id", "STUDENT_ID", "StudentId"]),
      0
    ),
    alertType: toStringSafe(
      pickFirst(item, ["alertType", "alert_type", "ALERT_TYPE", "AlertType"]),
      ""
    ),
    message: toStringSafe(
      pickFirst(item, ["message", "MESSAGE", "Message"]),
      ""
    ),
    createdAt: toStringSafe(
      pickFirst(item, ["createdAt", "created_at", "CREATED_AT", "CreatedAt"]),
      ""
    ),
    status: toStringSafe(
      pickFirst(item, ["status", "STATUS", "Status"]),
      "ACTIVE"
    ),
  };
}

export function mapEnrollment(item: any): Enrollment {
  return {
    enrollmentId: toNumberSafe(
      pickFirst(item, ["enrollmentId", "enrollment_id", "ENROLLMENT_ID", "EnrollmentId"]),
      0
    ),
    studentId: toNumberSafe(
      pickFirst(item, ["studentId", "student_id", "STUDENT_ID", "StudentId"]),
      0
    ),
    classId: toNumberSafe(
      pickFirst(item, ["classId", "class_id", "CLASS_ID", "ClassId"]),
      0
    ),
    enrollmentDate: toStringSafe(
      pickFirst(item, ["enrollmentDate", "enrollment_date", "ENROLLMENT_DATE", "EnrollmentDate"]),
      ""
    ),
    status: toStringSafe(
      pickFirst(item, ["status", "STATUS", "Status"]),
      "ACTIVE"
    ) as "ACTIVE" | "DROPPED" | "COMPLETED",
  };
}

export function mapAlertThreshold(item: any): AlertThreshold {
  return {
    thresholdId: toNumberSafe(
      pickFirst(item, ["thresholdId", "threshold_id", "THRESHOLD_ID", "ThresholdId"]),
      0
    ),
    thresholdType: toStringSafe(
      pickFirst(item, ["thresholdType", "threshold_type", "THRESHOLD_TYPE", "ThresholdType"]),
      ""
    ),
    thresholdValue: toNumberSafe(
      pickFirst(item, ["thresholdValue", "threshold_value", "THRESHOLD_VALUE", "ThresholdValue"]),
      0
    ),
    period: toStringSafe(
      pickFirst(item, ["period", "PERIOD", "Period"]),
      "MONTHLY"
    ) as "DAILY" | "WEEKLY" | "MONTHLY" | "SEMESTER",
    description: toStringSafe(
      pickFirst(item, ["description", "DESCRIPTION", "Description"])
    ),
    isActive: pickFirst(item, ["isActive", "is_active", "IS_ACTIVE", "IsActive"]) as 0 | 1,
    createdDate: toIsoDateSafe(
      pickFirst(item, ["createdDate", "created_date", "CREATED_DATE", "CreatedDate"])
    ),
    updatedDate: toIsoDateSafe(
      pickFirst(item, ["updatedDate", "updated_date", "UPDATED_DATE", "UpdatedDate"])
    ),
  };
}

export function mapAnomaly(item: any): AnomalyPattern {
  return {
    patternId: toNumberSafe(
      pickFirst(item, ["patternId", "pattern_id", "PATTERN_ID", "PatternId", "anomalyId", "anomaly_id", "ANOMALY_ID"]),
      0
    ),
    studentId: toNumberSafe(
      pickFirst(item, ["studentId", "student_id", "STUDENT_ID", "StudentId"]),
      0
    ),
    patternType: toStringSafe(
      pickFirst(item, ["patternType", "pattern_type", "PATTERN_TYPE", "PatternType"]),
      ""
    ),
    detectionDate: toStringSafe(
      pickFirst(item, ["detectionDate", "detection_date", "DETECTION_DATE", "DetectionDate"]),
      ""
    ),
    description: toStringSafe(
      pickFirst(item, ["description", "DESCRIPTION", "Description"])
    ),
    severity: toStringSafe(
      pickFirst(item, ["severity", "SEVERITY", "Severity"]),
      "LOW"
    ) as "LOW" | "MEDIUM" | "HIGH" | "CRITICAL",
    isResolved: pickFirst(item, ["isResolved", "is_resolved", "IS_RESOLVED", "IsResolved", "resolved"]) as 0 | 1,
    resolvedDate: toIsoDateSafe(
      pickFirst(item, ["resolvedDate", "resolved_date", "RESOLVED_DATE", "ResolvedDate"])
    ),
  };
}

// Analytical View Mappers

export function mapMonthlyAttendance(item: any): MonthlyAttendanceRow {
  return {
    studentId: toNumberSafe(
      pickFirst(item, ["studentId", "student_id", "STUDENT_ID", "StudentId"]),
      0
    ),
    firstName: toStringSafe(
      pickFirst(item, ["firstName", "first_name", "FIRST_NAME", "FirstName"]),
      ""
    ),
    lastName: toStringSafe(
      pickFirst(item, ["lastName", "last_name", "LAST_NAME", "LastName"]),
      ""
    ),
    fullName: toStringSafe(
      pickFirst(item, ["fullName", "full_name", "FULL_NAME", "FullName"]),
      ""
    ),
    month: toStringSafe(
      pickFirst(item, ["month", "MONTH", "Month"]),
      ""
    ),
    monthName: toStringSafe(
      pickFirst(item, ["monthName", "month_name", "MONTH_NAME", "MonthName"]),
      ""
    ),
    totalDays: toNumberSafe(
      pickFirst(item, ["totalDays", "total_days", "TOTAL_DAYS", "TotalDays"]),
      0
    ),
    daysPresent: toNumberSafe(
      pickFirst(item, ["daysPresent", "days_present", "DAYS_PRESENT", "DaysPresent"]),
      0
    ),
    daysLate: toNumberSafe(
      pickFirst(item, ["daysLate", "days_late", "DAYS_LATE", "DaysLate"]),
      0
    ),
    daysAbsent: toNumberSafe(
      pickFirst(item, ["daysAbsent", "days_absent", "DAYS_ABSENT", "DaysAbsent"]),
      0
    ),
    attendanceRate: toNumberSafe(
      pickFirst(item, ["attendanceRate", "attendance_rate", "ATTENDANCE_RATE", "AttendanceRate"]),
      0
    ),
    avgMinutesLate: toNumberSafe(
      pickFirst(item, ["avgMinutesLate", "avg_minutes_late", "AVG_MINUTES_LATE", "AvgMinutesLate"]),
      0
    ),
  };
}

export function mapSemesterKpi(item: any): SemesterKpiRow {
  return {
    semester: toStringSafe(
      pickFirst(item, ["semester", "SEMESTER", "Semester"]),
      ""
    ),
    totalStudents: toNumberSafe(
      pickFirst(item, ["totalStudents", "total_students", "TOTAL_STUDENTS", "TotalStudents"]),
      0
    ),
    totalClasses: toNumberSafe(
      pickFirst(item, ["totalClasses", "total_classes", "TOTAL_CLASSES", "TotalClasses"]),
      0
    ),
    avgAttendanceRate: toNumberSafe(
      pickFirst(item, ["avgAttendanceRate", "avg_attendance_rate", "AVG_ATTENDANCE_RATE", "AvgAttendanceRate"]),
      0
    ),
    atRiskStudents: toNumberSafe(
      pickFirst(item, ["atRiskStudents", "at_risk_students", "AT_RISK_STUDENTS", "AtRiskStudents"]),
      0
    ),
    studentsWithAlerts: toNumberSafe(
      pickFirst(item, ["studentsWithAlerts", "students_with_alerts", "STUDENTS_WITH_ALERTS", "StudentsWithAlerts"]),
      0
    ),
  };
}

export function mapClassAttendance(item: any): ClassAttendanceRow {
  return {
    classId: toNumberSafe(
      pickFirst(item, ["classId", "class_id", "CLASS_ID", "ClassId"]),
      0
    ),
    className: toStringSafe(
      pickFirst(item, ["className", "class_name", "CLASS_NAME", "ClassName"]),
      ""
    ),
    semester: toStringSafe(
      pickFirst(item, ["semester", "SEMESTER", "Semester"]),
      ""
    ),
    enrolledStudents: toNumberSafe(
      pickFirst(item, ["enrolledStudents", "enrolled_students", "ENROLLED_STUDENTS", "EnrolledStudents"]),
      0
    ),
    totalAttendanceRecords: toNumberSafe(
      pickFirst(item, ["totalAttendanceRecords", "total_attendance_records", "TOTAL_ATTENDANCE_RECORDS", "TotalAttendanceRecords"]),
      0
    ),
    totalPresent: toNumberSafe(
      pickFirst(item, ["totalPresent", "total_present", "TOTAL_PRESENT", "TotalPresent"]),
      0
    ),
    totalLate: toNumberSafe(
      pickFirst(item, ["totalLate", "total_late", "TOTAL_LATE", "TotalLate"]),
      0
    ),
    totalAbsent: toNumberSafe(
      pickFirst(item, ["totalAbsent", "total_absent", "TOTAL_ABSENT", "TotalAbsent"]),
      0
    ),
    classAttendanceRate: toNumberSafe(
      pickFirst(item, ["classAttendanceRate", "class_attendance_rate", "CLASS_ATTENDANCE_RATE", "ClassAttendanceRate"]),
      0
    ),
  };
}

export function mapStudentRisk(item: any): StudentRiskRow {
  return {
    studentId: toNumberSafe(
      pickFirst(item, ["studentId", "student_id", "STUDENT_ID", "StudentId"]),
      0
    ),
    studentName: toStringSafe(
      pickFirst(item, ["studentName", "student_name", "STUDENT_NAME", "StudentName"]),
      ""
    ),
    email: toStringSafe(
      pickFirst(item, ["email", "EMAIL", "Email"]),
      ""
    ),
    absenceCount: toNumberSafe(
      pickFirst(item, ["absenceCount", "absence_count", "ABSENCE_COUNT", "AbsenceCount"]),
      0
    ),
    lateCount: toNumberSafe(
      pickFirst(item, ["lateCount", "late_count", "LATE_COUNT", "LateCount"]),
      0
    ),
    activeAlerts: toNumberSafe(
      pickFirst(item, ["activeAlerts", "active_alerts", "ACTIVE_ALERTS", "ActiveAlerts"]),
      0
    ),
    detectedAnomalies: toNumberSafe(
      pickFirst(item, ["detectedAnomalies", "detected_anomalies", "DETECTED_ANOMALIES", "DetectedAnomalies"]),
      0
    ),
    riskLevel: toStringSafe(
      pickFirst(item, ["riskLevel", "risk_level", "RISK_LEVEL", "RiskLevel"]),
      "LOW"
    ),
    riskPriority: toNumberSafe(
      pickFirst(item, ["riskPriority", "risk_priority", "RISK_PRIORITY", "RiskPriority"]),
      99
    ),
  };
}

// ============================================================================
// ARRAY MAPPING UTILITY
// ============================================================================

/**
 * Maps an array response that may come in various formats:
 * - Direct array: [...]
 * - Wrapped: { data: [...] }
 * - Wrapped: { result: [...] }
 * - Wrapped: { students: [...] }
 * - Single object: {...} -> [{...}]
 */
export function mapArray<T>(
  data: any,
  mapper: (item: any) => T,
  wrapperKeys: string[] = ["data", "result", "students", "classes", "alerts", "anomalies", "rows"]
): T[] {
  // Direct array
  if (Array.isArray(data)) {
    return data.map(mapper);
  }

  // Wrapped in object
  if (data && typeof data === "object") {
    // Try wrapper keys
    for (const key of wrapperKeys) {
      if (Array.isArray(data[key])) {
        return data[key].map(mapper);
      }
    }

    // Single object -> wrap in array
    // Check if it looks like a single record (has common fields)
    const keys = Object.keys(data);
    if (keys.length > 0 && !wrapperKeys.some(k => keys.includes(k))) {
      return [mapper(data)];
    }
  }

  return [];
}
