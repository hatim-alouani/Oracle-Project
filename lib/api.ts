import {
  Student,
  ClassItem,
  AlertItem,
  AnomalyPattern,
  MonthlyAttendanceRow,
  SemesterKpiRow,
  StudentRiskRow,
  DashboardStats,
  mapStudent,
  mapClass,
  mapAlert,
  mapAnomaly,
  mapMonthlyAttendance,
  mapSemesterKpi,
  mapStudentRisk,
  mapArray,
  pickFirst,
  toNumberSafe,
} from "./mappers";

const ENDPOINTS = {
  // ✅ Existing working endpoints
  getStudents: "https://alouanihatim.app.n8n.cloud/webhook/194f2a4c-aa88-45c9-9841-4b73b0278374",
  addStudent: "https://alouanihatim.app.n8n.cloud/webhook/31729320-0f37-42b1-bcbe-f2df9fde263e",
  removeStudent: "https://alouanihatim.app.n8n.cloud/webhook/ba4b4f11-0645-40f5-9202-eb6e83fdcad1",
  studentAbsence: "https://alouanihatim.app.n8n.cloud/webhook/a500d3a1-5755-4ac8-9932-d736a9cf1ddb",
  studentLate: "https://alouanihatim.app.n8n.cloud/webhook/afcee359-0256-4e46-a4fb-32628f0d08d9",
  studentPresent: "https://alouanihatim.app.n8n.cloud/webhook/cc0f7433-0ec9-4850-8804-37b99af5e7d1",
  getStatistics: "https://alouanihatim.app.n8n.cloud/webhook/194f2a4c-aa88-45c9-9841-4b73b0278374",

  // 🔴 Placeholder endpoints (update with real URLs when n8n workflows are ready)
  getClasses: "https://alouanihatim.app.n8n.cloud/webhook/classes",
  addClass: "https://alouanihatim.app.n8n.cloud/webhook/add-class",
  enrollStudent: "https://alouanihatim.app.n8n.cloud/webhook/enroll-student",
  getAlerts: "https://alouanihatim.app.n8n.cloud/webhook/alerts",
  getActiveAlerts: "https://alouanihatim.app.n8n.cloud/webhook/alerts",
  getAnomalies: "https://alouanihatim.app.n8n.cloud/webhook/anomalies",
  getRiskAssessment: "https://alouanihatim.app.n8n.cloud/webhook/risk-assessment",
  getSemesterKpis: "https://alouanihatim.app.n8n.cloud/webhook/semester-kpis",
  getMonthlyReport: "https://alouanihatim.app.n8n.cloud/webhook/monthly-report",
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
