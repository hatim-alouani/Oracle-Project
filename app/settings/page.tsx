"use client";

import { useEffect, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";
import EmptyState from "@/components/EmptyState";
import LoadingSpinner from "@/components/LoadingSpinner";
import Toast from "@/components/Toast";
import {
  fetchThresholds,
  createThreshold,
  updateThreshold,
  deleteThreshold,
} from "@/lib/api";
import { AlertThreshold } from "@/lib/types";

export default function SettingsPage() {
  const [thresholds, setThresholds] = useState<AlertThreshold[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<{ type: "ok" | "err"; msg: string } | null>(null);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newType, setNewType] = useState("");
  const [newValue, setNewValue] = useState("");
  const [newPeriod, setNewPeriod] = useState("MONTHLY");
  const [newDescription, setNewDescription] = useState("");
  const [adding, setAdding] = useState(false);

  const [editThreshold, setEditThreshold] = useState<AlertThreshold | null>(null);
  const [editValue, setEditValue] = useState("");
  const [editPeriod, setEditPeriod] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editing, setEditing] = useState(false);

  async function loadThresholds() {
    setLoading(true);
    try {
      const data = await fetchThresholds();
      setThresholds(data);
    } catch (e: any) {
      setToast({ type: "err", msg: e?.message ?? "Failed to load thresholds" });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadThresholds();
  }, []);

  async function handleAdd() {
    if (!newType.trim() || !newValue.trim()) return;
    setAdding(true);
    setToast(null);
    try {
      await createThreshold({
        threshold_type: newType.trim(),
        threshold_value: parseFloat(newValue),
        period: newPeriod,
        description: newDescription.trim() || undefined,
      });
      setToast({ type: "ok", msg: "Threshold created successfully." });
      setNewType("");
      setNewValue("");
      setNewPeriod("MONTHLY");
      setNewDescription("");
      setShowAddModal(false);
      await loadThresholds();
    } catch (e: any) {
      setToast({ type: "err", msg: e?.message ?? "Failed to create threshold" });
    } finally {
      setAdding(false);
    }
  }

  function openEdit(t: AlertThreshold) {
    setEditThreshold(t);
    setEditValue(String(t.thresholdValue));
    setEditPeriod(t.period);
    setEditDescription(t.description || "");
  }

  async function handleEdit() {
    if (!editThreshold || !editValue.trim()) return;
    setEditing(true);
    setToast(null);
    try {
      await updateThreshold(editThreshold.thresholdId, {
        threshold_value: parseFloat(editValue),
        period: editPeriod,
        description: editDescription.trim() || undefined,
      });
      setToast({ type: "ok", msg: "Threshold updated successfully." });
      setEditThreshold(null);
      await loadThresholds();
    } catch (e: any) {
      setToast({ type: "err", msg: e?.message ?? "Failed to update threshold" });
    } finally {
      setEditing(false);
    }
  }

  async function handleToggle(t: AlertThreshold) {
    setToast(null);
    try {
      await updateThreshold(t.thresholdId, {
        is_active: t.isActive ? 0 : 1,
      });
      setToast({ type: "ok", msg: `Threshold ${t.isActive ? "disabled" : "enabled"}.` });
      await loadThresholds();
    } catch (e: any) {
      setToast({ type: "err", msg: e?.message ?? "Failed to toggle threshold" });
    }
  }

  async function handleDelete(id: number) {
    if (!confirm("Delete this threshold?")) return;
    setToast(null);
    try {
      await deleteThreshold(id);
      setToast({ type: "ok", msg: "Threshold deleted." });
      await loadThresholds();
    } catch (e: any) {
      setToast({ type: "err", msg: e?.message ?? "Failed to delete threshold" });
    }
  }

  const periodOptions = [
    { value: "DAILY", label: "Daily" },
    { value: "WEEKLY", label: "Weekly" },
    { value: "MONTHLY", label: "Monthly" },
    { value: "SEMESTER", label: "Semester" },
  ];

  return (
    <div>
      <div className="mb-8">
        <div className="mb-2">
          <h1 className="text-4xl font-bold text-gray-900 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Alert Thresholds
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Configure automated alert thresholds for attendance monitoring
          </p>
        </div>
      </div>

      {toast && (
        <div className="mb-6">
          <Toast type={toast.type} msg={toast.msg} />
        </div>
      )}

      <div className="mb-8">
        <button
          onClick={() => setShowAddModal(true)}
          className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-white font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
        >
          <span className="relative z-10">+ Add Threshold</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </button>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : thresholds.length === 0 ? (
        <Card>
          <EmptyState
            message="No alert thresholds configured. Create one to enable automated alerts."
            action={
              <Button onClick={() => setShowAddModal(true)} variant="primary">
                + Add Threshold
              </Button>
            }
          />
        </Card>
      ) : (
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-black/5">
                <tr className="text-left">
                  <th className="p-3 font-extrabold">Type</th>
                  <th className="p-3 font-extrabold">Value</th>
                  <th className="p-3 font-extrabold">Period</th>
                  <th className="p-3 font-extrabold">Description</th>
                  <th className="p-3 font-extrabold">Status</th>
                  <th className="p-3 font-extrabold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {thresholds.map((t) => (
                  <tr key={t.thresholdId} className="border-t border-black/5 hover:bg-black/5">
                    <td className="p-3 font-semibold">{t.thresholdType}</td>
                    <td className="p-3">
                      <span className="rounded bg-blue-100 text-blue-700 px-2 py-1 text-xs font-bold">
                        {t.thresholdValue}
                      </span>
                    </td>
                    <td className="p-3 text-black/70">{t.period}</td>
                    <td className="p-3 text-black/60 text-xs">{t.description || "-"}</td>
                    <td className="p-3">
                      <span
                        className={`rounded px-2 py-1 text-xs font-bold ${
                          t.isActive
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {t.isActive ? "Active" : "Disabled"}
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        <button
                          onClick={() => openEdit(t)}
                          className="text-xs text-[#2e89c6] hover:underline font-semibold"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleToggle(t)}
                          className={`text-xs hover:underline font-semibold ${
                            t.isActive ? "text-yellow-600" : "text-green-600"
                          }`}
                        >
                          {t.isActive ? "Disable" : "Enable"}
                        </button>
                        <button
                          onClick={() => handleDelete(t.thresholdId)}
                          className="text-xs text-red-600 hover:underline font-semibold"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-xs text-black/50">
            {thresholds.length} threshold(s) configured
          </div>
        </Card>
      )}

      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add Alert Threshold"
      >
        <div className="space-y-4">
          <Input
            label="Threshold Type"
            value={newType}
            onChange={setNewType}
            placeholder="e.g., ABSENCE_MONTHLY"
            required
          />
          <Input
            label="Threshold Value"
            type="number"
            value={newValue}
            onChange={setNewValue}
            placeholder="e.g., 5"
            required
          />
          <Select
            label="Period"
            value={newPeriod}
            onChange={setNewPeriod}
            options={periodOptions}
            placeholder="Select period"
          />
          <Input
            label="Description"
            value={newDescription}
            onChange={setNewDescription}
            placeholder="e.g., Alert when student has 5+ absences in a month"
          />
          <div className="flex gap-2 justify-end mt-6">
            <Button onClick={() => setShowAddModal(false)} variant="secondary" disabled={adding}>
              Cancel
            </Button>
            <Button
              onClick={handleAdd}
              variant="primary"
              disabled={adding || !newType.trim() || !newValue.trim()}
            >
              {adding ? "Creating..." : "Create Threshold"}
            </Button>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={!!editThreshold}
        onClose={() => setEditThreshold(null)}
        title="Edit Alert Threshold"
      >
        {editThreshold && (
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-black/70">Type</label>
              <div className="mt-1 text-sm font-semibold">{editThreshold.thresholdType}</div>
            </div>
            <Input
              label="Threshold Value"
              type="number"
              value={editValue}
              onChange={setEditValue}
              required
            />
            <Select
              label="Period"
              value={editPeriod}
              onChange={setEditPeriod}
              options={periodOptions}
              placeholder="Select period"
            />
            <Input
              label="Description"
              value={editDescription}
              onChange={setEditDescription}
              placeholder="Description"
            />
            <div className="flex gap-2 justify-end mt-6">
              <Button onClick={() => setEditThreshold(null)} variant="secondary" disabled={editing}>
                Cancel
              </Button>
              <Button
                onClick={handleEdit}
                variant="primary"
                disabled={editing || !editValue.trim()}
              >
                {editing ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
