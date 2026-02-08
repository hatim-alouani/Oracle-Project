import { AttendancePayload, Student, Class, Alert, Anomaly, MonthlyReportRow } from "./types";

const ENDPOINTS = {
  getStudents: "https://alouanihatim.app.n8n.cloud/webhook/194f2a4c-aa88-45c9-9841-4b73b0278374",
  addStudent: "https://alouanihatim.app.n8n.cloud/webhook/31729320-0f37-42b1-bcbe-f2df9fde263e",
  removeStudent: "https://alouanihatim.app.n8n.cloud/webhook/ba4b4f11-0645-40f5-9202-eb6e83fdcad1",
  studentAbsence: "https://alouanihatim.app.n8n.cloud/webhook/a500d3a1-5755-4ac8-9932-d736a9cf1ddb",
  studentLate: "https://alouanihatim.app.n8n.cloud/webhook/afcee359-0256-4e46-a4fb-32628f0d08d9",
  studentPresent: "https://alouanihatim.app.n8n.cloud/webhook/cc0f7433-0ec9-4850-8804-37b99af5e7d1",
  // New endpoints
  getClasses: "https://alouanihatim.app.n8n.cloud/webhook/classes",
  getMonthlyReport: "https://alouanihatim.app.n8n.cloud/webhook/monthly-report",
  getSemesterKPIs: "https://alouanihatim.app.n8n.cloud/webhook/semester-kpis",
  getAlerts: "https://alouanihatim.app.n8n.cloud/webhook/alerts",
  getAnomalies: "https://alouanihatim.app.n8n.cloud/webhook/anomalies",
  getRiskAssessment: "https://alouanihatim.app.n8n.cloud/webhook/risk-assessment",
  addClass: "https://alouanihatim.app.n8n.cloud/webhook/add-class"
};

function normalizeStudent(item: any): Student {
  return {
    student_id: item.STUDENT_ID ?? item.student_id ?? 0,
    first_name: item.FIRST_NAME ?? item.first_name ?? "",
    last_name: item.LAST_NAME ?? item.last_name ?? "",
    email: item.EMAIL ?? item.email ?? null,
    absence_count: item.ABSENCE_COUNT ?? item.absence_count ?? 0,
    late_count: item.LATE_COUNT ?? item.late_count ?? 0,
    day_check: item.DAY_CHECK ?? item.day_check ?? 0,
  };
}

function normalizeStudents(data: any): Student[] {
  // Handle single object
  if (data && !Array.isArray(data) && (data.STUDENT_ID || data.student_id)) {
    return [normalizeStudent(data)];
  }

  // Handle arrays
  if (Array.isArray(data)) return data.map(normalizeStudent);
  if (Array.isArray(data?.students)) return data.students.map(normalizeStudent);
  if (Array.isArray(data?.data)) return data.data.map(normalizeStudent);
  return [];
}

function normalizeClass(item: any): Class {
  return {
    class_id: item.CLASS_ID ?? item.class_id ?? 0,
    class_name: item.CLASS_NAME ?? item.class_name ?? "Unknown",
    semester: item.SEMESTER ?? item.semester ?? "",
  };
}

function normalizeReportRow(item: any): MonthlyReportRow {
  return {
    student_id: item.STUDENT_ID ?? item.student_id ?? 0,
    full_name: item.FULL_NAME ?? item.full_name ?? "Unknown",
    month: item.MONTH ?? item.month ?? "",
    total_days: item.TOTAL_DAYS ?? item.total_days ?? 0,
    days_present: item.DAYS_PRESENT ?? item.days_present ?? 0,
    days_late: item.DAYS_LATE ?? item.days_late ?? 0,
    days_absent: item.DAYS_ABSENT ?? item.days_absent ?? 0,
    attendance_rate: item.ATTENDANCE_RATE ?? item.attendance_rate ?? 0,
    avg_minutes_late: item.AVG_MINUTES_LATE ?? item.avg_minutes_late ?? 0,
  };
}

function normalizeAlert(item: any): Alert {
  return {
    alert_id: item.ALERT_ID ?? item.alert_id ?? 0,
    student_id: item.STUDENT_ID ?? item.student_id ?? 0,
    student_name: item.FIRST_NAME ? `${item.FIRST_NAME} ${item.LAST_NAME}` : (item.student_name ?? "Unknown"),
    alert_type: item.ALERT_TYPE ?? item.alert_type ?? "info",
    message: item.MESSAGE ?? item.message ?? "",
    threshold: item.THRESHOLD ?? item.threshold ?? 0,
    created_at: item.CREATED_AT ?? item.created_at ?? new Date().toISOString(),
  };
}

function normalizeAnomaly(item: any): Anomaly {
  return {
    pattern_id: item.PATTERN_ID ?? item.pattern_id ?? 0,
    student_id: item.STUDENT_ID ?? item.student_id ?? 0,
    student_name: item.STUDENT_NAME ?? item.student_name ?? "Unknown",
    pattern_type: item.PATTERN_TYPE ?? item.pattern_type ?? "Unknown",
    description: item.DESCRIPTION ?? item.description ?? "",
    severity: item.SEVERITY ?? item.severity ?? "MEDIUM",
    detection_date: item.DETECTION_DATE ?? item.detection_date ?? new Date().toISOString(),
    is_resolved: item.IS_RESOLVED ?? item.is_resolved ?? 0,
  };
}

async function safeJson(res: Response) {
  const text = await res.text();
  try { return JSON.parse(text); } catch { return { raw: text }; }
}

export async function fetchStudents(): Promise<Student[]> {
  const res = await fetch(ENDPOINTS.getStudents, { cache: "no-store" });
  if (!res.ok) throw new Error(`GET students failed: ${res.status}`);
  const data = await safeJson(res);
  return normalizeStudents(data);
}

export async function postAttendance(payload: AttendancePayload) {
  const res = await fetch(ENDPOINTS.studentAbsence, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await safeJson(res);
  if (!res.ok) throw new Error(`POST attendance failed: ${res.status} ${JSON.stringify(data)}`);
  return data;
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

export async function markStudentPresent(payload: { student_id: number; class_id?: number | null }) {
  const res = await fetch(ENDPOINTS.studentPresent, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await safeJson(res);
  if (!res.ok) throw new Error(`POST mark present failed: ${res.status} ${JSON.stringify(data)}`);
  return data;
}

export async function markStudentLate(payload: { student_id: number; minutes_late: number; reason?: string | null; class_id?: number | null }) {
  const res = await fetch(ENDPOINTS.studentLate, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await safeJson(res);
  if (!res.ok) throw new Error(`POST mark late failed: ${res.status} ${JSON.stringify(data)}`);
  return data;
}

export async function markStudentAbsent(payload: { student_id: number; reason?: string | null; class_id?: number | null }) {
  const res = await fetch(ENDPOINTS.studentAbsence, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await safeJson(res);
  if (!res.ok) throw new Error(`POST mark absent failed: ${res.status} ${JSON.stringify(data)}`);
  return data;
}

export async function fetchClasses(): Promise<Class[]> {
  try {
    const res = await fetch(ENDPOINTS.getClasses, { cache: "no-store" });
    if (!res.ok) {
      console.warn(`GET classes failed: ${res.status}`);
      return [];
    }
    const data = await safeJson(res);
    const list = Array.isArray(data) ? data : [];
    return list.map(normalizeClass);
  } catch (e) {
    console.warn("Classes endpoint error", e);
    return [];
  }
}

export async function fetchMonthlyReport(month?: string): Promise<MonthlyReportRow[]> {
  try {
    const url = month ? `${ENDPOINTS.getMonthlyReport}?month=${month}` : ENDPOINTS.getMonthlyReport;
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return [];
    const data = await safeJson(res);
    const list = Array.isArray(data) ? data : [];
    return list.map(normalizeReportRow);
  } catch (e) {
    console.warn("Monthly report error", e);
    return [];
  }
}

export async function fetchAlerts(): Promise<Alert[]> {
  try {
    const res = await fetch(ENDPOINTS.getAlerts, { cache: "no-store" });
    if (!res.ok) return [];
    const data = await safeJson(res);
    const list = Array.isArray(data) ? data : [];
    return list.map(normalizeAlert);
  } catch (e) {
    console.warn("Alerts endpoint error", e);
    return [];
  }
}

export async function fetchAnomalies(): Promise<Anomaly[]> {
  try {
    const res = await fetch(ENDPOINTS.getAnomalies, { cache: "no-store" });
    if (!res.ok) return [];
    const data = await safeJson(res);
    const list = Array.isArray(data) ? data : [];
    return list.map(normalizeAnomaly);
  } catch (e) {
    console.warn("Anomalies endpoint error", e);
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
