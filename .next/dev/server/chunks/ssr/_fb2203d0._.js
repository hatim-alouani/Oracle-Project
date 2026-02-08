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
"[project]/components/AreaChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AreaChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function AreaChart({ data, height = 300, width = 800 }) {
    if (data.length === 0) return null;
    const maxValue = Math.max(...data.map((d)=>Math.max(d.absences, d.late, d.present)), 1);
    const padding = 50;
    const chartWidth = width - 2 * padding;
    const chartHeight = height - 2 * padding;
    const xStep = chartWidth / (data.length - 1 || 1);
    const getY = (value)=>padding + chartHeight - value / maxValue * chartHeight;
    // Create paths for area fills
    const createAreaPath = (values)=>{
        const linePath = values.map((val, i)=>`${i === 0 ? 'M' : 'L'} ${padding + i * xStep} ${getY(val)}`).join(' ');
        const bottomPath = `L ${padding + (values.length - 1) * xStep} ${padding + chartHeight} L ${padding} ${padding + chartHeight} Z`;
        return linePath + ' ' + bottomPath;
    };
    const absencesArea = createAreaPath(data.map((d)=>d.absences));
    const lateArea = createAreaPath(data.map((d)=>d.late));
    const presentArea = createAreaPath(data.map((d)=>d.present));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: `0 0 ${width} ${height}`,
            className: "w-full",
            style: {
                maxWidth: `${width}px`
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "absencesGradient",
                            x1: "0",
                            x2: "0",
                            y1: "0",
                            y2: "1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: "#ef4444",
                                    stopOpacity: "0.3"
                                }, void 0, false, {
                                    fileName: "[project]/components/AreaChart.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: "#ef4444",
                                    stopOpacity: "0.05"
                                }, void 0, false, {
                                    fileName: "[project]/components/AreaChart.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AreaChart.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "lateGradient",
                            x1: "0",
                            x2: "0",
                            y1: "0",
                            y2: "1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: "#f59e0b",
                                    stopOpacity: "0.3"
                                }, void 0, false, {
                                    fileName: "[project]/components/AreaChart.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: "#f59e0b",
                                    stopOpacity: "0.05"
                                }, void 0, false, {
                                    fileName: "[project]/components/AreaChart.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AreaChart.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "presentGradient",
                            x1: "0",
                            x2: "0",
                            y1: "0",
                            y2: "1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: "#10b981",
                                    stopOpacity: "0.3"
                                }, void 0, false, {
                                    fileName: "[project]/components/AreaChart.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: "#10b981",
                                    stopOpacity: "0.05"
                                }, void 0, false, {
                                    fileName: "[project]/components/AreaChart.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AreaChart.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AreaChart.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                [
                    0,
                    0.25,
                    0.5,
                    0.75,
                    1
                ].map((fraction)=>{
                    const y = padding + chartHeight * (1 - fraction);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: padding,
                                y1: y,
                                x2: width - padding,
                                y2: y,
                                stroke: "#e5e7eb",
                                strokeWidth: "1"
                            }, void 0, false, {
                                fileName: "[project]/components/AreaChart.tsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: padding - 10,
                                y: y + 4,
                                textAnchor: "end",
                                fontSize: "12",
                                fill: "#6b7280",
                                children: Math.round(maxValue * fraction)
                            }, void 0, false, {
                                fileName: "[project]/components/AreaChart.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this)
                        ]
                    }, fraction, true, {
                        fileName: "[project]/components/AreaChart.tsx",
                        lineNumber: 56,
                        columnNumber: 13
                    }, this);
                }),
                data.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: padding + i * xStep,
                        y: height - padding + 20,
                        textAnchor: "middle",
                        fontSize: "10",
                        fill: "#6b7280",
                        children: d.label
                    }, i, false, {
                        fileName: "[project]/components/AreaChart.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: presentArea,
                    fill: "url(#presentGradient)"
                }, void 0, false, {
                    fileName: "[project]/components/AreaChart.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: lateArea,
                    fill: "url(#lateGradient)"
                }, void 0, false, {
                    fileName: "[project]/components/AreaChart.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: absencesArea,
                    fill: "url(#absencesGradient)"
                }, void 0, false, {
                    fileName: "[project]/components/AreaChart.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: data.map((d, i)=>`${i === 0 ? 'M' : 'L'} ${padding + i * xStep} ${getY(d.present)}`).join(' '),
                    fill: "none",
                    stroke: "#10b981",
                    strokeWidth: "2.5"
                }, void 0, false, {
                    fileName: "[project]/components/AreaChart.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: data.map((d, i)=>`${i === 0 ? 'M' : 'L'} ${padding + i * xStep} ${getY(d.late)}`).join(' '),
                    fill: "none",
                    stroke: "#f59e0b",
                    strokeWidth: "2.5"
                }, void 0, false, {
                    fileName: "[project]/components/AreaChart.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: data.map((d, i)=>`${i === 0 ? 'M' : 'L'} ${padding + i * xStep} ${getY(d.absences)}`).join(' '),
                    fill: "none",
                    stroke: "#ef4444",
                    strokeWidth: "2.5"
                }, void 0, false, {
                    fileName: "[project]/components/AreaChart.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this),
                data.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: padding + i * xStep,
                                cy: getY(d.present),
                                r: "4",
                                fill: "#10b981",
                                stroke: "white",
                                strokeWidth: "2"
                            }, void 0, false, {
                                fileName: "[project]/components/AreaChart.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: padding + i * xStep,
                                cy: getY(d.late),
                                r: "4",
                                fill: "#f59e0b",
                                stroke: "white",
                                strokeWidth: "2"
                            }, void 0, false, {
                                fileName: "[project]/components/AreaChart.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: padding + i * xStep,
                                cy: getY(d.absences),
                                r: "4",
                                fill: "#ef4444",
                                stroke: "white",
                                strokeWidth: "2"
                            }, void 0, false, {
                                fileName: "[project]/components/AreaChart.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/components/AreaChart.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/components/AreaChart.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/AreaChart.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/mappers.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "removeStudent",
    ()=>removeStudent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mappers.ts [app-ssr] (ecmascript)");
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapArray"])(data, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapStudent"], [
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapArray"])(data, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapClass"], [
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapArray"])(data, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapAlert"], [
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapArray"])(data, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapAlert"], [
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapArray"])(data, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapAnomaly"], [
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
        const recentAnomalies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapArray"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pickFirst"])(data, [
            "recentAnomalies",
            "recent_anomalies",
            "RECENT_ANOMALIES",
            "anomalies"
        ]) || [], __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapAnomaly"]);
        return {
            totalStudents: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNumberSafe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pickFirst"])(data, [
                "totalStudents",
                "total_students",
                "TOTAL_STUDENTS",
                "TotalStudents"
            ]), 0),
            activeAlerts: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNumberSafe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pickFirst"])(data, [
                "activeAlerts",
                "active_alerts",
                "ACTIVE_ALERTS",
                "ActiveAlerts"
            ]), 0),
            atRiskStudents: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNumberSafe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pickFirst"])(data, [
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapArray"])(data, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapStudentRisk"], [
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapArray"])(data, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapSemesterKpi"], [
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapArray"])(data, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapMonthlyAttendance"], [
            "data",
            "result",
            "rows"
        ]);
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
    return `${s.firstName} ${s.lastName}`.trim();
}
}),
"[project]/app/statistics/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatisticsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SectionTitle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toast.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AreaChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AreaChart.tsx [app-ssr] (ecmascript)");
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
function StatisticsPage() {
    const [students, setStudents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [alerts, setAlerts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (async ()=>{
            try {
                const [studentList, alertList] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchStudents"])(),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchAlerts"])()
                ]);
                setStudents(studentList);
                setAlerts(alertList);
            } catch (e) {
                setToast({
                    type: "err",
                    msg: e?.message ?? "Failed to load data"
                });
            }
        })();
    }, []);
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const totalStudents = students.length;
        const totalAbsences = students.reduce((sum, s)=>sum + (s.absenceCount ?? 0), 0);
        const totalLate = students.reduce((sum, s)=>sum + (s.lateCount ?? 0), 0);
        const alertCount = students.filter((s)=>(s.absenceCount ?? 0) >= 5).length;
        // Calculate estimated total days (absences + late = days with issues, assume 20 days per student)
        const estimatedTotalDays = totalStudents * 20;
        const totalIssues = totalAbsences + totalLate;
        const estimatedPresent = Math.max(0, estimatedTotalDays - totalIssues);
        const attendanceRate = estimatedTotalDays > 0 ? (estimatedPresent / estimatedTotalDays * 100).toFixed(1) : "0.0";
        return {
            totalStudents,
            totalAbsences,
            totalLate,
            alertCount,
            estimatedPresent,
            attendanceRate
        };
    }, [
        students
    ]);
    const chartData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        // Prepare data for each student
        return students.slice(0, 10).map((s)=>({
                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fullName"])(s).split(' ')[0] || 'Student',
                absences: s.absenceCount ?? 0,
                late: s.lateCount ?? 0,
                present: Math.max(0, 20 - (s.absenceCount ?? 0) - (s.lateCount ?? 0))
            }));
    }, [
        students
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: "Statistics & Analytics",
                subtitle: "Overall attendance metrics and trends based on student records."
            }, void 0, false, {
                fileName: "[project]/app/statistics/page.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            toast ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    type: toast.type,
                    msg: toast.msg
                }, void 0, false, {
                    fileName: "[project]/app/statistics/page.tsx",
                    lineNumber: 74,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/statistics/page.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded bg-white shadow-soft p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs font-bold text-black/60",
                                children: "Total Students"
                            }, void 0, false, {
                                fileName: "[project]/app/statistics/page.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-3xl font-extrabold text-[#2e89c6] mt-2",
                                children: stats.totalStudents
                            }, void 0, false, {
                                fileName: "[project]/app/statistics/page.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/statistics/page.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded bg-white shadow-soft p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs font-bold text-black/60",
                                children: "Total Absences"
                            }, void 0, false, {
                                fileName: "[project]/app/statistics/page.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-3xl font-extrabold text-red-600 mt-2",
                                children: stats.totalAbsences
                            }, void 0, false, {
                                fileName: "[project]/app/statistics/page.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/statistics/page.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded bg-white shadow-soft p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs font-bold text-black/60",
                                children: "Total Late"
                            }, void 0, false, {
                                fileName: "[project]/app/statistics/page.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-3xl font-extrabold text-yellow-600 mt-2",
                                children: stats.totalLate
                            }, void 0, false, {
                                fileName: "[project]/app/statistics/page.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/statistics/page.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded bg-white shadow-soft p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs font-bold text-black/60",
                                children: "Students with Alerts"
                            }, void 0, false, {
                                fileName: "[project]/app/statistics/page.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-3xl font-extrabold text-orange-600 mt-2",
                                children: stats.alertCount
                            }, void 0, false, {
                                fileName: "[project]/app/statistics/page.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-black/50 mt-1",
                                children: "≥5 absences"
                            }, void 0, false, {
                                fileName: "[project]/app/statistics/page.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/statistics/page.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/statistics/page.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded bg-white shadow-soft p-6 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-extrabold",
                                        children: "Overall Attendance Rate"
                                    }, void 0, false, {
                                        fileName: "[project]/app/statistics/page.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-black/60 mt-1",
                                        children: "Estimated based on 20 days per student"
                                    }, void 0, false, {
                                        fileName: "[project]/app/statistics/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/statistics/page.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-4xl font-extrabold text-green-600",
                                children: [
                                    stats.attendanceRate,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/statistics/page.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/statistics/page.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-3 sm:grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded bg-green-50 border border-green-200 p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-bold text-green-700",
                                        children: "Estimated Present"
                                    }, void 0, false, {
                                        fileName: "[project]/app/statistics/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xl font-extrabold text-green-800 mt-1",
                                        children: stats.estimatedPresent
                                    }, void 0, false, {
                                        fileName: "[project]/app/statistics/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/statistics/page.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded bg-red-50 border border-red-200 p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-bold text-red-700",
                                        children: "Absences"
                                    }, void 0, false, {
                                        fileName: "[project]/app/statistics/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xl font-extrabold text-red-800 mt-1",
                                        children: stats.totalAbsences
                                    }, void 0, false, {
                                        fileName: "[project]/app/statistics/page.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/statistics/page.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded bg-yellow-50 border border-yellow-200 p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-bold text-yellow-700",
                                        children: "Late Arrivals"
                                    }, void 0, false, {
                                        fileName: "[project]/app/statistics/page.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xl font-extrabold text-yellow-800 mt-1",
                                        children: stats.totalLate
                                    }, void 0, false, {
                                        fileName: "[project]/app/statistics/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/statistics/page.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/statistics/page.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/statistics/page.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded bg-white shadow-soft p-6 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-extrabold mb-2",
                        children: "Attendance Trends (First 10 Students)"
                    }, void 0, false, {
                        fileName: "[project]/app/statistics/page.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-black/60 mb-4",
                        children: "Comparing absences, late arrivals, and estimated present days per student"
                    }, void 0, false, {
                        fileName: "[project]/app/statistics/page.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-4 mb-6 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-4 h-4 rounded bg-red-500"
                                    }, void 0, false, {
                                        fileName: "[project]/app/statistics/page.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-red-700",
                                        children: "Absences"
                                    }, void 0, false, {
                                        fileName: "[project]/app/statistics/page.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/statistics/page.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-4 h-4 rounded bg-yellow-500"
                                    }, void 0, false, {
                                        fileName: "[project]/app/statistics/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-yellow-700",
                                        children: "Late"
                                    }, void 0, false, {
                                        fileName: "[project]/app/statistics/page.tsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/statistics/page.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-4 h-4 rounded bg-green-500"
                                    }, void 0, false, {
                                        fileName: "[project]/app/statistics/page.tsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-green-700",
                                        children: "Present (Est.)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/statistics/page.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/statistics/page.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/statistics/page.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    students.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AreaChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        data: chartData
                    }, void 0, false, {
                        fileName: "[project]/app/statistics/page.tsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-black/60 py-8",
                        children: "No student data available"
                    }, void 0, false, {
                        fileName: "[project]/app/statistics/page.tsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/statistics/page.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 lg:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 rounded bg-white shadow-soft p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-extrabold mb-4",
                                children: "Student Breakdown"
                            }, void 0, false, {
                                fileName: "[project]/app/statistics/page.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: "bg-black/5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "text-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3 font-extrabold",
                                                        children: "ID"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/statistics/page.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3 font-extrabold",
                                                        children: "First Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/statistics/page.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3 font-extrabold",
                                                        children: "Last Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/statistics/page.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3 font-extrabold",
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/statistics/page.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3 font-extrabold text-red-700",
                                                        children: "Absences"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/statistics/page.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3 font-extrabold text-yellow-700",
                                                        children: "Late"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/statistics/page.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3 font-extrabold",
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/statistics/page.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/statistics/page.tsx",
                                                lineNumber: 166,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/statistics/page.tsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: [
                                                students.map((s)=>{
                                                    const abs = s.absenceCount ?? 0;
                                                    const late = s.lateCount ?? 0;
                                                    const isAlert = abs >= 5;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "border-t border-black/5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3 text-black/70",
                                                                children: s.studentId
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/statistics/page.tsx",
                                                                lineNumber: 184,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3 font-semibold",
                                                                children: s.firstName
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/statistics/page.tsx",
                                                                lineNumber: 185,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3 font-semibold",
                                                                children: s.lastName
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/statistics/page.tsx",
                                                                lineNumber: 186,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3 text-black/60",
                                                                children: s.email ?? "-"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/statistics/page.tsx",
                                                                lineNumber: 187,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3 text-red-700 font-bold",
                                                                children: abs
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/statistics/page.tsx",
                                                                lineNumber: 188,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3 text-yellow-700 font-bold",
                                                                children: late
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/statistics/page.tsx",
                                                                lineNumber: 189,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3",
                                                                children: isAlert ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "rounded bg-red-50 border border-red-600/20 px-2 py-1 text-xs text-red-700 font-extrabold",
                                                                    children: "ALERT"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/statistics/page.tsx",
                                                                    lineNumber: 192,
                                                                    columnNumber: 27
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "rounded bg-green-50 border border-green-600/20 px-2 py-1 text-xs text-green-700 font-extrabold",
                                                                    children: "OK"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/statistics/page.tsx",
                                                                    lineNumber: 196,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/statistics/page.tsx",
                                                                lineNumber: 190,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, s.studentId, true, {
                                                        fileName: "[project]/app/statistics/page.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 21
                                                    }, this);
                                                }),
                                                students.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-5 text-black/60",
                                                        colSpan: 7,
                                                        children: "No students found."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/statistics/page.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/statistics/page.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 19
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/statistics/page.tsx",
                                            lineNumber: 176,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/statistics/page.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/statistics/page.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/statistics/page.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-1 rounded bg-white shadow-soft p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-extrabold mb-4",
                                children: "Active Alerts"
                            }, void 0, false, {
                                fileName: "[project]/app/statistics/page.tsx",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this),
                            alerts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded border border-black/10 bg-black/5 p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-extrabold text-black/70",
                                        children: "No Active Alerts"
                                    }, void 0, false, {
                                        fileName: "[project]/app/statistics/page.tsx",
                                        lineNumber: 222,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-black/60 mt-1",
                                        children: "All students are within acceptable attendance limits."
                                    }, void 0, false, {
                                        fileName: "[project]/app/statistics/page.tsx",
                                        lineNumber: 223,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/statistics/page.tsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 max-h-96 overflow-y-auto",
                                children: [
                                    alerts.slice(0, 10).map((alert)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `rounded border p-3 ${alert.alertType === 'ABSENCE' ? 'bg-red-50 border-red-200' : alert.alertType === 'LATE' ? 'bg-yellow-50 border-yellow-200' : 'bg-orange-50 border-orange-200'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `text-xs font-extrabold ${alert.alertType === 'ABSENCE' ? 'text-red-700' : alert.alertType === 'LATE' ? 'text-yellow-700' : 'text-orange-700'}`,
                                                    children: alert.alertType
                                                }, void 0, false, {
                                                    fileName: "[project]/app/statistics/page.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-black/80 mt-1",
                                                    children: alert.message
                                                }, void 0, false, {
                                                    fileName: "[project]/app/statistics/page.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-black/50 mt-1",
                                                    children: new Date(alert.createdAt).toLocaleDateString()
                                                }, void 0, false, {
                                                    fileName: "[project]/app/statistics/page.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, alert.alertId, true, {
                                            fileName: "[project]/app/statistics/page.tsx",
                                            lineNumber: 230,
                                            columnNumber: 17
                                        }, this)),
                                    alerts.length > 10 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-center text-black/60 pt-2",
                                        children: [
                                            "+ ",
                                            alerts.length - 10,
                                            " more alerts"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/statistics/page.tsx",
                                        lineNumber: 258,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/statistics/page.tsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/statistics/page.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/statistics/page.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/statistics/page.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_fb2203d0._.js.map