"use client";

import { useEffect, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import EmptyState from "@/components/EmptyState";
import LoadingSpinner from "@/components/LoadingSpinner";
import Toast from "@/components/Toast";
import Select from "@/components/Select";
import { fetchAlerts, fetchActiveAlerts, resolveAlert, dismissAlert } from "@/lib/api";
import { AlertItem } from "@/lib/types";

type Tab = "active" | "all";

export default function AlertsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("active");
  const [alerts, setAlerts] = useState<AlertItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<{ type: "ok" | "err"; msg: string } | null>(null);

  // Filters
  const [filterType, setFilterType] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  async function loadAlerts() {
    setLoading(true);
    setToast(null);
    try {
      const data = activeTab === "active" ? await fetchActiveAlerts() : await fetchAlerts();
      setAlerts(data);
    } catch (e: any) {
      setToast({ type: "err", msg: e?.message ?? "Failed to load alerts" });
      setAlerts([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadAlerts();
  }, [activeTab]);

  const filteredAlerts = alerts.filter((alert) => {
    if (filterType && alert.alertType !== filterType) return false;
    if (filterStatus && alert.status !== filterStatus) return false;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const message = alert.message.toLowerCase();
      if (!message.includes(query)) return false;
    }
    return true;
  });

  const alertTypes = [...new Set(alerts.map((a) => a.alertType))];
  const alertStatuses = [...new Set(alerts.map((a) => a.status))];

  return (
    <div>
      <div className="mb-8">
        <div className="mb-2">
          <h1 className="text-4xl font-bold text-gray-900 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Alerts
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Monitor attendance alerts and notifications
          </p>
        </div>
      </div>

      {toast && (
        <div className="mb-6">
          <Toast type={toast.type} msg={toast.msg} />
        </div>
      )}

      {/* Modern Tabs */}
      <div className="mb-8">
        <div className="inline-flex rounded-xl border border-white/20 bg-white/60 backdrop-blur-xl p-1 shadow-lg">
          <button
            onClick={() => setActiveTab("active")}
            className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
              activeTab === "active"
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
                : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
            }`}
          >
            Active Alerts
          </button>
          <button
            onClick={() => setActiveTab("all")}
            className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
              activeTab === "all"
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
                : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
            }`}
          >
            All Alerts
          </button>
        </div>
      </div>

      {/* Filters */}
      <Card title="Filters" className="mb-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <input
              type="text"
              placeholder="Search student or message..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded border border-black/10 px-3 py-2 text-sm"
            />
          </div>
          <Select
            value={filterType}
            onChange={setFilterType}
            options={alertTypes.map((type) => ({ value: type, label: type }))}
            placeholder="All Types"
          />
          <Select
            value={filterStatus}
            onChange={setFilterStatus}
            options={alertStatuses.map((status) => ({ value: status, label: status }))}
            placeholder="All Statuses"
          />
        </div>
        {(filterType || filterStatus || searchQuery) && (
          <button
            onClick={() => {
              setFilterType("");
              setFilterStatus("");
              setSearchQuery("");
            }}
            className="mt-3 text-xs text-[#2e89c6] hover:underline"
          >
            Clear filters
          </button>
        )}
      </Card>

      {/* Alerts List */}
      {loading ? (
        <LoadingSpinner />
      ) : filteredAlerts.length === 0 ? (
        <Card>
          <EmptyState
            message={
              alerts.length === 0
                ? "No alerts found."
                : "No alerts match your filters."
            }
          />
        </Card>
      ) : (
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-black/5">
                <tr className="text-left">
                  <th className="p-3 font-extrabold">Student</th>
                  <th className="p-3 font-extrabold">Type</th>
                  <th className="p-3 font-extrabold">Message</th>
                  <th className="p-3 font-extrabold">Created</th>
                  <th className="p-3 font-extrabold">Status</th>
                  <th className="p-3 font-extrabold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAlerts.map((alert) => (
                  <tr key={alert.alertId} className="border-t border-black/5 hover:bg-black/5">
                    <td className="p-3 font-semibold">
                      Student {alert.studentId}
                    </td>
                    <td className="p-3">
                      <span className="rounded bg-blue-100 text-blue-700 px-2 py-1 text-xs font-bold">
                        {alert.alertType}
                      </span>
                    </td>
                    <td className="p-3 text-black/70">{alert.message}</td>
                    <td className="p-3 text-black/60 text-xs">
                      {new Date(alert.createdAt).toLocaleString()}
                    </td>
                    <td className="p-3">
                      <span
                        className={`rounded px-2 py-1 text-xs font-bold ${
                          alert.status === "ACTIVE"
                            ? "bg-red-100 text-red-700"
                            : alert.status === "RESOLVED"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {alert.status}
                      </span>
                    </td>
                    <td className="p-3">
                      {alert.status === "ACTIVE" && (
                        <div className="flex gap-2">
                          <button
                            onClick={async () => {
                              try {
                                await resolveAlert(alert.alertId);
                                setToast({ type: "ok", msg: "Alert resolved" });
                                loadAlerts();
                              } catch (e: any) {
                                setToast({ type: "err", msg: e?.message ?? "Failed to resolve" });
                              }
                            }}
                            className="rounded bg-green-50 border border-green-600/30 px-2 py-1 text-xs font-bold text-green-700 hover:bg-green-100"
                          >
                            Resolve
                          </button>
                          <button
                            onClick={async () => {
                              try {
                                await dismissAlert(alert.alertId);
                                setToast({ type: "ok", msg: "Alert dismissed" });
                                loadAlerts();
                              } catch (e: any) {
                                setToast({ type: "err", msg: e?.message ?? "Failed to dismiss" });
                              }
                            }}
                            className="rounded bg-gray-50 border border-gray-400/30 px-2 py-1 text-xs font-bold text-gray-600 hover:bg-gray-100"
                          >
                            Dismiss
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-xs text-black/50">
            Showing {filteredAlerts.length} of {alerts.length} alert(s)
          </div>
        </Card>
      )}
    </div>
  );
}
