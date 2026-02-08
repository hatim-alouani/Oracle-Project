"use client";

import { useEffect, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Card from "@/components/Card";
import EmptyState from "@/components/EmptyState";
import LoadingSpinner from "@/components/LoadingSpinner";
import Toast from "@/components/Toast";
import { fetchClasses, addClass, enrollStudentInClass, fetchStudents } from "@/lib/api";
import { ClassItem, Student } from "@/lib/types";

export default function ClassesPage() {
  const [classes, setClasses] = useState<ClassItem[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<{ type: "ok" | "err"; msg: string } | null>(null);

  // Add Class Modal
  const [showAddModal, setShowAddModal] = useState(false);
  const [className, setClassName] = useState("");
  const [semester, setSemester] = useState("");
  const [addingClass, setAddingClass] = useState(false);

  // Enroll Student Modal
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [selectedClassId, setSelectedClassId] = useState<number | null>(null);
  const [selectedStudentId, setSelectedStudentId] = useState("");
  const [enrolling, setEnrolling] = useState(false);

  async function loadData() {
    setLoading(true);
    try {
      const [classesData, studentsData] = await Promise.all([
        fetchClasses(),
        fetchStudents(),
      ]);
      setClasses(classesData);
      setStudents(studentsData);
    } catch (e: any) {
      setToast({ type: "err", msg: e?.message ?? "Failed to load data" });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  async function handleAddClass() {
    if (!className.trim() || !semester.trim()) return;

    setAddingClass(true);
    setToast(null);
    try {
      await addClass({ class_name: className.trim(), semester: semester.trim() });
      setToast({ type: "ok", msg: "Class added successfully." });
      setClassName("");
      setSemester("");
      setShowAddModal(false);
      await loadData();
    } catch (e: any) {
      setToast({ type: "err", msg: e?.message ?? "Failed to add class" });
    } finally {
      setAddingClass(false);
    }
  }

  async function handleEnroll() {
    if (!selectedClassId || !selectedStudentId) return;

    setEnrolling(true);
    setToast(null);
    try {
      await enrollStudentInClass({
        class_id: selectedClassId,
        student_id: parseInt(selectedStudentId),
      });
      setToast({ type: "ok", msg: "Student enrolled successfully." });
      setSelectedStudentId("");
      setShowEnrollModal(false);
      await loadData();
    } catch (e: any) {
      setToast({ type: "err", msg: e?.message ?? "Failed to enroll student" });
    } finally {
      setEnrolling(false);
    }
  }

  return (
    <div>
      <SectionTitle
        title="Classes"
        subtitle="Manage classes and student enrollments."
      />

      {toast && (
        <div className="mb-4">
          <Toast type={toast.type} msg={toast.msg} />
        </div>
      )}

      <div className="mb-6 flex gap-3">
        <Button onClick={() => setShowAddModal(true)} variant="primary">
          + Add Class
        </Button>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : classes.length === 0 ? (
        <Card>
          <EmptyState
            message="No classes yet. Create your first class to get started."
            action={
              <Button onClick={() => setShowAddModal(true)} variant="primary">
                + Add Class
              </Button>
            }
          />
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {classes.map((cls) => (
            <Card key={cls.classId} className="hover:shadow-lg transition">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-extrabold">{cls.className}</h3>
                  <p className="text-sm text-black/60 mt-1">Semester: {cls.semester}</p>
                </div>
                <svg className="h-8 w-8 text-black/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="mt-4">
                <Button
                  onClick={() => {
                    setSelectedClassId(cls.classId);
                    setShowEnrollModal(true);
                  }}
                  variant="secondary"
                  size="sm"
                  className="w-full"
                >
                  Enroll Student
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Add Class Modal */}
      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add New Class"
      >
        <div className="space-y-4">
          <Input
            label="Class Name"
            value={className}
            onChange={setClassName}
            placeholder="e.g., Computer Science 101"
            required
          />
          <Input
            label="Semester"
            value={semester}
            onChange={setSemester}
            placeholder="e.g., Fall 2026"
            required
          />
          <div className="flex gap-2 justify-end mt-6">
            <Button
              onClick={() => setShowAddModal(false)}
              variant="secondary"
              disabled={addingClass}
            >
              Cancel
            </Button>
            <Button
              onClick={handleAddClass}
              variant="primary"
              disabled={addingClass || !className.trim() || !semester.trim()}
            >
              {addingClass ? "Adding..." : "Add Class"}
            </Button>
          </div>
        </div>
      </Modal>

      {/* Enroll Student Modal */}
      <Modal
        isOpen={showEnrollModal}
        onClose={() => setShowEnrollModal(false)}
        title="Enroll Student in Class"
      >
        <div className="space-y-4">
          <div>
            <p className="text-sm text-black/70 mb-4">
              Class:{" "}
              <span className="font-bold">
                {classes.find((c) => c.classId === selectedClassId)?.className}
              </span>
            </p>
          </div>
          <Select
            label="Select Student"
            value={selectedStudentId}
            onChange={setSelectedStudentId}
            options={students.map((s) => ({
              value: s.studentId,
              label: `${s.firstName} ${s.lastName}`,
            }))}
            placeholder="Choose a student"
            required
          />
          <div className="flex gap-2 justify-end mt-6">
            <Button
              onClick={() => setShowEnrollModal(false)}
              variant="secondary"
              disabled={enrolling}
            >
              Cancel
            </Button>
            <Button
              onClick={handleEnroll}
              variant="primary"
              disabled={enrolling || !selectedStudentId}
            >
              {enrolling ? "Enrolling..." : "Enroll Student"}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
