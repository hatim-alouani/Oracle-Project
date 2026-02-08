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
"[project]/components/Modal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function Modal({ isOpen, onClose, title, children, size = "md" }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return ()=>{
            document.body.style.overflow = "unset";
        };
    }, [
        isOpen
    ]);
    if (!isOpen) return null;
    const sizeClasses = {
        sm: "max-w-md",
        md: "max-w-lg",
        lg: "max-w-2xl",
        xl: "max-w-4xl"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 overflow-y-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen items-center justify-center p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-black/50",
                    onClick: onClose
                }, void 0, false, {
                    fileName: "[project]/components/Modal.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `relative w-full ${sizeClasses[size]} rounded-lg bg-white shadow-xl`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-black/10 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-extrabold",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/components/Modal.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "rounded p-1 hover:bg-black/5 transition",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "h-5 w-5",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M6 18L18 6M6 6l12 12"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Modal.tsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Modal.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Modal.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Modal.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/components/Modal.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Modal.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Modal.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Modal.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/components/Input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function Input({ label, value, onChange, type = "text", placeholder, required = false, disabled = false, error }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-xs font-bold text-black/70 mb-2",
                children: [
                    label,
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
}),
"[project]/components/Select.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Select
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function Select({ label, value, onChange, options, placeholder = "Select an option", required = false, disabled = false, error }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-xs font-bold text-black/70 mb-2",
                children: [
                    label,
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-red-600 ml-1",
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/components/Select.tsx",
                        lineNumber: 27,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Select.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: value,
                onChange: (e)=>onChange(e.target.value),
                required: required,
                disabled: disabled,
                className: `w-full rounded border px-3 py-2 text-sm transition ${error ? "border-red-600 focus:border-red-600 focus:ring-2 focus:ring-red-600/20" : "border-black/10 focus:border-[#2e89c6] focus:ring-2 focus:ring-[#2e89c6]/20"} disabled:bg-black/5 disabled:cursor-not-allowed outline-none`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        children: placeholder
                    }, void 0, false, {
                        fileName: "[project]/components/Select.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: opt.value,
                            children: opt.label
                        }, opt.value, false, {
                            fileName: "[project]/components/Select.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Select.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-xs text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/Select.tsx",
                lineNumber: 48,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Select.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Card({ title, subtitle, children, className = "", actions }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `rounded bg-white shadow-soft overflow-hidden ${className}`,
        children: [
            (title || subtitle || actions) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-black/5 p-4 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-extrabold",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/Card.tsx",
                                lineNumber: 19,
                                columnNumber: 23
                            }, this),
                            subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    actions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/components/EmptyState.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EmptyState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function EmptyState({ message, action }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-12 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "mx-auto h-12 w-12 text-black/20",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-sm text-black/60",
                children: message
            }, void 0, false, {
                fileName: "[project]/components/EmptyState.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            action && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/components/LoadingSpinner.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoadingSpinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function LoadingSpinner({ size = "md" }) {
    const sizeClasses = {
        sm: "h-4 w-4 border-2",
        md: "h-8 w-8 border-2",
        lg: "h-12 w-12 border-4"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
"[project]/app/classes/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClassesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SectionTitle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EmptyState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/EmptyState.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingSpinner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/LoadingSpinner.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toast.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-ssr] (ecmascript)");
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
;
;
;
function ClassesPage() {
    const [classes, setClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [students, setStudents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Add Class Modal
    const [showAddModal, setShowAddModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [className, setClassName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [semester, setSemester] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [addingClass, setAddingClass] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Enroll Student Modal
    const [showEnrollModal, setShowEnrollModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedClassId, setSelectedClassId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedStudentId, setSelectedStudentId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [enrolling, setEnrolling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    async function loadData() {
        setLoading(true);
        try {
            const [classesData, studentsData] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClasses"])(),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchStudents"])()
            ]);
            setClasses(classesData);
            setStudents(studentsData);
        } catch (e) {
            setToast({
                type: "err",
                msg: e?.message ?? "Failed to load data"
            });
        } finally{
            setLoading(false);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadData();
    }, []);
    async function handleAddClass() {
        if (!className.trim() || !semester.trim()) return;
        setAddingClass(true);
        setToast(null);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addClass"])({
                class_name: className.trim(),
                semester: semester.trim()
            });
            setToast({
                type: "ok",
                msg: "Class added successfully."
            });
            setClassName("");
            setSemester("");
            setShowAddModal(false);
            await loadData();
        } catch (e) {
            setToast({
                type: "err",
                msg: e?.message ?? "Failed to add class"
            });
        } finally{
            setAddingClass(false);
        }
    }
    async function handleEnroll() {
        if (!selectedClassId || !selectedStudentId) return;
        setEnrolling(true);
        setToast(null);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enrollStudentInClass"])({
                class_id: selectedClassId,
                student_id: parseInt(selectedStudentId)
            });
            setToast({
                type: "ok",
                msg: "Student enrolled successfully."
            });
            setSelectedStudentId("");
            setShowEnrollModal(false);
            await loadData();
        } catch (e) {
            setToast({
                type: "err",
                msg: e?.message ?? "Failed to enroll student"
            });
        } finally{
            setEnrolling(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: "Classes",
                subtitle: "Manage classes and student enrollments."
            }, void 0, false, {
                fileName: "[project]/app/classes/page.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    type: toast.type,
                    msg: toast.msg
                }, void 0, false, {
                    fileName: "[project]/app/classes/page.tsx",
                    lineNumber: 103,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/classes/page.tsx",
                lineNumber: 102,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 flex gap-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onClick: ()=>setShowAddModal(true),
                    variant: "primary",
                    children: "+ Add Class"
                }, void 0, false, {
                    fileName: "[project]/app/classes/page.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/classes/page.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingSpinner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/classes/page.tsx",
                lineNumber: 114,
                columnNumber: 9
            }, this) : classes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EmptyState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    message: "No classes yet. Create your first class to get started.",
                    action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onClick: ()=>setShowAddModal(true),
                        variant: "primary",
                        children: "+ Add Class"
                    }, void 0, false, {
                        fileName: "[project]/app/classes/page.tsx",
                        lineNumber: 120,
                        columnNumber: 15
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/app/classes/page.tsx",
                    lineNumber: 117,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/classes/page.tsx",
                lineNumber: 116,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
                children: classes.map((cls)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "hover:shadow-lg transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-extrabold",
                                                children: cls.className
                                            }, void 0, false, {
                                                fileName: "[project]/app/classes/page.tsx",
                                                lineNumber: 132,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-black/60 mt-1",
                                                children: [
                                                    "Semester: ",
                                                    cls.semester
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/classes/page.tsx",
                                                lineNumber: 133,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/classes/page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "h-8 w-8 text-black/20",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                        }, void 0, false, {
                                            fileName: "[project]/app/classes/page.tsx",
                                            lineNumber: 136,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/classes/page.tsx",
                                        lineNumber: 135,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/classes/page.tsx",
                                lineNumber: 130,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: ()=>{
                                        setSelectedClassId(cls.classId);
                                        setShowEnrollModal(true);
                                    },
                                    variant: "secondary",
                                    size: "sm",
                                    className: "w-full",
                                    children: "Enroll Student"
                                }, void 0, false, {
                                    fileName: "[project]/app/classes/page.tsx",
                                    lineNumber: 140,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/classes/page.tsx",
                                lineNumber: 139,
                                columnNumber: 15
                            }, this)
                        ]
                    }, cls.classId, true, {
                        fileName: "[project]/app/classes/page.tsx",
                        lineNumber: 129,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/classes/page.tsx",
                lineNumber: 127,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showAddModal,
                onClose: ()=>setShowAddModal(false),
                title: "Add New Class",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            label: "Class Name",
                            value: className,
                            onChange: setClassName,
                            placeholder: "e.g., Computer Science 101",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/app/classes/page.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            label: "Semester",
                            value: semester,
                            onChange: setSemester,
                            placeholder: "e.g., Fall 2026",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/app/classes/page.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 justify-end mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: ()=>setShowAddModal(false),
                                    variant: "secondary",
                                    disabled: addingClass,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/app/classes/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: handleAddClass,
                                    variant: "primary",
                                    disabled: addingClass || !className.trim() || !semester.trim(),
                                    children: addingClass ? "Adding..." : "Add Class"
                                }, void 0, false, {
                                    fileName: "[project]/app/classes/page.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/classes/page.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/classes/page.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/classes/page.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showEnrollModal,
                onClose: ()=>setShowEnrollModal(false),
                title: "Enroll Student in Class",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-black/70 mb-4",
                                children: [
                                    "Class:",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold",
                                        children: classes.find((c)=>c.classId === selectedClassId)?.className
                                    }, void 0, false, {
                                        fileName: "[project]/app/classes/page.tsx",
                                        lineNumber: 207,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/classes/page.tsx",
                                lineNumber: 205,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/classes/page.tsx",
                            lineNumber: 204,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            label: "Select Student",
                            value: selectedStudentId,
                            onChange: setSelectedStudentId,
                            options: students.map((s)=>({
                                    value: s.studentId,
                                    label: `${s.firstName} ${s.lastName}`
                                })),
                            placeholder: "Choose a student",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/app/classes/page.tsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 justify-end mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: ()=>setShowEnrollModal(false),
                                    variant: "secondary",
                                    disabled: enrolling,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/app/classes/page.tsx",
                                    lineNumber: 224,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: handleEnroll,
                                    variant: "primary",
                                    disabled: enrolling || !selectedStudentId,
                                    children: enrolling ? "Enrolling..." : "Enroll Student"
                                }, void 0, false, {
                                    fileName: "[project]/app/classes/page.tsx",
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/classes/page.tsx",
                            lineNumber: 223,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/classes/page.tsx",
                    lineNumber: 203,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/classes/page.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/classes/page.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_827b320f._.js.map