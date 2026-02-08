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
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    return `${s.firstName} ${s.lastName}`.trim();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/students/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StudentProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SectionTitle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const ABSENCE_ALERT_THRESHOLD = 5;
function Avatar({ name }) {
    _s();
    const initials = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Avatar.useMemo[initials]": ()=>{
            const parts = name.trim().split(/\s+/);
            const a = parts[0]?.[0] ?? "U";
            const b = parts[1]?.[0] ?? "";
            return (a + b).toUpperCase();
        }
    }["Avatar.useMemo[initials]"], [
        name
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-14 w-14 rounded-full bg-[#2e89c6]/10 border border-[#2e89c6]/25 flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm font-extrabold text-[#2e89c6]",
            children: initials
        }, void 0, false, {
            fileName: "[project]/app/students/[id]/page.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/students/[id]/page.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(Avatar, "xxHQaPT4nJB6M2qve+iilrjRPyw=");
_c = Avatar;
function ProgressBar({ label, value, max }) {
    const pct = max <= 0 ? 0 : Math.min(100, Math.round(value / max * 100));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded border border-black/10 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs font-extrabold text-black/70",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/app/students/[id]/page.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs font-extrabold text-black/80",
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/app/students/[id]/page.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/students/[id]/page.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 h-3 w-full rounded bg-black/10 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full rounded bg-[#2e89c6]",
                    style: {
                        width: `${pct}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/app/students/[id]/page.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/students/[id]/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 text-[11px] text-black/50",
                children: [
                    pct,
                    "%"
                ]
            }, void 0, true, {
                fileName: "[project]/app/students/[id]/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/students/[id]/page.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c1 = ProgressBar;
function StudentProfilePage() {
    _s1();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const studentId = Number(params?.id);
    const [student, setStudent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StudentProfilePage.useEffect": ()=>{
            if (!Number.isFinite(studentId)) return;
            ({
                "StudentProfilePage.useEffect": async ()=>{
                    setLoading(true);
                    setToast(null);
                    try {
                        const list = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchStudents"])();
                        const found = list.find({
                            "StudentProfilePage.useEffect": (s)=>s.studentId === studentId
                        }["StudentProfilePage.useEffect"]) ?? null;
                        setStudent(found);
                        if (!found) {
                            setToast({
                                type: "err",
                                msg: "Student not found."
                            });
                        }
                    } catch (e) {
                        setToast({
                            type: "err",
                            msg: e?.message ?? "Failed to load student"
                        });
                    } finally{
                        setLoading(false);
                    }
                }
            })["StudentProfilePage.useEffect"]();
        }
    }["StudentProfilePage.useEffect"], [
        studentId
    ]);
    const absences = student?.absenceCount ?? 0;
    const late = student?.lateCount ?? 0;
    const dayCheck = student?.dayCheck ?? 0;
    const isAlert = absences >= ABSENCE_ALERT_THRESHOLD;
    const daysLeft = Math.max(0, ABSENCE_ALERT_THRESHOLD - absences);
    // Prepare chart data (estimated weekly progression)
    const chartData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StudentProfilePage.useMemo[chartData]": ()=>{
            const estimatedPresent = Math.max(0, 20 - absences - late);
            const days = [
                'Mon',
                'Tue',
                'Wed',
                'Thu',
                'Fri',
                'Sat',
                'Sun'
            ];
            return days.map({
                "StudentProfilePage.useMemo[chartData]": (day, i)=>({
                        label: day,
                        absences: Math.round(absences / 7 * (i + 1)),
                        late: Math.round(late / 7 * (i + 1)),
                        present: Math.round(estimatedPresent / 7 * (i + 1))
                    })
            }["StudentProfilePage.useMemo[chartData]"]);
        }
    }["StudentProfilePage.useMemo[chartData]"], [
        absences,
        late
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Student Profile",
                subtitle: "Attendance statistics and alert status."
            }, void 0, false, {
                fileName: "[project]/app/students/[id]/page.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            toast ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    type: toast.type,
                    msg: toast.msg
                }, void 0, false, {
                    fileName: "[project]/app/students/[id]/page.tsx",
                    lineNumber: 117,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/students/[id]/page.tsx",
                lineNumber: 116,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/students",
                    className: "text-sm font-extrabold text-[#2e89c6] hover:underline",
                    children: "← Back to Students"
                }, void 0, false, {
                    fileName: "[project]/app/students/[id]/page.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/students/[id]/page.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded bg-white shadow-soft p-6 text-black/60",
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/app/students/[id]/page.tsx",
                lineNumber: 131,
                columnNumber: 9
            }, this) : !student ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded bg-white shadow-soft p-6 text-black/60",
                children: "No data."
            }, void 0, false, {
                fileName: "[project]/app/students/[id]/page.tsx",
                lineNumber: 135,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 lg:grid-cols-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-4 rounded bg-white shadow-soft p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatar, {
                                        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullName"])(student)
                                    }, void 0, false, {
                                        fileName: "[project]/app/students/[id]/page.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "truncate text-lg font-extrabold",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullName"])(student)
                                            }, void 0, false, {
                                                fileName: "[project]/app/students/[id]/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "truncate text-sm text-black/60",
                                                children: student.email ?? "-"
                                            }, void 0, false, {
                                                fileName: "[project]/app/students/[id]/page.tsx",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/students/[id]/page.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/students/[id]/page.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 grid gap-2 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between rounded bg-black/5 px-3 py-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-black/70 font-bold",
                                                children: "Absences"
                                            }, void 0, false, {
                                                fileName: "[project]/app/students/[id]/page.tsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-extrabold",
                                                children: absences
                                            }, void 0, false, {
                                                fileName: "[project]/app/students/[id]/page.tsx",
                                                lineNumber: 157,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/students/[id]/page.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between rounded bg-black/5 px-3 py-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-black/70 font-bold",
                                                children: "Late"
                                            }, void 0, false, {
                                                fileName: "[project]/app/students/[id]/page.tsx",
                                                lineNumber: 160,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-extrabold",
                                                children: late
                                            }, void 0, false, {
                                                fileName: "[project]/app/students/[id]/page.tsx",
                                                lineNumber: 161,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/students/[id]/page.tsx",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between rounded bg-black/5 px-3 py-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-black/70 font-bold",
                                                children: "Marked today"
                                            }, void 0, false, {
                                                fileName: "[project]/app/students/[id]/page.tsx",
                                                lineNumber: 164,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-extrabold",
                                                children: dayCheck === 1 ? "Yes" : "No"
                                            }, void 0, false, {
                                                fileName: "[project]/app/students/[id]/page.tsx",
                                                lineNumber: 165,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/students/[id]/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/students/[id]/page.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 rounded border border-black/10 p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-extrabold text-black/70",
                                        children: "Alert threshold"
                                    }, void 0, false, {
                                        fileName: "[project]/app/students/[id]/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 text-sm text-black/70",
                                        children: [
                                            "Alert at",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-extrabold",
                                                children: ABSENCE_ALERT_THRESHOLD
                                            }, void 0, false, {
                                                fileName: "[project]/app/students/[id]/page.tsx",
                                                lineNumber: 178,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            "absences"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/students/[id]/page.tsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, this),
                                    !isAlert ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 rounded bg-emerald-50 border border-emerald-600/20 p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-extrabold text-emerald-700",
                                                children: "OK"
                                            }, void 0, false, {
                                                fileName: "[project]/app/students/[id]/page.tsx",
                                                lineNumber: 184,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-emerald-800",
                                                children: [
                                                    daysLeft,
                                                    " day(s) left until alert."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/students/[id]/page.tsx",
                                                lineNumber: 187,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/students/[id]/page.tsx",
                                        lineNumber: 183,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 rounded bg-red-50 border border-red-600/20 p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-extrabold text-red-700",
                                                children: "ALERT"
                                            }, void 0, false, {
                                                fileName: "[project]/app/students/[id]/page.tsx",
                                                lineNumber: 193,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-red-800",
                                                children: [
                                                    "Student has reached the absence limit (≥",
                                                    " ",
                                                    ABSENCE_ALERT_THRESHOLD,
                                                    ")."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/students/[id]/page.tsx",
                                                lineNumber: 196,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/students/[id]/page.tsx",
                                        lineNumber: 192,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/students/[id]/page.tsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/students/[id]/page.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-8 rounded bg-white shadow-soft p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-extrabold",
                                                children: "Statistics"
                                            }, void 0, false, {
                                                fileName: "[project]/app/students/[id]/page.tsx",
                                                lineNumber: 209,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-black/60",
                                                children: "Simple graph based on stored counters"
                                            }, void 0, false, {
                                                fileName: "[project]/app/students/[id]/page.tsx",
                                                lineNumber: 210,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/students/[id]/page.tsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this),
                                    isAlert ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded bg-red-50 border border-red-600/20 px-3 py-2 text-xs font-extrabold text-red-700",
                                        children: "ALERT STAGE"
                                    }, void 0, false, {
                                        fileName: "[project]/app/students/[id]/page.tsx",
                                        lineNumber: 216,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded bg-emerald-50 border border-emerald-600/20 px-3 py-2 text-xs font-extrabold text-emerald-700",
                                        children: "NORMAL"
                                    }, void 0, false, {
                                        fileName: "[project]/app/students/[id]/page.tsx",
                                        lineNumber: 220,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/students/[id]/page.tsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 grid gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded border border-black/10 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm font-extrabold",
                                                                children: "Attendance Trend"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/students/[id]/page.tsx",
                                                                lineNumber: 231,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-black/60",
                                                                children: "Estimated weekly progression"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/students/[id]/page.tsx",
                                                                lineNumber: 232,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/students/[id]/page.tsx",
                                                        lineNumber: 230,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-3 text-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-3 h-3 rounded bg-green-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/students/[id]/page.tsx",
                                                                        lineNumber: 238,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-bold text-green-700",
                                                                        children: "Present"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/students/[id]/page.tsx",
                                                                        lineNumber: 239,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/students/[id]/page.tsx",
                                                                lineNumber: 237,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-3 h-3 rounded bg-yellow-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/students/[id]/page.tsx",
                                                                        lineNumber: 242,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-bold text-yellow-700",
                                                                        children: "Late"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/students/[id]/page.tsx",
                                                                        lineNumber: 243,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/students/[id]/page.tsx",
                                                                lineNumber: 241,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-3 h-3 rounded bg-red-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/students/[id]/page.tsx",
                                                                        lineNumber: 246,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-bold text-red-700",
                                                                        children: "Absent"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/students/[id]/page.tsx",
                                                                        lineNumber: 247,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/students/[id]/page.tsx",
                                                                lineNumber: 245,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/students/[id]/page.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/students/[id]/page.tsx",
                                                lineNumber: 229,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StudentAreaChart, {
                                                absences: absences,
                                                late: late
                                            }, void 0, false, {
                                                fileName: "[project]/app/students/[id]/page.tsx",
                                                lineNumber: 252,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/students/[id]/page.tsx",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-6 md:grid-cols-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressBar, {
                                                label: "Absence Progress (towards alert)",
                                                value: absences,
                                                max: ABSENCE_ALERT_THRESHOLD
                                            }, void 0, false, {
                                                fileName: "[project]/app/students/[id]/page.tsx",
                                                lineNumber: 256,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressBar, {
                                                label: "Late Progress (simple scale)",
                                                value: late,
                                                max: 10
                                            }, void 0, false, {
                                                fileName: "[project]/app/students/[id]/page.tsx",
                                                lineNumber: 262,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/students/[id]/page.tsx",
                                        lineNumber: 255,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded border border-black/10 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-extrabold",
                                                children: "How alerts work"
                                            }, void 0, false, {
                                                fileName: "[project]/app/students/[id]/page.tsx",
                                                lineNumber: 270,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 text-sm text-black/70",
                                                children: [
                                                    "Rule: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-extrabold",
                                                        children: "absences ≥ 5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/students/[id]/page.tsx",
                                                        lineNumber: 272,
                                                        columnNumber: 25
                                                    }, this),
                                                    " ",
                                                    "triggers an alert."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/students/[id]/page.tsx",
                                                lineNumber: 271,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 text-sm text-black/60",
                                                children: "Chart shows estimated daily progression based on current totals."
                                            }, void 0, false, {
                                                fileName: "[project]/app/students/[id]/page.tsx",
                                                lineNumber: 275,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/students/[id]/page.tsx",
                                        lineNumber: 269,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/students/[id]/page.tsx",
                                lineNumber: 226,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/students/[id]/page.tsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/students/[id]/page.tsx",
                lineNumber: 139,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/students/[id]/page.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_s1(StudentProfilePage, "GZbHpANxTdSKtMXm/2M1YA65fyY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c2 = StudentProfilePage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Avatar");
__turbopack_context__.k.register(_c1, "ProgressBar");
__turbopack_context__.k.register(_c2, "StudentProfilePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_d11cab7a._.js.map