"use client";

import { useEffect, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import Toast from "@/components/Toast";
import { fetchClasses, addClass } from "@/lib/api";
import { Class } from "@/lib/types";

// Note: Add class functionality needs a corresponding API function if not already present
// For now, we'll display classes and offer a placeholder for adding

export default function ClassesPage() {
    const [classes, setClasses] = useState<Class[]>([]);
    const [loading, setLoading] = useState(true);
    const [toast, setToast] = useState<{ type: "ok" | "err"; msg: string } | null>(null);

    // New class form state
    const [newClassName, setNewClassName] = useState("");
    const [semester, setSemester] = useState("Spring 2025");

    async function reload() {
        try {
            const list = await fetchClasses();
            setClasses(list);
        } catch (e: any) {
            setToast({ type: "err", msg: e?.message ?? "Failed to load classes" });
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        reload();
    }, []);

    async function onAddClass() {
        setLoading(true);
        setToast(null);
        try {
            await addClass({
                class_name: newClassName.trim(),
                semester,
            });
            setNewClassName("");
            await reload();
            setToast({ type: "ok", msg: "Class added successfully." });
        } catch (e: any) {
            setToast({ type: "err", msg: e?.message ?? "Failed to add class" });
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <SectionTitle
                title="Manage Classes"
                subtitle="Define academic classes and semesters for attendance grouping."
            />

            {toast && (
                <div className="mb-4">
                    <Toast type={toast.type} msg={toast.msg} />
                </div>
            )}

            <div className="grid gap-6 lg:grid-cols-12">
                {/* Add Class Form */}
                <div className="lg:col-span-4 rounded-xl bg-white shadow-sm border border-black/5 p-5 h-fit">
                    <div className="text-sm font-bold border-b border-black/5 pb-3 mb-4">Add New Class</div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 mb-1">Class Name</label>
                            <input
                                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                value={newClassName}
                                onChange={(e) => setNewClassName(e.target.value)}
                                placeholder="e.g. Database Systems"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-gray-500 mb-1">Semester</label>
                            <select
                                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white"
                                value={semester}
                                onChange={(e) => setSemester(e.target.value)}
                            >
                                <option value="Spring 2025">Spring 2025</option>
                                <option value="Fall 2025">Fall 2025</option>
                                <option value="Summer 2025">Summer 2025</option>
                            </select>
                        </div>

                        <button
                            onClick={onAddClass}
                            disabled={!newClassName.trim()}
                            className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
                        >
                            Add Class
                        </button>

                        <p className="text-xs text-black/50 text-center">
                            Requires n8n POST /add-class webhook
                        </p>
                    </div>
                </div>

                {/* Classes List */}
                <div className="lg:col-span-8 space-y-4">
                    {classes.length === 0 && !loading ? (
                        <div className="rounded-xl bg-white border border-black/5 p-12 text-center text-gray-500">
                            No classes found. Add one to get started.
                        </div>
                    ) : (
                        <div className="grid gap-4 sm:grid-cols-2">
                            {classes.map((cls) => (
                                <div key={cls.class_id} className="rounded-xl bg-white border border-black/5 p-5 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-bold text-lg text-gray-900">{cls.class_name}</h3>
                                            <span className="inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                                                {cls.semester}
                                            </span>
                                        </div>
                                        <div className="h-8 w-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
                                            #{cls.class_id}
                                        </div>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-black/5 flex justify-between items-center text-sm">
                                        <span className="text-gray-500">Students enrolled</span>
                                        <span className="font-bold text-gray-900">—</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
