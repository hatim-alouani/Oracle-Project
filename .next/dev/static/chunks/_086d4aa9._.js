(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/SectionTitle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SectionTitle({ title, subtitle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-10 mb-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-b border-[#2e89c6]/60 pb-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-extrabold text-[#111]",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/components/SectionTitle.tsx",
                    lineNumber: 5,
                    columnNumber: 9
                }, this),
                subtitle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_c = SectionTitle;
var _c;
__turbopack_context__.k.register(_c, "SectionTitle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Toast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Toast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Toast({ msg, type }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c = Toast;
var _c;
__turbopack_context__.k.register(_c, "Toast");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/mappers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================================
// CANONICAL TYPES - Frontend uses these (camelCase)
// ============================================================================
__turbopack_context__.s([
    "mapAlert",
    ()=>mapAlert,
    "mapAlertThreshold",
    ()=>mapAlertThreshold,
    "mapAnomaly",
    ()=>mapAnomaly,
    "mapArray",
    ()=>mapArray,
    "mapAttendance",
    ()=>mapAttendance,
    "mapClass",
    ()=>mapClass,
    "mapClassAttendance",
    ()=>mapClassAttendance,
    "mapEnrollment",
    ()=>mapEnrollment,
    "mapMonthlyAttendance",
    ()=>mapMonthlyAttendance,
    "mapSemesterKpi",
    ()=>mapSemesterKpi,
    "mapStudent",
    ()=>mapStudent,
    "mapStudentRisk",
    ()=>mapStudentRisk,
    "normalizeKey",
    ()=>normalizeKey,
    "pickFirst",
    ()=>pickFirst,
    "toIsoDateSafe",
    ()=>toIsoDateSafe,
    "toNumberSafe",
    ()=>toNumberSafe,
    "toStringSafe",
    ()=>toStringSafe
]);
function normalizeKey(key) {
    return key.toLowerCase().replace(/_/g, "");
}
function pickFirst(obj, keys) {
    for (const key of keys){
        if (obj[key] !== undefined && obj[key] !== null) {
            return obj[key];
        }
    }
    return undefined;
}
function toNumberSafe(value, defaultValue = 0) {
    if (typeof value === "number") return value;
    if (typeof value === "string") {
        const parsed = parseFloat(value);
        return isNaN(parsed) ? defaultValue : parsed;
    }
    return defaultValue;
}
function toStringSafe(value, defaultValue = "") {
    if (value === null || value === undefined) return defaultValue;
    return String(value);
}
function toIsoDateSafe(value) {
    if (!value) return undefined;
    if (typeof value === "string") {
        // Already ISO or valid date string
        try {
            return new Date(value).toISOString();
        } catch  {
            return value;
        }
    }
    return undefined;
}
function mapStudent(item) {
    return {
        studentId: toNumberSafe(pickFirst(item, [
            "studentId",
            "student_id",
            "STUDENT_ID",
            "StudentId"
        ]), 0),
        firstName: toStringSafe(pickFirst(item, [
            "firstName",
            "first_name",
            "FIRST_NAME",
            "FirstName"
        ]), ""),
        lastName: toStringSafe(pickFirst(item, [
            "lastName",
            "last_name",
            "LAST_NAME",
            "LastName"
        ]), ""),
        email: toStringSafe(pickFirst(item, [
            "email",
            "EMAIL",
            "Email"
        ]), ""),
        absenceCount: toNumberSafe(pickFirst(item, [
            "absenceCount",
            "absence_count",
            "ABSENCE_COUNT",
            "AbsenceCount"
        ])),
        lateCount: toNumberSafe(pickFirst(item, [
            "lateCount",
            "late_count",
            "LATE_COUNT",
            "LateCount"
        ])),
        dayCheck: pickFirst(item, [
            "dayCheck",
            "day_check",
            "DAY_CHECK",
            "DayCheck"
        ]),
        createdDate: toIsoDateSafe(pickFirst(item, [
            "createdDate",
            "created_date",
            "CREATED_DATE",
            "CreatedDate"
        ])),
        updatedDate: toIsoDateSafe(pickFirst(item, [
            "updatedDate",
            "updated_date",
            "UPDATED_DATE",
            "UpdatedDate"
        ]))
    };
}
function mapClass(item) {
    return {
        classId: toNumberSafe(pickFirst(item, [
            "classId",
            "class_id",
            "CLASS_ID",
            "ClassId"
        ]), 0),
        className: toStringSafe(pickFirst(item, [
            "className",
            "class_name",
            "CLASS_NAME",
            "ClassName"
        ]), ""),
        semester: toStringSafe(pickFirst(item, [
            "semester",
            "SEMESTER",
            "Semester"
        ]), "")
    };
}
function mapAttendance(item) {
    return {
        attendanceId: toNumberSafe(pickFirst(item, [
            "attendanceId",
            "attendance_id",
            "ATTENDANCE_ID",
            "AttendanceId"
        ]), 0),
        studentId: toNumberSafe(pickFirst(item, [
            "studentId",
            "student_id",
            "STUDENT_ID",
            "StudentId"
        ]), 0),
        classId: toNumberSafe(pickFirst(item, [
            "classId",
            "class_id",
            "CLASS_ID",
            "ClassId"
        ]), 0),
        sessionDate: toStringSafe(pickFirst(item, [
            "sessionDate",
            "session_date",
            "SESSION_DATE",
            "SessionDate"
        ]), ""),
        status: pickFirst(item, [
            "status",
            "STATUS",
            "Status"
        ]) || "PRESENT",
        minutesLate: toNumberSafe(pickFirst(item, [
            "minutesLate",
            "minutes_late",
            "MINUTES_LATE",
            "MinutesLate"
        ])),
        reason: toStringSafe(pickFirst(item, [
            "reason",
            "REASON",
            "Reason"
        ])),
        createdAt: toIsoDateSafe(pickFirst(item, [
            "createdAt",
            "created_at",
            "CREATED_AT",
            "CreatedAt"
        ]))
    };
}
function mapAlert(item) {
    return {
        alertId: toNumberSafe(pickFirst(item, [
            "alertId",
            "alert_id",
            "ALERT_ID",
            "AlertId"
        ]), 0),
        studentId: toNumberSafe(pickFirst(item, [
            "studentId",
            "student_id",
            "STUDENT_ID",
            "StudentId"
        ]), 0),
        alertType: toStringSafe(pickFirst(item, [
            "alertType",
            "alert_type",
            "ALERT_TYPE",
            "AlertType"
        ]), ""),
        message: toStringSafe(pickFirst(item, [
            "message",
            "MESSAGE",
            "Message"
        ]), ""),
        createdAt: toStringSafe(pickFirst(item, [
            "createdAt",
            "created_at",
            "CREATED_AT",
            "CreatedAt"
        ]), ""),
        status: toStringSafe(pickFirst(item, [
            "status",
            "STATUS",
            "Status"
        ]), "ACTIVE")
    };
}
function mapEnrollment(item) {
    return {
        enrollmentId: toNumberSafe(pickFirst(item, [
            "enrollmentId",
            "enrollment_id",
            "ENROLLMENT_ID",
            "EnrollmentId"
        ]), 0),
        studentId: toNumberSafe(pickFirst(item, [
            "studentId",
            "student_id",
            "STUDENT_ID",
            "StudentId"
        ]), 0),
        classId: toNumberSafe(pickFirst(item, [
            "classId",
            "class_id",
            "CLASS_ID",
            "ClassId"
        ]), 0),
        enrollmentDate: toStringSafe(pickFirst(item, [
            "enrollmentDate",
            "enrollment_date",
            "ENROLLMENT_DATE",
            "EnrollmentDate"
        ]), ""),
        status: toStringSafe(pickFirst(item, [
            "status",
            "STATUS",
            "Status"
        ]), "ACTIVE")
    };
}
function mapAlertThreshold(item) {
    return {
        thresholdId: toNumberSafe(pickFirst(item, [
            "thresholdId",
            "threshold_id",
            "THRESHOLD_ID",
            "ThresholdId"
        ]), 0),
        thresholdType: toStringSafe(pickFirst(item, [
            "thresholdType",
            "threshold_type",
            "THRESHOLD_TYPE",
            "ThresholdType"
        ]), ""),
        thresholdValue: toNumberSafe(pickFirst(item, [
            "thresholdValue",
            "threshold_value",
            "THRESHOLD_VALUE",
            "ThresholdValue"
        ]), 0),
        period: toStringSafe(pickFirst(item, [
            "period",
            "PERIOD",
            "Period"
        ]), "MONTHLY"),
        description: toStringSafe(pickFirst(item, [
            "description",
            "DESCRIPTION",
            "Description"
        ])),
        isActive: pickFirst(item, [
            "isActive",
            "is_active",
            "IS_ACTIVE",
            "IsActive"
        ]),
        createdDate: toIsoDateSafe(pickFirst(item, [
            "createdDate",
            "created_date",
            "CREATED_DATE",
            "CreatedDate"
        ])),
        updatedDate: toIsoDateSafe(pickFirst(item, [
            "updatedDate",
            "updated_date",
            "UPDATED_DATE",
            "UpdatedDate"
        ]))
    };
}
function mapAnomaly(item) {
    return {
        patternId: toNumberSafe(pickFirst(item, [
            "patternId",
            "pattern_id",
            "PATTERN_ID",
            "PatternId",
            "anomalyId",
            "anomaly_id",
            "ANOMALY_ID"
        ]), 0),
        studentId: toNumberSafe(pickFirst(item, [
            "studentId",
            "student_id",
            "STUDENT_ID",
            "StudentId"
        ]), 0),
        patternType: toStringSafe(pickFirst(item, [
            "patternType",
            "pattern_type",
            "PATTERN_TYPE",
            "PatternType"
        ]), ""),
        detectionDate: toStringSafe(pickFirst(item, [
            "detectionDate",
            "detection_date",
            "DETECTION_DATE",
            "DetectionDate"
        ]), ""),
        description: toStringSafe(pickFirst(item, [
            "description",
            "DESCRIPTION",
            "Description"
        ])),
        severity: toStringSafe(pickFirst(item, [
            "severity",
            "SEVERITY",
            "Severity"
        ]), "LOW"),
        isResolved: pickFirst(item, [
            "isResolved",
            "is_resolved",
            "IS_RESOLVED",
            "IsResolved",
            "resolved"
        ]),
        resolvedDate: toIsoDateSafe(pickFirst(item, [
            "resolvedDate",
            "resolved_date",
            "RESOLVED_DATE",
            "ResolvedDate"
        ]))
    };
}
function mapMonthlyAttendance(item) {
    return {
        studentId: toNumberSafe(pickFirst(item, [
            "studentId",
            "student_id",
            "STUDENT_ID",
            "StudentId"
        ]), 0),
        firstName: toStringSafe(pickFirst(item, [
            "firstName",
            "first_name",
            "FIRST_NAME",
            "FirstName"
        ]), ""),
        lastName: toStringSafe(pickFirst(item, [
            "lastName",
            "last_name",
            "LAST_NAME",
            "LastName"
        ]), ""),
        fullName: toStringSafe(pickFirst(item, [
            "fullName",
            "full_name",
            "FULL_NAME",
            "FullName"
        ]), ""),
        month: toStringSafe(pickFirst(item, [
            "month",
            "MONTH",
            "Month"
        ]), ""),
        monthName: toStringSafe(pickFirst(item, [
            "monthName",
            "month_name",
            "MONTH_NAME",
            "MonthName"
        ]), ""),
        totalDays: toNumberSafe(pickFirst(item, [
            "totalDays",
            "total_days",
            "TOTAL_DAYS",
            "TotalDays"
        ]), 0),
        daysPresent: toNumberSafe(pickFirst(item, [
            "daysPresent",
            "days_present",
            "DAYS_PRESENT",
            "DaysPresent"
        ]), 0),
        daysLate: toNumberSafe(pickFirst(item, [
            "daysLate",
            "days_late",
            "DAYS_LATE",
            "DaysLate"
        ]), 0),
        daysAbsent: toNumberSafe(pickFirst(item, [
            "daysAbsent",
            "days_absent",
            "DAYS_ABSENT",
            "DaysAbsent"
        ]), 0),
        attendanceRate: toNumberSafe(pickFirst(item, [
            "attendanceRate",
            "attendance_rate",
            "ATTENDANCE_RATE",
            "AttendanceRate"
        ]), 0),
        avgMinutesLate: toNumberSafe(pickFirst(item, [
            "avgMinutesLate",
            "avg_minutes_late",
            "AVG_MINUTES_LATE",
            "AvgMinutesLate"
        ]), 0)
    };
}
function mapSemesterKpi(item) {
    return {
        semester: toStringSafe(pickFirst(item, [
            "semester",
            "SEMESTER",
            "Semester"
        ]), ""),
        totalStudents: toNumberSafe(pickFirst(item, [
            "totalStudents",
            "total_students",
            "TOTAL_STUDENTS",
            "TotalStudents"
        ]), 0),
        totalClasses: toNumberSafe(pickFirst(item, [
            "totalClasses",
            "total_classes",
            "TOTAL_CLASSES",
            "TotalClasses"
        ]), 0),
        avgAttendanceRate: toNumberSafe(pickFirst(item, [
            "avgAttendanceRate",
            "avg_attendance_rate",
            "AVG_ATTENDANCE_RATE",
            "AvgAttendanceRate"
        ]), 0),
        atRiskStudents: toNumberSafe(pickFirst(item, [
            "atRiskStudents",
            "at_risk_students",
            "AT_RISK_STUDENTS",
            "AtRiskStudents"
        ]), 0),
        studentsWithAlerts: toNumberSafe(pickFirst(item, [
            "studentsWithAlerts",
            "students_with_alerts",
            "STUDENTS_WITH_ALERTS",
            "StudentsWithAlerts"
        ]), 0)
    };
}
function mapClassAttendance(item) {
    return {
        classId: toNumberSafe(pickFirst(item, [
            "classId",
            "class_id",
            "CLASS_ID",
            "ClassId"
        ]), 0),
        className: toStringSafe(pickFirst(item, [
            "className",
            "class_name",
            "CLASS_NAME",
            "ClassName"
        ]), ""),
        semester: toStringSafe(pickFirst(item, [
            "semester",
            "SEMESTER",
            "Semester"
        ]), ""),
        enrolledStudents: toNumberSafe(pickFirst(item, [
            "enrolledStudents",
            "enrolled_students",
            "ENROLLED_STUDENTS",
            "EnrolledStudents"
        ]), 0),
        totalAttendanceRecords: toNumberSafe(pickFirst(item, [
            "totalAttendanceRecords",
            "total_attendance_records",
            "TOTAL_ATTENDANCE_RECORDS",
            "TotalAttendanceRecords"
        ]), 0),
        totalPresent: toNumberSafe(pickFirst(item, [
            "totalPresent",
            "total_present",
            "TOTAL_PRESENT",
            "TotalPresent"
        ]), 0),
        totalLate: toNumberSafe(pickFirst(item, [
            "totalLate",
            "total_late",
            "TOTAL_LATE",
            "TotalLate"
        ]), 0),
        totalAbsent: toNumberSafe(pickFirst(item, [
            "totalAbsent",
            "total_absent",
            "TOTAL_ABSENT",
            "TotalAbsent"
        ]), 0),
        classAttendanceRate: toNumberSafe(pickFirst(item, [
            "classAttendanceRate",
            "class_attendance_rate",
            "CLASS_ATTENDANCE_RATE",
            "ClassAttendanceRate"
        ]), 0)
    };
}
function mapStudentRisk(item) {
    return {
        studentId: toNumberSafe(pickFirst(item, [
            "studentId",
            "student_id",
            "STUDENT_ID",
            "StudentId"
        ]), 0),
        studentName: toStringSafe(pickFirst(item, [
            "studentName",
            "student_name",
            "STUDENT_NAME",
            "StudentName"
        ]), ""),
        email: toStringSafe(pickFirst(item, [
            "email",
            "EMAIL",
            "Email"
        ]), ""),
        absenceCount: toNumberSafe(pickFirst(item, [
            "absenceCount",
            "absence_count",
            "ABSENCE_COUNT",
            "AbsenceCount"
        ]), 0),
        lateCount: toNumberSafe(pickFirst(item, [
            "lateCount",
            "late_count",
            "LATE_COUNT",
            "LateCount"
        ]), 0),
        activeAlerts: toNumberSafe(pickFirst(item, [
            "activeAlerts",
            "active_alerts",
            "ACTIVE_ALERTS",
            "ActiveAlerts"
        ]), 0),
        detectedAnomalies: toNumberSafe(pickFirst(item, [
            "detectedAnomalies",
            "detected_anomalies",
            "DETECTED_ANOMALIES",
            "DetectedAnomalies"
        ]), 0),
        riskLevel: toStringSafe(pickFirst(item, [
            "riskLevel",
            "risk_level",
            "RISK_LEVEL",
            "RiskLevel"
        ]), "LOW"),
        riskPriority: toNumberSafe(pickFirst(item, [
            "riskPriority",
            "risk_priority",
            "RISK_PRIORITY",
            "RiskPriority"
        ]), 99)
    };
}
function mapArray(data, mapper, wrapperKeys = [
    "data",
    "result",
    "students",
    "classes",
    "alerts",
    "anomalies",
    "rows"
]) {
    // Direct array
    if (Array.isArray(data)) {
        return data.map(mapper);
    }
    // Wrapped in object
    if (data && typeof data === "object") {
        // Try wrapper keys
        for (const key of wrapperKeys){
            if (Array.isArray(data[key])) {
                return data[key].map(mapper);
            }
        }
        // Single object -> wrap in array
        // Check if it looks like a single record (has common fields)
        const keys = Object.keys(data);
        if (keys.length > 0 && !wrapperKeys.some((k)=>keys.includes(k))) {
            return [
                mapper(data)
            ];
        }
    }
    return [];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "removeStudent",
    ()=>removeStudent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mappers.ts [app-client] (ecmascript)");
;
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapArray"])(data, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapStudent"], [
        "students",
        "data",
        "result"
    ]);
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
        body: JSON.stringify({
            student_id: payload.student_id,
            class_id: payload.class_id,
            session_date: payload.session_date || new Date().toISOString().split("T")[0],
            status: "PRESENT"
        })
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
        body: JSON.stringify({
            student_id: payload.student_id,
            class_id: payload.class_id,
            session_date: payload.session_date || new Date().toISOString().split("T")[0],
            status: "LATE",
            minutes_late: payload.minutes_late || 0
        })
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
        body: JSON.stringify({
            student_id: payload.student_id,
            class_id: payload.class_id,
            session_date: payload.session_date || new Date().toISOString().split("T")[0],
            status: "ABSENT",
            reason: payload.reason || ""
        })
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapArray"])(data, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapClass"], [
            "classes",
            "data",
            "result"
        ]);
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapArray"])(data, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapAlert"], [
            "alerts",
            "data",
            "result"
        ]);
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapArray"])(data, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapAlert"], [
            "alerts",
            "data",
            "result"
        ]);
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapArray"])(data, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapAnomaly"], [
            "anomalies",
            "data",
            "result"
        ]);
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
        const recentAnomalies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapArray"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickFirst"])(data, [
            "recentAnomalies",
            "recent_anomalies",
            "RECENT_ANOMALIES",
            "anomalies"
        ]) || [], __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapAnomaly"]);
        return {
            totalStudents: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNumberSafe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickFirst"])(data, [
                "totalStudents",
                "total_students",
                "TOTAL_STUDENTS",
                "TotalStudents"
            ]), 0),
            activeAlerts: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNumberSafe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickFirst"])(data, [
                "activeAlerts",
                "active_alerts",
                "ACTIVE_ALERTS",
                "ActiveAlerts"
            ]), 0),
            atRiskStudents: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNumberSafe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickFirst"])(data, [
                "atRiskStudents",
                "at_risk_students",
                "AT_RISK_STUDENTS",
                "AtRiskStudents"
            ]), 0),
            recentAnomalies
        };
    } catch (e) {
        console.error("fetchDashboardStats error:", e);
        return {
            totalStudents: 0,
            activeAlerts: 0,
            atRiskStudents: 0,
            recentAnomalies: []
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapArray"])(data, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapStudentRisk"], [
            "data",
            "result",
            "rows"
        ]);
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapArray"])(data, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapSemesterKpi"], [
            "data",
            "result",
            "rows"
        ]);
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapArray"])(data, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapMonthlyAttendance"], [
            "data",
            "result",
            "rows"
        ]);
    } catch (e) {
        console.error("fetchMonthlyReport error:", e);
        return [];
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/statistics/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatisticsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SectionTitle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function StatisticsPage() {
    _s();
    const [students, setStudents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StatisticsPage.useEffect": ()=>{
            ({
                "StatisticsPage.useEffect": async ()=>{
                    try {
                        const list = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchStudents"])();
                        setStudents(list);
                    } catch (e) {
                        setToast({
                            type: "err",
                            msg: e?.message ?? "Failed to load students"
                        });
                    }
                }
            })["StatisticsPage.useEffect"]();
        }
    }["StatisticsPage.useEffect"], []);
    const kpis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StatisticsPage.useMemo[kpis]": ()=>{
            return {
                totalStudents: students.length,
                // These will be real once you add attendance stats endpoints
                monthlyAbsences: "—",
                monthlyLate: "—",
                alerts: "—"
            };
        }
    }["StatisticsPage.useMemo[kpis]"], [
        students.length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Statistics & Alerts",
                subtitle: "This page is ready. Plug real stats/alerts endpoints from n8n when you create them."
            }, void 0, false, {
                fileName: "[project]/app/statistics/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            toast ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    type: toast.type,
                    msg: toast.msg
                }, void 0, false, {
                    fileName: "[project]/app/statistics/page.tsx",
                    lineNumber: 43,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/statistics/page.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 lg:grid-cols-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-8 rounded bg-white shadow-soft p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-extrabold",
                                children: "Key Indicators"
                            }, void 0, false, {
                                fileName: "[project]/app/statistics/page.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 grid gap-4 sm:grid-cols-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded bg-black/5 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-black/60",
                                                children: "Total students"
                                            }, void 0, false, {
                                                fileName: "[project]/app/statistics/page.tsx",
                                                lineNumber: 53,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-extrabold",
                                                children: kpis.totalStudents
                                            }, void 0, false, {
                                                fileName: "[project]/app/statistics/page.tsx",
                                                lineNumber: 54,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/statistics/page.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded bg-black/5 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-black/60",
                                                children: "Monthly absences"
                                            }, void 0, false, {
                                                fileName: "[project]/app/statistics/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-extrabold",
                                                children: kpis.monthlyAbsences
                                            }, void 0, false, {
                                                fileName: "[project]/app/statistics/page.tsx",
                                                lineNumber: 58,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-black/50 mt-1",
                                                children: "Connect an n8n stats endpoint later."
                                            }, void 0, false, {
                                                fileName: "[project]/app/statistics/page.tsx",
                                                lineNumber: 59,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/statistics/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded bg-black/5 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-black/60",
                                                children: "Monthly lateness"
                                            }, void 0, false, {
                                                fileName: "[project]/app/statistics/page.tsx",
                                                lineNumber: 62,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-extrabold",
                                                children: kpis.monthlyLate
                                            }, void 0, false, {
                                                fileName: "[project]/app/statistics/page.tsx",
                                                lineNumber: 63,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/statistics/page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded bg-black/5 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-black/60",
                                                children: "Active alerts"
                                            }, void 0, false, {
                                                fileName: "[project]/app/statistics/page.tsx",
                                                lineNumber: 66,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-extrabold",
                                                children: kpis.alerts
                                            }, void 0, false, {
                                                fileName: "[project]/app/statistics/page.tsx",
                                                lineNumber: 67,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/statistics/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/statistics/page.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 text-sm font-extrabold",
                                children: "Students list (for quick check)"
                            }, void 0, false, {
                                fileName: "[project]/app/statistics/page.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 text-sm text-black/60",
                                children: "Once attendance is stored, we’ll show per-student absences/lateness here."
                            }, void 0, false, {
                                fileName: "[project]/app/statistics/page.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: "bg-black/5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "text-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3 font-extrabold",
                                                        children: "ID"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/statistics/page.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3 font-extrabold",
                                                        children: "First name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/statistics/page.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3 font-extrabold",
                                                        children: "Last name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/statistics/page.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3 font-extrabold",
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/statistics/page.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/statistics/page.tsx",
                                                lineNumber: 79,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/statistics/page.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: [
                                                students.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "border-t border-black/5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3",
                                                                children: s.student_id
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/statistics/page.tsx",
                                                                lineNumber: 89,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3",
                                                                children: s.first_name
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/statistics/page.tsx",
                                                                lineNumber: 90,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3",
                                                                children: s.last_name
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/statistics/page.tsx",
                                                                lineNumber: 91,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3 text-black/60",
                                                                children: s.email ?? "-"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/statistics/page.tsx",
                                                                lineNumber: 92,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, s.student_id, true, {
                                                        fileName: "[project]/app/statistics/page.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 19
                                                    }, this)),
                                                students.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-5 text-black/60",
                                                        colSpan: 4,
                                                        children: "No students found."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/statistics/page.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/statistics/page.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 19
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/statistics/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/statistics/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/statistics/page.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/statistics/page.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-4 rounded bg-white shadow-soft p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-extrabold",
                                children: "Alerts"
                            }, void 0, false, {
                                fileName: "[project]/app/statistics/page.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 text-sm text-black/60",
                                children: [
                                    "Add an n8n webhook like ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "GET /alerts"
                                    }, void 0, false, {
                                        fileName: "[project]/app/statistics/page.tsx",
                                        lineNumber: 110,
                                        columnNumber: 37
                                    }, this),
                                    " to load real alerts from Oracle."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/statistics/page.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 space-y-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded border border-black/10 bg-black/5 p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs font-extrabold text-black/70",
                                            children: "Not connected yet"
                                        }, void 0, false, {
                                            fileName: "[project]/app/statistics/page.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-black/60 mt-1",
                                            children: "When your Oracle trigger inserts alerts, we’ll display them here."
                                        }, void 0, false, {
                                            fileName: "[project]/app/statistics/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/statistics/page.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/statistics/page.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 text-xs text-black/50",
                                children: [
                                    "Next step: create n8n endpoint that returns alerts from ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        children: "alerts"
                                    }, void 0, false, {
                                        fileName: "[project]/app/statistics/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 69
                                    }, this),
                                    " table."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/statistics/page.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/statistics/page.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/statistics/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/statistics/page.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(StatisticsPage, "h3uRLGA6VLLopmv0799/WeJLdeI=");
_c = StatisticsPage;
var _c;
__turbopack_context__.k.register(_c, "StatisticsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_086d4aa9._.js.map