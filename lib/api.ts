import { AttendancePayload, Student } from "./types";

const ENDPOINTS = {
  getStudents: "https://alouanihatim.app.n8n.cloud/webhook/194f2a4c-aa88-45c9-9841-4b73b0278374",
  addStudent: "https://alouanihatim.app.n8n.cloud/webhook/31729320-0f37-42b1-bcbe-f2df9fde263e",
  removeStudent: "https://alouanihatim.app.n8n.cloud/webhook/ba4b4f11-0645-40f5-9202-eb6e83fdcad1",
  studentAbsence: "https://alouanihatim.app.n8n.cloud/webhook/a500d3a1-5755-4ac8-9932-d736a9cf1ddb",
  studentLate: "https://alouanihatim.app.n8n.cloud/webhook/afcee359-0256-4e46-a4fb-32628f0d08d9",
  studentPresent: "https://alouanihatim.app.n8n.cloud/webhook/cc0f7433-0ec9-4850-8804-37b99af5e7d1",
  getStatistics: "https://alouanihatim.app.n8n.cloud/webhook-test/85fcf9e4-1f91-4979-b973-1e2781854b02",
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

export async function markStudentPresent(payload: { student_id: number; first_name: string; last_name: string; email?: string | null }) {
  const res = await fetch(ENDPOINTS.studentPresent, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await safeJson(res);
  if (!res.ok) throw new Error(`POST mark present failed: ${res.status} ${JSON.stringify(data)}`);
  return data;
}

export async function markStudentLate(payload: { student_id: number; first_name: string; last_name: string; email?: string | null }) {
  const res = await fetch(ENDPOINTS.studentLate, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await safeJson(res);
  if (!res.ok) throw new Error(`POST mark late failed: ${res.status} ${JSON.stringify(data)}`);
  return data;
}

export async function markStudentAbsent(payload: { student_id: number; first_name: string; last_name: string; email?: string | null }) {
  const res = await fetch(ENDPOINTS.studentAbsence, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await safeJson(res);
  if (!res.ok) throw new Error(`POST mark absent failed: ${res.status} ${JSON.stringify(data)}`);
  return data;
}
