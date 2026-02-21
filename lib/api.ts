import {
  Student,
  ClassItem,
  AlertItem,
  AnomalyPattern,
  AlertThreshold,
  ClassAttendanceRow,
  AttendanceRecord,
  MonthlyAttendanceRow,
  SemesterKpiRow,
  StudentRiskRow,
  DashboardStats,
  mapStudent,
  mapClass,
  mapAlert,
  mapAnomaly,
  mapAlertThreshold,
  mapClassAttendance,
  mapAttendance,
  mapMonthlyAttendance,
  mapSemesterKpi,
  mapStudentRisk,
  mapArray,
  pickFirst,
  toNumberSafe,
} from "./mappers";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

const ENDPOINTS = {
  getStudents: `${API_BASE_URL}/api/students`,
  addStudent: `${API_BASE_URL}/api/students`,
  removeStudent: `${API_BASE_URL}/api/students/remove`,
  studentAbsence: `${API_BASE_URL}/api/attendance/absent`,
  studentLate: `${API_BASE_URL}/api/attendance/late`,
  studentPresent: `${API_BASE_URL}/api/attendance/present`,
  
  getClasses: `${API_BASE_URL}/api/classes`,
  addClass: `${API_BASE_URL}/api/classes`,
  enrollStudent: `${API_BASE_URL}/api/classes/enroll`,
  deleteClass: (id: number) => `${API_BASE_URL}/api/classes/${id}`,
  
  getAlerts: `${API_BASE_URL}/api/alerts`,
  getActiveAlerts: `${API_BASE_URL}/api/alerts/active`,
  
  getAnomalies: `${API_BASE_URL}/api/anomalies`,
  
  getThresholds: `${API_BASE_URL}/api/thresholds`,
  
  getStatistics: `${API_BASE_URL}/api/statistics`,
  getRiskAssessment: `${API_BASE_URL}/api/reports/risk-assessment`,
  getSemesterKpis: `${API_BASE_URL}/api/reports/semester-kpis`,
  getMonthlyReport: `${API_BASE_URL}/api/reports/monthly`,
  getClassAttendance: `${API_BASE_URL}/api/reports/class-attendance`,
  getAttendanceHistory: `${API_BASE_URL}/api/attendance/history`,
};

async function safeJson(res: Response) {
  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch {
    return { raw: text };
  }
}

// ========================================
// Students
// ========================================

export async function fetchStudents(): Promise<Student[]> {
  const res = await fetch(ENDPOINTS.getStudents, { cache: "no-store" });
  if (!res.ok) throw new Error(`GET students failed: ${res.status}`);
  const data = await safeJson(res);
  return mapArray(data, mapStudent, ["students", "data", "result"]);
}

export async function addStudent(payload: { first_name: string; last_name: string; email?: string }) {
  const res = await fetch(ENDPOINTS.addStudent, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await safeJson(res);
  if (!res.ok) throw new Error(`POST add student failed: ${res.status} ${JSON.stringify(data)}`);
  return data;
}

export async function removeStudent(payload: { student_id: number }) {
  const res = await fetch(ENDPOINTS.removeStudent, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await safeJson(res);
  if (!res.ok) throw new Error(`POST remove student failed: ${res.status} ${JSON.stringify(data)}`);
  return data;
}

export async function markStudentPresent(payload: {
  student_id: number;
  class_id?: number;
  session_date?: string;
}) {
  const res = await fetch(ENDPOINTS.studentPresent, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      student_id: payload.student_id,
      class_id: payload.class_id,
      session_date: payload.session_date || new Date().toISOString().split("T")[0],
      status: "PRESENT",
    }),
  });
  const data = await safeJson(res);
  if (!res.ok) throw new Error(`POST mark present failed: ${res.status} ${JSON.stringify(data)}`);
  return data;
}

export async function markStudentLate(payload: {
  student_id: number;
  class_id?: number;
  session_date?: string;
  minutes_late?: number;
}) {
  const res = await fetch(ENDPOINTS.studentLate, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      student_id: payload.student_id,
      class_id: payload.class_id,
      session_date: payload.session_date || new Date().toISOString().split("T")[0],
      status: "LATE",
      minutes_late: payload.minutes_late || 0,
    }),
  });
  const data = await safeJson(res);
  if (!res.ok) throw new Error(`POST mark late failed: ${res.status} ${JSON.stringify(data)}`);
  return data;
}

export async function markStudentAbsent(payload: {
  student_id: number;
  class_id?: number;
  session_date?: string;
  reason?: string;
}) {
  const res = await fetch(ENDPOINTS.studentAbsence, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      student_id: payload.student_id,
      class_id: payload.class_id,
      session_date: payload.session_date || new Date().toISOString().split("T")[0],
      status: "ABSENT",
      reason: payload.reason || "",
    }),
  });
  const data = await safeJson(res);
  if (!res.ok) throw new Error(`POST mark absent failed: ${res.status} ${JSON.stringify(data)}`);
  return data;
}

// ========================================
// Classes
// ========================================

export async function fetchClasses(): Promise<ClassItem[]> {
  try {
    const res = await fetch(ENDPOINTS.getClasses, { cache: "no-store" });
    if (!res.ok) throw new Error(`GET classes failed: ${res.status}`);
    const data = await safeJson(res);
    return mapArray(data, mapClass, ["classes", "data", "result"]);
  } catch (e: any) {
    console.error("fetchClasses error:", e);
    return [];
  }
}

export async function addClass(payload: { class_name: string; semester: string }) {
  const res = await fetch(ENDPOINTS.addClass, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await safeJson(res);
  if (!res.ok) throw new Error(`POST add class failed: ${res.status} ${JSON.stringify(data)}`);
  return data;
}

export async function enrollStudentInClass(payload: { student_id: number; class_id: number }) {
  const res = await fetch(ENDPOINTS.enrollStudent, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await safeJson(res);
  if (!res.ok) throw new Error(`POST enroll student failed: ${res.status} ${JSON.stringify(data)}`);
  return data;
}

export async function deleteClass(classId: number) {
  const res = await fetch(ENDPOINTS.deleteClass(classId), {
    method: "DELETE",
  });
  const data = await safeJson(res);
  if (!res.ok) throw new Error(`DELETE class failed: ${res.status} ${JSON.stringify(data)}`);
  return data;
}

// ========================================
// Alerts
// ========================================

export async function fetchAlerts(): Promise<AlertItem[]> {
  try {
    const res = await fetch(ENDPOINTS.getAlerts, { cache: "no-store" });
    if (!res.ok) throw new Error(`GET alerts failed: ${res.status}`);
    const data = await safeJson(res);
    return mapArray(data, mapAlert, ["alerts", "data", "result"]);
  } catch (e: any) {
    console.error("fetchAlerts error:", e);
    return [];
  }
}

export async function fetchActiveAlerts(): Promise<AlertItem[]> {
  try {
    const res = await fetch(ENDPOINTS.getActiveAlerts, { cache: "no-store" });
    if (!res.ok) throw new Error(`GET active alerts failed: ${res.status}`);
    const data = await safeJson(res);
    return mapArray(data, mapAlert, ["alerts", "data", "result"]);
  } catch (e: any) {
    console.error("fetchActiveAlerts error:", e);
    return [];
  }
}

// ========================================
// Anomalies
// ========================================

export async function fetchAnomalies(): Promise<AnomalyPattern[]> {
  try {
    const res = await fetch(ENDPOINTS.getAnomalies, { cache: "no-store" });
    if (!res.ok) throw new Error(`GET anomalies failed: ${res.status}`);
    const data = await safeJson(res);
    return mapArray(data, mapAnomaly, ["anomalies", "data", "result"]);
  } catch (e: any) {
    console.error("fetchAnomalies error:", e);
    return [];
  }
}

// ========================================
// Reports & Analytics
// ========================================

export async function fetchDashboardStats(): Promise<DashboardStats> {
  try {
    const res = await fetch(ENDPOINTS.getStatistics, { cache: "no-store" });
    if (!res.ok) throw new Error(`GET statistics failed: ${res.status}`);
    const data = await safeJson(res);
    
    const recentAnomalies = mapArray(
      pickFirst(data, ["recentAnomalies", "recent_anomalies", "RECENT_ANOMALIES", "anomalies"]) || [],
      mapAnomaly
    );

    return {
      totalStudents: toNumberSafe(
        pickFirst(data, ["totalStudents", "total_students", "TOTAL_STUDENTS", "TotalStudents"]),
        0
      ),
      activeAlerts: toNumberSafe(
        pickFirst(data, ["activeAlerts", "active_alerts", "ACTIVE_ALERTS", "ActiveAlerts"]),
        0
      ),
      atRiskStudents: toNumberSafe(
        pickFirst(data, ["atRiskStudents", "at_risk_students", "AT_RISK_STUDENTS", "AtRiskStudents"]),
        0
      ),
      recentAnomalies,
    };
  } catch (e: any) {
    console.error("fetchDashboardStats error:", e);
    return {
      totalStudents: 0,
      activeAlerts: 0,
      atRiskStudents: 0,
      recentAnomalies: [],
    };
  }
}

export async function fetchRiskAssessment(): Promise<StudentRiskRow[]> {
  try {
    const res = await fetch(ENDPOINTS.getRiskAssessment, { cache: "no-store" });
    if (!res.ok) throw new Error(`GET risk assessment failed: ${res.status}`);
    const data = await safeJson(res);
    return mapArray(data, mapStudentRisk, ["data", "result", "rows"]);
  } catch (e: any) {
    console.error("fetchRiskAssessment error:", e);
    return [];
  }
}

export async function fetchSemesterKpis(): Promise<SemesterKpiRow[]> {
  try {
    const res = await fetch(ENDPOINTS.getSemesterKpis, { cache: "no-store" });
    if (!res.ok) throw new Error(`GET semester KPIs failed: ${res.status}`);
    const data = await safeJson(res);
    return mapArray(data, mapSemesterKpi, ["data", "result", "rows"]);
  } catch (e: any) {
    console.error("fetchSemesterKpis error:", e);
    return [];
  }
}

export async function fetchMonthlyReport(filters?: {
  month?: string;
  student_id?: number;
  class_id?: number;
}): Promise<MonthlyAttendanceRow[]> {
  try {
    let url = ENDPOINTS.getMonthlyReport;
    if (filters) {
      const params = new URLSearchParams();
      if (filters.month) params.append("month", filters.month);
      if (filters.student_id) params.append("student_id", filters.student_id.toString());
      if (filters.class_id) params.append("class_id", filters.class_id.toString());
      if (params.toString()) url += `?${params.toString()}`;
    }
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`GET monthly report failed: ${res.status}`);
    const data = await safeJson(res);
    return mapArray(data, mapMonthlyAttendance, ["data", "result", "rows"]);
  } catch (e: any) {
    console.error("fetchMonthlyReport error:", e);
    return [];
  }
}

// ========================================
// Alert Actions
// ========================================

export async function resolveAlert(alertId: number) {
  const res = await fetch(`${API_BASE_URL}/api/alerts/${alertId}/resolve`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  });
  const data = await safeJson(res);
  if (!res.ok) throw new Error(`PUT resolve alert failed: ${res.status} ${JSON.stringify(data)}`);
  return data;
}

export async function dismissAlert(alertId: number) {
  const res = await fetch(`${API_BASE_URL}/api/alerts/${alertId}/dismiss`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  });
  const data = await safeJson(res);
  if (!res.ok) throw new Error(`PUT dismiss alert failed: ${res.status} ${JSON.stringify(data)}`);
  return data;
}

// ========================================
// Anomaly Actions
// ========================================

export async function detectAnomalies() {
  const res = await fetch(`${API_BASE_URL}/api/anomalies/detect`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  const data = await safeJson(res);
  if (!res.ok) throw new Error(`POST detect anomalies failed: ${res.status} ${JSON.stringify(data)}`);
  return data;
}

export async function resolveAnomaly(patternId: number) {
  const res = await fetch(`${API_BASE_URL}/api/anomalies/${patternId}/resolve`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  });
  const data = await safeJson(res);
  if (!res.ok) throw new Error(`PUT resolve anomaly failed: ${res.status} ${JSON.stringify(data)}`);
  return data;
}

// ========================================
// Thresholds
// ========================================

export async function fetchThresholds(): Promise<AlertThreshold[]> {
  try {
    const res = await fetch(ENDPOINTS.getThresholds, { cache: "no-store" });
    if (!res.ok) throw new Error(`GET thresholds failed: ${res.status}`);
    const data = await safeJson(res);
    return mapArray(data, mapAlertThreshold, ["thresholds", "data", "result"]);
  } catch (e: any) {
    console.error("fetchThresholds error:", e);
    return [];
  }
}

export async function createThreshold(payload: {
  threshold_type: string;
  threshold_value: number;
  period?: string;
  description?: string;
}) {
  const res = await fetch(ENDPOINTS.getThresholds, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await safeJson(res);
  if (!res.ok) throw new Error(`POST create threshold failed: ${res.status} ${JSON.stringify(data)}`);
  return data;
}

export async function updateThreshold(
  thresholdId: number,
  payload: { threshold_value?: number; period?: string; description?: string; is_active?: number }
) {
  const res = await fetch(`${API_BASE_URL}/api/thresholds/${thresholdId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await safeJson(res);
  if (!res.ok) throw new Error(`PUT update threshold failed: ${res.status} ${JSON.stringify(data)}`);
  return data;
}

export async function deleteThreshold(thresholdId: number) {
  const res = await fetch(`${API_BASE_URL}/api/thresholds/${thresholdId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  const data = await safeJson(res);
  if (!res.ok) throw new Error(`DELETE threshold failed: ${res.status} ${JSON.stringify(data)}`);
  return data;
}

// ========================================
// Attendance History
// ========================================

export async function fetchAttendanceHistory(filters?: {
  student_id?: number;
  class_id?: number;
  limit?: number;
}): Promise<AttendanceRecord[]> {
  try {
    let url = ENDPOINTS.getAttendanceHistory;
    if (filters) {
      const params = new URLSearchParams();
      if (filters.student_id) params.append("student_id", filters.student_id.toString());
      if (filters.class_id) params.append("class_id", filters.class_id.toString());
      if (filters.limit) params.append("limit", filters.limit.toString());
      if (params.toString()) url += `?${params.toString()}`;
    }
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`GET attendance history failed: ${res.status}`);
    const data = await safeJson(res);
    return mapArray(data, mapAttendance, ["data", "result", "rows"]);
  } catch (e: any) {
    console.error("fetchAttendanceHistory error:", e);
    return [];
  }
}

// ========================================
// Class Attendance Report
// ========================================

export async function fetchClassAttendance(): Promise<ClassAttendanceRow[]> {
  try {
    const res = await fetch(ENDPOINTS.getClassAttendance, { cache: "no-store" });
    if (!res.ok) throw new Error(`GET class attendance failed: ${res.status}`);
    const data = await safeJson(res);
    return mapArray(data, mapClassAttendance, ["data", "result", "rows"]);
  } catch (e: any) {
    console.error("fetchClassAttendance error:", e);
    return [];
  }
}
