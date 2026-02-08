module.exports = [
"[project]/components/SectionTitle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function SectionTitle({ title, subtitle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-10 mb-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-b border-[#2e89c6]/60 pb-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-extrabold text-[#111]",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/components/SectionTitle.tsx",
                    lineNumber: 5,
                    columnNumber: 9
                }, this),
                subtitle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-black/60 mt-1",
                    children: subtitle
                }, void 0, false, {
                    fileName: "[project]/components/SectionTitle.tsx",
                    lineNumber: 6,
                    columnNumber: 21
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/components/SectionTitle.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/SectionTitle.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Toast.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Toast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function Toast({ msg, type }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: [
            "rounded px-4 py-3 text-sm font-semibold",
            type === "ok" ? "bg-green-600 text-white" : "bg-red-600 text-white"
        ].join(" "),
        children: msg
    }, void 0, false, {
        fileName: "[project]/components/Toast.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addClass",
    ()=>addClass,
    "addStudent",
    ()=>addStudent,
    "enrollStudentInClass",
    ()=>enrollStudentInClass,
    "fetchActiveAlerts",
    ()=>fetchActiveAlerts,
    "fetchAlerts",
    ()=>fetchAlerts,
    "fetchAnomalies",
    ()=>fetchAnomalies,
    "fetchClasses",
    ()=>fetchClasses,
    "fetchDashboardStats",
    ()=>fetchDashboardStats,
    "fetchMonthlyReport",
    ()=>fetchMonthlyReport,
    "fetchRiskAssessment",
    ()=>fetchRiskAssessment,
    "fetchSemesterKpis",
    ()=>fetchSemesterKpis,
    "fetchStudents",
    ()=>fetchStudents,
    "markStudentAbsent",
    ()=>markStudentAbsent,
    "markStudentLate",
    ()=>markStudentLate,
    "markStudentPresent",
    ()=>markStudentPresent,
    "postAttendance",
    ()=>postAttendance,
    "removeStudent",
    ()=>removeStudent
]);
const ENDPOINTS = {
    // ✅ Existing working endpoints
    getStudents: "https://alouanihatim.app.n8n.cloud/webhook/194f2a4c-aa88-45c9-9841-4b73b0278374",
    addStudent: "https://alouanihatim.app.n8n.cloud/webhook/31729320-0f37-42b1-bcbe-f2df9fde263e",
    removeStudent: "https://alouanihatim.app.n8n.cloud/webhook/ba4b4f11-0645-40f5-9202-eb6e83fdcad1",
    studentAbsence: "https://alouanihatim.app.n8n.cloud/webhook/a500d3a1-5755-4ac8-9932-d736a9cf1ddb",
    studentLate: "https://alouanihatim.app.n8n.cloud/webhook/afcee359-0256-4e46-a4fb-32628f0d08d9",
    studentPresent: "https://alouanihatim.app.n8n.cloud/webhook/cc0f7433-0ec9-4850-8804-37b99af5e7d1",
    getStatistics: "https://alouanihatim.app.n8n.cloud/webhook-test/85fcf9e4-1f91-4979-b973-1e2781854b02",
    // 🔴 Placeholder endpoints (update with real URLs when n8n workflows are ready)
    getClasses: "https://alouanihatim.app.n8n.cloud/webhook/classes",
    addClass: "https://alouanihatim.app.n8n.cloud/webhook/add-class",
    enrollStudent: "https://alouanihatim.app.n8n.cloud/webhook/enroll-student",
    getAlerts: "https://alouanihatim.app.n8n.cloud/webhook/alerts",
    getActiveAlerts: "https://alouanihatim.app.n8n.cloud/webhook/alerts",
    getAnomalies: "https://alouanihatim.app.n8n.cloud/webhook/anomalies",
    getRiskAssessment: "https://alouanihatim.app.n8n.cloud/webhook/risk-assessment",
    getSemesterKpis: "https://alouanihatim.app.n8n.cloud/webhook/semester-kpis",
    getMonthlyReport: "https://alouanihatim.app.n8n.cloud/webhook/monthly-report"
};
function normalizeStudent(item) {
    return {
        student_id: item.STUDENT_ID ?? item.student_id ?? 0,
        first_name: item.FIRST_NAME ?? item.first_name ?? "",
        last_name: item.LAST_NAME ?? item.last_name ?? "",
        email: item.EMAIL ?? item.email ?? null,
        absence_count: item.ABSENCE_COUNT ?? item.absence_count ?? 0,
        late_count: item.LATE_COUNT ?? item.late_count ?? 0,
        day_check: item.DAY_CHECK ?? item.day_check ?? 0
    };
}
function normalizeStudents(data) {
    // Handle single object
    if (data && !Array.isArray(data) && (data.STUDENT_ID || data.student_id)) {
        return [
            normalizeStudent(data)
        ];
    }
    // Handle arrays
    if (Array.isArray(data)) return data.map(normalizeStudent);
    if (Array.isArray(data?.students)) return data.students.map(normalizeStudent);
    if (Array.isArray(data?.data)) return data.data.map(normalizeStudent);
    return [];
}
async function safeJson(res) {
    const text = await res.text();
    try {
        return JSON.parse(text);
    } catch  {
        return {
            raw: text
        };
    }
}
async function fetchStudents() {
    const res = await fetch(ENDPOINTS.getStudents, {
        cache: "no-store"
    });
    if (!res.ok) throw new Error(`GET students failed: ${res.status}`);
    const data = await safeJson(res);
    return normalizeStudents(data);
}
async function postAttendance(payload) {
    const res = await fetch(ENDPOINTS.studentAbsence, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    const data = await safeJson(res);
    if (!res.ok) throw new Error(`POST attendance failed: ${res.status} ${JSON.stringify(data)}`);
    return data;
}
async function addStudent(payload) {
    const res = await fetch(ENDPOINTS.addStudent, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    const data = await safeJson(res);
    if (!res.ok) throw new Error(`POST add student failed: ${res.status} ${JSON.stringify(data)}`);
    return data;
}
async function removeStudent(payload) {
    const res = await fetch(ENDPOINTS.removeStudent, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    const data = await safeJson(res);
    if (!res.ok) throw new Error(`POST remove student failed: ${res.status} ${JSON.stringify(data)}`);
    return data;
}
async function markStudentPresent(payload) {
    const res = await fetch(ENDPOINTS.studentPresent, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    const data = await safeJson(res);
    if (!res.ok) throw new Error(`POST mark present failed: ${res.status} ${JSON.stringify(data)}`);
    return data;
}
async function markStudentLate(payload) {
    const res = await fetch(ENDPOINTS.studentLate, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    const data = await safeJson(res);
    if (!res.ok) throw new Error(`POST mark late failed: ${res.status} ${JSON.stringify(data)}`);
    return data;
}
async function markStudentAbsent(payload) {
    const res = await fetch(ENDPOINTS.studentAbsence, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    const data = await safeJson(res);
    if (!res.ok) throw new Error(`POST mark absent failed: ${res.status} ${JSON.stringify(data)}`);
    return data;
}
async function fetchClasses() {
    try {
        const res = await fetch(ENDPOINTS.getClasses, {
            cache: "no-store"
        });
        if (!res.ok) throw new Error(`GET classes failed: ${res.status}`);
        const data = await safeJson(res);
        if (Array.isArray(data)) return data;
        if (Array.isArray(data?.classes)) return data.classes;
        if (Array.isArray(data?.data)) return data.data;
        return [];
    } catch (e) {
        console.error("fetchClasses error:", e);
        return [];
    }
}
async function addClass(payload) {
    const res = await fetch(ENDPOINTS.addClass, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    const data = await safeJson(res);
    if (!res.ok) throw new Error(`POST add class failed: ${res.status} ${JSON.stringify(data)}`);
    return data;
}
async function enrollStudentInClass(payload) {
    const res = await fetch(ENDPOINTS.enrollStudent, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    const data = await safeJson(res);
    if (!res.ok) throw new Error(`POST enroll student failed: ${res.status} ${JSON.stringify(data)}`);
    return data;
}
async function fetchAlerts() {
    try {
        const res = await fetch(ENDPOINTS.getAlerts, {
            cache: "no-store"
        });
        if (!res.ok) throw new Error(`GET alerts failed: ${res.status}`);
        const data = await safeJson(res);
        if (Array.isArray(data)) return data;
        if (Array.isArray(data?.alerts)) return data.alerts;
        if (Array.isArray(data?.data)) return data.data;
        return [];
    } catch (e) {
        console.error("fetchAlerts error:", e);
        return [];
    }
}
async function fetchActiveAlerts() {
    try {
        const res = await fetch(ENDPOINTS.getActiveAlerts, {
            cache: "no-store"
        });
        if (!res.ok) throw new Error(`GET active alerts failed: ${res.status}`);
        const data = await safeJson(res);
        if (Array.isArray(data)) return data;
        if (Array.isArray(data?.alerts)) return data.alerts;
        if (Array.isArray(data?.data)) return data.data;
        return [];
    } catch (e) {
        console.error("fetchActiveAlerts error:", e);
        return [];
    }
}
async function fetchAnomalies() {
    try {
        const res = await fetch(ENDPOINTS.getAnomalies, {
            cache: "no-store"
        });
        if (!res.ok) throw new Error(`GET anomalies failed: ${res.status}`);
        const data = await safeJson(res);
        if (Array.isArray(data)) return data;
        if (Array.isArray(data?.anomalies)) return data.anomalies;
        if (Array.isArray(data?.data)) return data.data;
        return [];
    } catch (e) {
        console.error("fetchAnomalies error:", e);
        return [];
    }
}
async function fetchDashboardStats() {
    try {
        const res = await fetch(ENDPOINTS.getStatistics, {
            cache: "no-store"
        });
        if (!res.ok) throw new Error(`GET statistics failed: ${res.status}`);
        const data = await safeJson(res);
        return {
            total_students: data?.total_students ?? 0,
            active_alerts: data?.active_alerts ?? 0,
            at_risk_students: data?.at_risk_students ?? 0,
            recent_anomalies: data?.recent_anomalies ?? []
        };
    } catch (e) {
        console.error("fetchDashboardStats error:", e);
        return {
            total_students: 0,
            active_alerts: 0,
            at_risk_students: 0,
            recent_anomalies: []
        };
    }
}
async function fetchRiskAssessment() {
    try {
        const res = await fetch(ENDPOINTS.getRiskAssessment, {
            cache: "no-store"
        });
        if (!res.ok) throw new Error(`GET risk assessment failed: ${res.status}`);
        const data = await safeJson(res);
        if (Array.isArray(data)) return data;
        if (Array.isArray(data?.data)) return data.data;
        return [];
    } catch (e) {
        console.error("fetchRiskAssessment error:", e);
        return [];
    }
}
async function fetchSemesterKpis() {
    try {
        const res = await fetch(ENDPOINTS.getSemesterKpis, {
            cache: "no-store"
        });
        if (!res.ok) throw new Error(`GET semester KPIs failed: ${res.status}`);
        const data = await safeJson(res);
        if (Array.isArray(data)) return data;
        if (Array.isArray(data?.data)) return data.data;
        return [];
    } catch (e) {
        console.error("fetchSemesterKpis error:", e);
        return [];
    }
}
async function fetchMonthlyReport(filters) {
    try {
        let url = ENDPOINTS.getMonthlyReport;
        if (filters) {
            const params = new URLSearchParams();
            if (filters.month) params.append("month", filters.month);
            if (filters.student_id) params.append("student_id", filters.student_id.toString());
            if (filters.class_id) params.append("class_id", filters.class_id.toString());
            if (params.toString()) url += `?${params.toString()}`;
        }
        const res = await fetch(url, {
            cache: "no-store"
        });
        if (!res.ok) throw new Error(`GET monthly report failed: ${res.status}`);
        const data = await safeJson(res);
        if (Array.isArray(data)) return data;
        if (Array.isArray(data?.data)) return data.data;
        return [];
    } catch (e) {
        console.error("fetchMonthlyReport error:", e);
        return [];
    }
}
}),
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fullName",
    ()=>fullName,
    "todayISO",
    ()=>todayISO
]);
function todayISO() {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
}
function fullName(s) {
    return `${s.first_name} ${s.last_name}`.trim();
}
}),
"[project]/app/students/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StudentsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SectionTitle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toast.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Avatar({ name }) {
    const initials = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const parts = name.trim().split(/\s+/);
        const a = parts[0]?.[0] ?? "U";
        const b = parts[1]?.[0] ?? "";
        return (a + b).toUpperCase();
    }, [
        name
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-10 w-10 rounded-full bg-[#2e89c6]/10 border border-[#2e89c6]/25 flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs font-extrabold text-[#2e89c6]",
            children: initials
        }, void 0, false, {
            fileName: "[project]/app/students/page.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/students/page.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
function StudentsPage() {
    const [students, setStudents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [markedStudents, setMarkedStudents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [first_name, setFirst] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [last_name, setLast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    async function reload() {
        const list = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchStudents"])();
        setStudents(list);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        reload().catch((e)=>setToast({
                type: "err",
                msg: e?.message ?? "Failed to load students"
            }));
    }, []);
    async function onAdd() {
        setLoading(true);
        setToast(null);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addStudent"])({
                first_name: first_name.trim(),
                last_name: last_name.trim(),
                email: email.trim() || undefined
            });
            setFirst("");
            setLast("");
            setEmail("");
            await reload();
            setToast({
                type: "ok",
                msg: "Student added successfully."
            });
        } catch (e) {
            setToast({
                type: "err",
                msg: e?.message ?? "Failed to add student"
            });
        } finally{
            setLoading(false);
        }
    }
    async function onRemove(id) {
        if (!confirm("Remove this student?")) return;
        setLoading(true);
        setToast(null);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeStudent"])({
                student_id: id
            });
            await reload();
            setToast({
                type: "ok",
                msg: "Student removed successfully."
            });
        } catch (e) {
            setToast({
                type: "err",
                msg: e?.message ?? "Failed to remove student"
            });
        } finally{
            setLoading(false);
        }
    }
    async function onMarkPresent(student) {
        setLoading(true);
        setToast(null);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markStudentPresent"])({
                student_id: student.student_id
            });
            setMarkedStudents((prev)=>new Set(prev).add(student.student_id));
            await reload(); // so day_check updates immediately
            setToast({
                type: "ok",
                msg: "Student marked as present."
            });
        } catch (e) {
            setToast({
                type: "err",
                msg: e?.message ?? "Failed to mark present"
            });
        } finally{
            setLoading(false);
        }
    }
    async function onMarkLate(student) {
        setLoading(true);
        setToast(null);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markStudentLate"])({
                student_id: student.student_id
            });
            setMarkedStudents((prev)=>new Set(prev).add(student.student_id));
            await reload();
            setToast({
                type: "ok",
                msg: "Student marked as late."
            });
        } catch (e) {
            setToast({
                type: "err",
                msg: e?.message ?? "Failed to mark late"
            });
        } finally{
            setLoading(false);
        }
    }
    async function onMarkAbsent(student) {
        setLoading(true);
        setToast(null);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markStudentAbsent"])({
                student_id: student.student_id
            });
            setMarkedStudents((prev)=>new Set(prev).add(student.student_id));
            await reload();
            setToast({
                type: "ok",
                msg: "Student marked as absent."
            });
        } catch (e) {
            setToast({
                type: "err",
                msg: e?.message ?? "Failed to mark absent"
            });
        } finally{
            setLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: "Students",
                subtitle: "Manage students + mark daily attendance (calls n8n webhooks)."
            }, void 0, false, {
                fileName: "[project]/app/students/page.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            toast ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    type: toast.type,
                    msg: toast.msg
                }, void 0, false, {
                    fileName: "[project]/app/students/page.tsx",
                    lineNumber: 139,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/students/page.tsx",
                lineNumber: 138,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 lg:grid-cols-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-4 rounded bg-white shadow-soft p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-extrabold",
                                children: "Add Student"
                            }, void 0, false, {
                                fileName: "[project]/app/students/page.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mt-4 block text-xs font-bold text-black/70",
                                children: "First name"
                            }, void 0, false, {
                                fileName: "[project]/app/students/page.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "mt-2 w-full rounded border border-black/10 px-3 py-2",
                                value: first_name,
                                onChange: (e)=>setFirst(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/app/students/page.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mt-4 block text-xs font-bold text-black/70",
                                children: "Last name"
                            }, void 0, false, {
                                fileName: "[project]/app/students/page.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "mt-2 w-full rounded border border-black/10 px-3 py-2",
                                value: last_name,
                                onChange: (e)=>setLast(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/app/students/page.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mt-4 block text-xs font-bold text-black/70",
                                children: "Email (optional)"
                            }, void 0, false, {
                                fileName: "[project]/app/students/page.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "mt-2 w-full rounded border border-black/10 px-3 py-2",
                                value: email,
                                onChange: (e)=>setEmail(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/app/students/page.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onAdd,
                                disabled: loading || !first_name.trim() || !last_name.trim(),
                                className: "mt-5 w-full rounded bg-[#2e89c6] px-4 py-3 text-white font-extrabold disabled:opacity-60",
                                children: loading ? "Working..." : "Add Student"
                            }, void 0, false, {
                                fileName: "[project]/app/students/page.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 text-xs text-black/50",
                                children: [
                                    "Alert rule: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-extrabold text-black/70",
                                        children: "5+ absences"
                                    }, void 0, false, {
                                        fileName: "[project]/app/students/page.tsx",
                                        lineNumber: 178,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/students/page.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/students/page.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-8 rounded bg-white shadow-soft overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-black/5 p-4 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-extrabold",
                                        children: "All Students"
                                    }, void 0, false, {
                                        fileName: "[project]/app/students/page.tsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-black/60",
                                        children: [
                                            students.length,
                                            " student(s)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/students/page.tsx",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/students/page.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "divide-y divide-black/5",
                                children: [
                                    students.map((s)=>{
                                        const dayCheckDisabled = s.day_check === 1; // from oracle_course
                                        const isMarked = markedStudents.has(s.student_id);
                                        const buttonsDisabled = dayCheckDisabled || isMarked || loading;
                                        const abs = s.absence_count ?? 0;
                                        const late = s.late_count ?? 0;
                                        const isAlert = abs >= 5;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/students/${s.student_id}`,
                                                            className: "shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatar, {
                                                                name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fullName"])(s)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/students/page.tsx",
                                                                lineNumber: 204,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/students/page.tsx",
                                                            lineNumber: 203,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: `/students/${s.student_id}`,
                                                                    className: "block truncate font-extrabold hover:underline",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fullName"])(s)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/students/page.tsx",
                                                                    lineNumber: 208,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "truncate text-xs text-black/60",
                                                                    children: s.email ?? "-"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/students/page.tsx",
                                                                    lineNumber: 211,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-2 flex items-center gap-2 text-xs",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "rounded bg-black/5 px-2 py-1",
                                                                            children: [
                                                                                "Absences: ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-extrabold",
                                                                                    children: abs
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/students/page.tsx",
                                                                                    lineNumber: 215,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/students/page.tsx",
                                                                            lineNumber: 214,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "rounded bg-black/5 px-2 py-1",
                                                                            children: [
                                                                                "Late: ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-extrabold",
                                                                                    children: late
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/students/page.tsx",
                                                                                    lineNumber: 218,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/students/page.tsx",
                                                                            lineNumber: 217,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        isAlert ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "rounded bg-red-50 border border-red-600/20 px-2 py-1 text-red-700 font-extrabold",
                                                                            children: "ALERT"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/students/page.tsx",
                                                                            lineNumber: 221,
                                                                            columnNumber: 27
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "rounded bg-emerald-50 border border-emerald-600/20 px-2 py-1 text-emerald-700 font-extrabold",
                                                                            children: "OK"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/students/page.tsx",
                                                                            lineNumber: 225,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        dayCheckDisabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "rounded bg-blue-50 border border-blue-600/20 px-2 py-1 text-blue-700 font-extrabold",
                                                                            children: "Marked today"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/students/page.tsx",
                                                                            lineNumber: 230,
                                                                            columnNumber: 27
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "rounded bg-black/5 px-2 py-1 text-black/70 font-extrabold",
                                                                            children: "Not marked"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/students/page.tsx",
                                                                            lineNumber: 234,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/students/page.tsx",
                                                                    lineNumber: 213,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/students/page.tsx",
                                                            lineNumber: 207,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/students/page.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-2 sm:justify-end",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>onMarkPresent(s),
                                                            disabled: buttonsDisabled,
                                                            className: "rounded border border-green-600/30 bg-green-50 px-3 py-2 text-xs font-extrabold text-green-700 hover:bg-green-100 disabled:opacity-40 disabled:cursor-not-allowed",
                                                            children: "Present"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/students/page.tsx",
                                                            lineNumber: 243,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>onMarkLate(s),
                                                            disabled: buttonsDisabled,
                                                            className: "rounded border border-yellow-600/30 bg-yellow-50 px-3 py-2 text-xs font-extrabold text-yellow-700 hover:bg-yellow-100 disabled:opacity-40 disabled:cursor-not-allowed",
                                                            children: "Late"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/students/page.tsx",
                                                            lineNumber: 250,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>onMarkAbsent(s),
                                                            disabled: buttonsDisabled,
                                                            className: "rounded border border-orange-600/30 bg-orange-50 px-3 py-2 text-xs font-extrabold text-orange-700 hover:bg-orange-100 disabled:opacity-40 disabled:cursor-not-allowed",
                                                            children: "Absent"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/students/page.tsx",
                                                            lineNumber: 257,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>onRemove(s.student_id),
                                                            disabled: loading,
                                                            className: "rounded border border-red-600/30 bg-red-50 px-3 py-2 text-xs font-extrabold text-red-700 hover:bg-red-100 disabled:opacity-60",
                                                            children: "Remove"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/students/page.tsx",
                                                            lineNumber: 265,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/students/page.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, s.student_id, true, {
                                            fileName: "[project]/app/students/page.tsx",
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, this);
                                    }),
                                    students.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-5 text-black/60",
                                        children: "No students yet. Add one on the left."
                                    }, void 0, false, {
                                        fileName: "[project]/app/students/page.tsx",
                                        lineNumber: 278,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/students/page.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/students/page.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/students/page.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/students/page.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_8a5e9f7a._.js.map