"use client";

import { useEffect, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import EmptyState from "@/components/EmptyState";
import LoadingSpinner from "@/components/LoadingSpinner";
import Toast from "@/components/Toast";
import Select from "@/components/Select";
import { fetchAlerts, fetchActiveAlerts } from "@/lib/api";
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
      <SectionTitle
        title="Alerts"
        subtitle="Monitor attendance alerts and notifications."
      />

      {toast && (
        <div className="mb-4">
          <Toast type={toast.type} msg={toast.msg} />
        </div>
      )}

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b border-black/10">
        <button
          onClick={() => setActiveTab("active")}
          className={`px-4 py-2 font-bold text-sm transition ${
            activeTab === "active"
              ? "border-b-2 border-[#2e89c6] text-[#2e89c6]"
              : "text-black/60 hover:text-black"
          }`}
        >
          Active Alerts
        </button>
        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2 font-bold text-sm transition ${
            activeTab === "all"
              ? "border-b-2 border-[#2e89c6] text-[#2e89c6]"
              : "text-black/60 hover:text-black"
          }`}
        >
          All Alerts
        </button>
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
