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
"[project]/components/Card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Card({ title, subtitle, children, className = "", actions }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `rounded bg-white shadow-soft overflow-hidden ${className}`,
        children: [
            (title || subtitle || actions) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-black/5 p-4 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-extrabold",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/Card.tsx",
                                lineNumber: 19,
                                columnNumber: 23
                            }, this),
                            subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-black/60 mt-1",
                                children: subtitle
                            }, void 0, false, {
                                fileName: "[project]/components/Card.tsx",
                                lineNumber: 20,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Card.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this),
                    actions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: actions
                    }, void 0, false, {
                        fileName: "[project]/components/Card.tsx",
                        lineNumber: 22,
                        columnNumber: 23
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Card.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/Card.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Card.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/EmptyState.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EmptyState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function EmptyState({ message, action }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-12 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "mx-auto h-12 w-12 text-black/20",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                }, void 0, false, {
                    fileName: "[project]/components/EmptyState.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/EmptyState.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-sm text-black/60",
                children: message
            }, void 0, false, {
                fileName: "[project]/components/EmptyState.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            action && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: action
            }, void 0, false, {
                fileName: "[project]/components/EmptyState.tsx",
                lineNumber: 24,
                columnNumber: 18
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/EmptyState.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = EmptyState;
var _c;
__turbopack_context__.k.register(_c, "EmptyState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/LoadingSpinner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoadingSpinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function LoadingSpinner({ size = "md" }) {
    const sizeClasses = {
        sm: "h-4 w-4 border-2",
        md: "h-8 w-8 border-2",
        lg: "h-12 w-12 border-4"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `animate-spin rounded-full border-black/10 border-t-[#2e89c6] ${sizeClasses[size]}`
        }, void 0, false, {
            fileName: "[project]/components/LoadingSpinner.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/LoadingSpinner.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = LoadingSpinner;
var _c;
__turbopack_context__.k.register(_c, "LoadingSpinner");
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
"[project]/components/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Button({ children, onClick, variant = "primary", size = "md", disabled = false, type = "button", className = "" }) {
    const variantClasses = {
        primary: "bg-[#2e89c6] text-white hover:bg-[#2e89c6]/90",
        secondary: "bg-black/5 text-black hover:bg-black/10",
        danger: "bg-red-600 text-white hover:bg-red-700",
        success: "bg-green-600 text-white hover:bg-green-700",
        warning: "bg-yellow-600 text-white hover:bg-yellow-700"
    };
    const sizeClasses = {
        sm: "px-3 py-1.5 text-xs",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        onClick: onClick,
        disabled: disabled,
        className: `rounded font-extrabold transition disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Button.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Input({ label, value, onChange, type = "text", placeholder, required = false, disabled = false, error }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-xs font-bold text-black/70 mb-2",
                children: [
                    label,
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-red-600 ml-1",
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/components/Input.tsx",
                        lineNumber: 27,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Input.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: type,
                value: value,
                onChange: (e)=>onChange(e.target.value),
                placeholder: placeholder,
                required: required,
                disabled: disabled,
                className: `w-full rounded border px-3 py-2 text-sm transition ${error ? "border-red-600 focus:border-red-600 focus:ring-2 focus:ring-red-600/20" : "border-black/10 focus:border-[#2e89c6] focus:ring-2 focus:ring-[#2e89c6]/20"} disabled:bg-black/5 disabled:cursor-not-allowed outline-none`
            }, void 0, false, {
                fileName: "[project]/components/Input.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-xs text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/Input.tsx",
                lineNumber: 43,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Input.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = Input;
var _c;
__turbopack_context__.k.register(_c, "Input");
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
"[project]/app/reports/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReportsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SectionTitle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/EmptyState.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingSpinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/LoadingSpinner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function ReportsPage() {
    _s();
    const [activeReport, setActiveReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("monthly");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Monthly Report
    const [monthlyData, setMonthlyData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [monthFilter, setMonthFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Semester KPIs
    const [semesterData, setSemesterData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Risk Assessment
    const [riskData, setRiskData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    async function loadReport() {
        setLoading(true);
        setToast(null);
        try {
            if (activeReport === "monthly") {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchMonthlyReport"])(monthFilter ? {
                    month: monthFilter
                } : undefined);
                setMonthlyData(data);
            } else if (activeReport === "semester") {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchSemesterKpis"])();
                setSemesterData(data);
            } else if (activeReport === "risk") {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchRiskAssessment"])();
                setRiskData(data);
            }
        } catch (e) {
            setToast({
                type: "err",
                msg: e?.message ?? `Failed to load ${activeReport} report`
            });
        } finally{
            setLoading(false);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReportsPage.useEffect": ()=>{
            loadReport();
        }
    }["ReportsPage.useEffect"], [
        activeReport
    ]);
    function exportToCSV(data, filename) {
        if (data.length === 0) {
            setToast({
                type: "err",
                msg: "No data to export"
            });
            return;
        }
        const headers = Object.keys(data[0]);
        const csvContent = [
            headers.join(","),
            ...data.map((row)=>headers.map((h)=>JSON.stringify(row[h] ?? "")).join(","))
        ].join("\n");
        const blob = new Blob([
            csvContent
        ], {
            type: "text/csv"
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${filename}-${new Date().toISOString().split("T")[0]}.csv`;
        link.click();
        URL.revokeObjectURL(url);
        setToast({
            type: "ok",
            msg: "CSV exported successfully"
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Reports",
                subtitle: "Generate and export detailed analytics reports."
            }, void 0, false, {
                fileName: "[project]/app/reports/page.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    type: toast.type,
                    msg: toast.msg
                }, void 0, false, {
                    fileName: "[project]/app/reports/page.tsx",
                    lineNumber: 96,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/reports/page.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 mb-6 border-b border-black/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveReport("monthly"),
                        className: `px-4 py-2 font-bold text-sm transition ${activeReport === "monthly" ? "border-b-2 border-[#2e89c6] text-[#2e89c6]" : "text-black/60 hover:text-black"}`,
                        children: "Monthly Report"
                    }, void 0, false, {
                        fileName: "[project]/app/reports/page.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveReport("semester"),
                        className: `px-4 py-2 font-bold text-sm transition ${activeReport === "semester" ? "border-b-2 border-[#2e89c6] text-[#2e89c6]" : "text-black/60 hover:text-black"}`,
                        children: "Semester KPIs"
                    }, void 0, false, {
                        fileName: "[project]/app/reports/page.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveReport("risk"),
                        className: `px-4 py-2 font-bold text-sm transition ${activeReport === "risk" ? "border-b-2 border-[#2e89c6] text-[#2e89c6]" : "text-black/60 hover:text-black"}`,
                        children: "Risk Assessment"
                    }, void 0, false, {
                        fileName: "[project]/app/reports/page.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/reports/page.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            activeReport === "monthly" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "Filters & Export",
                        className: "mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-4 items-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-[200px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Month (YYYY-MM)",
                                        type: "text",
                                        value: monthFilter,
                                        onChange: setMonthFilter,
                                        placeholder: "e.g., 2026-02"
                                    }, void 0, false, {
                                        fileName: "[project]/app/reports/page.tsx",
                                        lineNumber: 140,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/reports/page.tsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: loadReport,
                                    variant: "secondary",
                                    children: "Apply Filter"
                                }, void 0, false, {
                                    fileName: "[project]/app/reports/page.tsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: ()=>exportToCSV(monthlyData, "monthly-report"),
                                    variant: "primary",
                                    disabled: monthlyData.length === 0,
                                    children: "Export CSV"
                                }, void 0, false, {
                                    fileName: "[project]/app/reports/page.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/reports/page.tsx",
                            lineNumber: 138,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/reports/page.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingSpinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/reports/page.tsx",
                        lineNumber: 162,
                        columnNumber: 13
                    }, this) : monthlyData.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            message: "No monthly report data available."
                        }, void 0, false, {
                            fileName: "[project]/app/reports/page.tsx",
                            lineNumber: 165,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/reports/page.tsx",
                        lineNumber: 164,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: `Monthly Report ${monthFilter ? `(${monthFilter})` : ""}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
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
                                                    children: "Student"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reports/page.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-3 font-extrabold",
                                                    children: "Month"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reports/page.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-3 font-extrabold",
                                                    children: "Total Classes"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reports/page.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-3 font-extrabold",
                                                    children: "Present"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reports/page.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-3 font-extrabold",
                                                    children: "Absent"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reports/page.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-3 font-extrabold",
                                                    children: "Late"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reports/page.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-3 font-extrabold",
                                                    children: "Attendance Rate"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reports/page.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-3 font-extrabold",
                                                    children: "Avg Minutes Late"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reports/page.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/reports/page.tsx",
                                            lineNumber: 172,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/reports/page.tsx",
                                        lineNumber: 171,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: monthlyData.map((row, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "border-t border-black/5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3 font-semibold",
                                                        children: row.fullName
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/reports/page.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3 text-black/70",
                                                        children: row.monthName
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/reports/page.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3",
                                                        children: row.totalDays
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/reports/page.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3 text-green-700 font-semibold",
                                                        children: row.daysPresent
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/reports/page.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3 text-red-700 font-semibold",
                                                        children: row.daysAbsent
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/reports/page.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3 text-yellow-700 font-semibold",
                                                        children: row.daysLate
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/reports/page.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `rounded px-2 py-1 text-xs font-bold ${row.attendanceRate >= 90 ? "bg-green-100 text-green-700" : row.attendanceRate >= 75 ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"}`,
                                                            children: [
                                                                row.attendanceRate.toFixed(1),
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/reports/page.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/reports/page.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3 text-black/70",
                                                        children: row.avgMinutesLate.toFixed(1)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/reports/page.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/app/reports/page.tsx",
                                                lineNumber: 185,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/reports/page.tsx",
                                        lineNumber: 183,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/reports/page.tsx",
                                lineNumber: 170,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/reports/page.tsx",
                            lineNumber: 169,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/reports/page.tsx",
                        lineNumber: 168,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true),
            activeReport === "semester" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "Export",
                        className: "mb-6",
                        actions: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onClick: ()=>exportToCSV(semesterData, "semester-kpis"),
                            variant: "primary",
                            size: "sm",
                            disabled: semesterData.length === 0,
                            children: "Export CSV"
                        }, void 0, false, {
                            fileName: "[project]/app/reports/page.tsx",
                            lineNumber: 223,
                            columnNumber: 15
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/app/reports/page.tsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingSpinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/reports/page.tsx",
                        lineNumber: 235,
                        columnNumber: 13
                    }, this) : semesterData.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            message: "No semester KPI data available."
                        }, void 0, false, {
                            fileName: "[project]/app/reports/page.tsx",
                            lineNumber: 238,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/reports/page.tsx",
                        lineNumber: 237,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: semesterData.map((semester, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                title: `Semester: ${semester.semester}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-4 md:grid-cols-2 lg:grid-cols-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded bg-blue-50 border border-blue-200 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs font-semibold text-blue-700 opacity-80",
                                                    children: "Total Students"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reports/page.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1 text-2xl font-extrabold text-blue-700",
                                                    children: semester.totalStudents
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reports/page.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/reports/page.tsx",
                                            lineNumber: 245,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded bg-purple-50 border border-purple-200 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs font-semibold text-purple-700 opacity-80",
                                                    children: "Total Classes"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reports/page.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1 text-2xl font-extrabold text-purple-700",
                                                    children: semester.totalClasses
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reports/page.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/reports/page.tsx",
                                            lineNumber: 253,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded bg-green-50 border border-green-200 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs font-semibold text-green-700 opacity-80",
                                                    children: "Avg Attendance Rate"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reports/page.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1 text-2xl font-extrabold text-green-700",
                                                    children: [
                                                        semester.avgAttendanceRate.toFixed(1),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/reports/page.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/reports/page.tsx",
                                            lineNumber: 261,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded bg-yellow-50 border border-yellow-200 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs font-semibold text-yellow-700 opacity-80",
                                                    children: "At-Risk Students"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reports/page.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1 text-2xl font-extrabold text-yellow-700",
                                                    children: semester.atRiskStudents
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reports/page.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/reports/page.tsx",
                                            lineNumber: 269,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded bg-red-50 border border-red-200 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs font-semibold text-red-700 opacity-80",
                                                    children: "Students with Alerts"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reports/page.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1 text-2xl font-extrabold text-red-700",
                                                    children: semester.studentsWithAlerts
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reports/page.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/reports/page.tsx",
                                            lineNumber: 277,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/reports/page.tsx",
                                    lineNumber: 244,
                                    columnNumber: 19
                                }, this)
                            }, idx, false, {
                                fileName: "[project]/app/reports/page.tsx",
                                lineNumber: 243,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/reports/page.tsx",
                        lineNumber: 241,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true),
            activeReport === "risk" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "Export",
                        className: "mb-6",
                        actions: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onClick: ()=>exportToCSV(riskData, "risk-assessment"),
                            variant: "primary",
                            size: "sm",
                            disabled: riskData.length === 0,
                            children: "Export CSV"
                        }, void 0, false, {
                            fileName: "[project]/app/reports/page.tsx",
                            lineNumber: 300,
                            columnNumber: 15
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/app/reports/page.tsx",
                        lineNumber: 296,
                        columnNumber: 11
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingSpinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/reports/page.tsx",
                        lineNumber: 312,
                        columnNumber: 13
                    }, this) : riskData.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            message: "No risk assessment data available."
                        }, void 0, false, {
                            fileName: "[project]/app/reports/page.tsx",
                            lineNumber: 315,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/reports/page.tsx",
                        lineNumber: 314,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "Risk Assessment",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
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
                                                    children: "Student"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reports/page.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-3 font-extrabold",
                                                    children: "Risk Level"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reports/page.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-3 font-extrabold",
                                                    children: "Absences"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reports/page.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-3 font-extrabold",
                                                    children: "Late Count"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reports/page.tsx",
                                                    lineNumber: 326,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-3 font-extrabold",
                                                    children: "Anomalies"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reports/page.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-3 font-extrabold",
                                                    children: "Active Alerts"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reports/page.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/reports/page.tsx",
                                            lineNumber: 322,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/reports/page.tsx",
                                        lineNumber: 321,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: riskData.sort((a, b)=>{
                                            const order = {
                                                HIGH: 0,
                                                MEDIUM: 1,
                                                LOW: 2
                                            };
                                            return (order[a.riskLevel] ?? 3) - (order[b.riskLevel] ?? 3);
                                        }).map((row, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "border-t border-black/5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3 font-semibold",
                                                        children: row.studentName
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/reports/page.tsx",
                                                        lineNumber: 342,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `rounded px-2 py-1 text-xs font-bold ${row.riskLevel === "HIGH" ? "bg-red-100 text-red-700" : row.riskLevel === "MEDIUM" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`,
                                                            children: row.riskLevel
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/reports/page.tsx",
                                                            lineNumber: 344,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/reports/page.tsx",
                                                        lineNumber: 343,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3 text-red-700 font-semibold",
                                                        children: row.absenceCount
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/reports/page.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3 text-yellow-700 font-semibold",
                                                        children: row.lateCount
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/reports/page.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3",
                                                        children: row.detectedAnomalies
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/reports/page.tsx",
                                                        lineNumber: 358,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3",
                                                        children: row.activeAlerts
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/reports/page.tsx",
                                                        lineNumber: 359,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/app/reports/page.tsx",
                                                lineNumber: 341,
                                                columnNumber: 25
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/reports/page.tsx",
                                        lineNumber: 331,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/reports/page.tsx",
                                lineNumber: 320,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/reports/page.tsx",
                            lineNumber: 319,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/reports/page.tsx",
                        lineNumber: 318,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/app/reports/page.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_s(ReportsPage, "6GCYPK1cXlOLce7aiM1Rx0iPjpQ=");
_c = ReportsPage;
var _c;
__turbopack_context__.k.register(_c, "ReportsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_d599c6e2._.js.map