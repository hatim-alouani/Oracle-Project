"use client";

import { useEffect, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import EmptyState from "@/components/EmptyState";
import LoadingSpinner from "@/components/LoadingSpinner";
import Toast from "@/components/Toast";
import Select from "@/components/Select";
import { fetchAnomalies } from "@/lib/api";
import { AnomalyPattern } from "@/lib/types";

export default function AnomaliesPage() {
  const [anomalies, setAnomalies] = useState<AnomalyPattern[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<{ type: "ok" | "err"; msg: string } | null>(null);

  // Filters
  const [filterSeverity, setFilterSeverity] = useState("");
  const [filterResolved, setFilterResolved] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Detail Modal
  const [selectedAnomaly, setSelectedAnomaly] = useState<AnomalyPattern | null>(null);

  async function loadAnomalies() {
    setLoading(true);
    setToast(null);
    try {
      const data = await fetchAnomalies();
      setAnomalies(data);
    } catch (e: any) {
      setToast({ type: "err", msg: e?.message ?? "Failed to load anomalies" });
      setAnomalies([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadAnomalies();
  }, []);

  const filteredAnomalies = anomalies.filter((anomaly) => {
    if (filterSeverity && anomaly.severity !== filterSeverity) return false;
    if (filterResolved === "resolved" && !anomaly.isResolved) return false;
    if (filterResolved === "unresolved" && anomaly.isResolved) return false;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const patternType = anomaly.patternType.toLowerCase();
      const description = anomaly.description?.toLowerCase() ?? "";
      if (
        !patternType.includes(query) &&
        !description.includes(query)
      )
        return false;
    }
    return true;
  });

  const severities = [...new Set(anomalies.map((a) => a.severity))];

  return (
    <div>
      <SectionTitle
        title="Anomalies"
        subtitle="Detected attendance patterns and behavioral anomalies."
      />

      {toast && (
        <div className="mb-4">
          <Toast type={toast.type} msg={toast.msg} />
        </div>
      )}

      {/* Summary Stats */}
      <div className="grid gap-4 md:grid-cols-4 mb-6">
        <Card>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-[#2e89c6]">{anomalies.length}</div>
            <div className="text-xs text-black/60 mt-1">Total Anomalies</div>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-red-600">
              {anomalies.filter((a) => a.severity === "HIGH").length}
            </div>
            <div className="text-xs text-black/60 mt-1">High Severity</div>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-yellow-600">
              {anomalies.filter((a) => a.severity === "MEDIUM").length}
            </div>
            <div className="text-xs text-black/60 mt-1">Medium Severity</div>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-green-600">
              {anomalies.filter((a) => a.isResolved).length}
            </div>
            <div className="text-xs text-black/60 mt-1">Resolved</div>
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card title="Filters" className="mb-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <input
              type="text"
              placeholder="Search pattern or student..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded border border-black/10 px-3 py-2 text-sm"
            />
          </div>
          <Select
            value={filterSeverity}
            onChange={setFilterSeverity}
            options={severities.map((sev) => ({ value: sev, label: sev }))}
            placeholder="All Severities"
          />
          <Select
            value={filterResolved}
            onChange={setFilterResolved}
            options={[
              { value: "resolved", label: "Resolved Only" },
              { value: "unresolved", label: "Unresolved Only" },
            ]}
            placeholder="All Statuses"
          />
        </div>
        {(filterSeverity || filterResolved || searchQuery) && (
          <button
            onClick={() => {
              setFilterSeverity("");
              setFilterResolved("");
              setSearchQuery("");
            }}
            className="mt-3 text-xs text-[#2e89c6] hover:underline"
          >
            Clear filters
          </button>
        )}
      </Card>

      {/* Anomalies List */}
      {loading ? (
        <LoadingSpinner />
      ) : filteredAnomalies.length === 0 ? (
        <Card>
          <EmptyState
            message={
              anomalies.length === 0
                ? "No anomalies detected."
                : "No anomalies match your filters."
            }
          />
        </Card>
      ) : (
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-black/5">
                <tr className="text-left">
                  <th className="p-3 font-extrabold">Pattern Type</th>
                  <th className="p-3 font-extrabold">Student</th>
                  <th className="p-3 font-extrabold">Detection Date</th>
                  <th className="p-3 font-extrabold">Severity</th>
                  <th className="p-3 font-extrabold">Status</th>
                  <th className="p-3 font-extrabold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAnomalies.map((anomaly) => (
                  <tr
                    key={anomaly.patternId}
                    className="border-t border-black/5 hover:bg-black/5"
                  >
                    <td className="p-3 font-semibold">{anomaly.patternType}</td>
                    <td className="p-3 text-black/70">
                      {anomaly.studentId ? `Student ${anomaly.studentId}` : "N/A"}
                    </td>
                    <td className="p-3 text-black/60 text-xs">
                      {new Date(anomaly.detectionDate).toLocaleDateString()}
                    </td>
                    <td className="p-3">
                      <span
                        className={`rounded px-2 py-1 text-xs font-bold ${
                          anomaly.severity === "HIGH"
                            ? "bg-red-100 text-red-700"
                            : anomaly.severity === "MEDIUM"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {anomaly.severity}
                      </span>
                    </td>
                    <td className="p-3">
                      {anomaly.isResolved ? (
                        <span className="text-xs text-green-600 font-bold">✓ Resolved</span>
                      ) : (
                        <span className="text-xs text-orange-600 font-bold">⚠ Active</span>
                      )}
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => setSelectedAnomaly(anomaly)}
                        className="text-xs text-[#2e89c6] hover:underline font-semibold"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-xs text-black/50">
            Showing {filteredAnomalies.length} of {anomalies.length} anomaly(ies)
          </div>
        </Card>
      )}

      {/* Detail Modal */}
      {selectedAnomaly && (
        <Modal
          isOpen={!!selectedAnomaly}
          onClose={() => setSelectedAnomaly(null)}
          title="Anomaly Details"
        >
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-black/70">Pattern Type</label>
              <div className="mt-1 text-sm font-semibold">{selectedAnomaly.patternType}</div>
            </div>
            <div>
              <label className="text-xs font-bold text-black/70">Student</label>
              <div className="mt-1 text-sm">
                {selectedAnomaly.studentId ? `Student ${selectedAnomaly.studentId}` : "N/A"}
              </div>
            </div>
            <div>
              <label className="text-xs font-bold text-black/70">Detection Date</label>
              <div className="mt-1 text-sm">
                {new Date(selectedAnomaly.detectionDate).toLocaleString()}
              </div>
            </div>
            <div>
              <label className="text-xs font-bold text-black/70">Severity</label>
              <div className="mt-1">
                <span
                  className={`rounded px-2 py-1 text-xs font-bold ${
                    selectedAnomaly.severity === "HIGH"
                      ? "bg-red-100 text-red-700"
                      : selectedAnomaly.severity === "MEDIUM"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {selectedAnomaly.severity}
                </span>
              </div>
            </div>
            <div>
              <label className="text-xs font-bold text-black/70">Status</label>
              <div className="mt-1">
                {selectedAnomaly.isResolved ? (
                  <span className="text-xs text-green-600 font-bold">✓ Resolved</span>
                ) : (
                  <span className="text-xs text-orange-600 font-bold">⚠ Active</span>
                )}
              </div>
            </div>
            {selectedAnomaly.description && (
              <div>
                <label className="text-xs font-bold text-black/70">Description</label>
                <div className="mt-1 text-sm text-black/70">
                  {selectedAnomaly.description}
                </div>
              </div>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
}
