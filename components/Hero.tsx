import Link from "next/link";

export default function Hero() {
  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="lg:col-span-8 rounded bg-white shadow-soft overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="text-xs text-black/60">GMH • Admin Portal</div>
          <h1 className="mt-2 text-2xl md:text-3xl font-extrabold text-[#111]">
            Attendance Analytics & Anomaly Detection
          </h1>
          <p className="mt-2 text-black/70">
            Record absences/lateness, enforce rules, detect anomalies, and generate student/class reports —
            powered by Oracle DB + automation workflows.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Link href="/statistics" className="rounded bg-black/5 px-4 py-2 text-[#111] font-semibold hover:bg-black/10 transition-colors">
              View Statistics
            </Link>
            <Link href="/students" className="rounded bg-black/5 px-4 py-2 text-[#111] font-semibold hover:bg-black/10 transition-colors">
              Manage Students
            </Link>
            <Link href="/classes" className="rounded bg-black/5 px-4 py-2 text-[#111] font-semibold hover:bg-black/10 transition-colors">
              Manage Classes
            </Link>
          </div>
        </div>
        <div className="h-40 bg-gradient-to-r from-[#2e89c6]/25 to-[#7b56b3]/25" />
      </div>

      <div className="lg:col-span-4 grid gap-4">
        <div className="rounded bg-white p-5 shadow-soft">
          <div className="text-sm font-bold">Quick Actions</div>
          <div className="mt-3 grid gap-2 text-sm">
            <Link className="rounded border border-black/10 px-3 py-2 hover:bg-black/5 transition-colors" href="/students">
              Record Attendance
            </Link>
            <Link className="rounded border border-black/10 px-3 py-2 hover:bg-black/5 transition-colors" href="/statistics">
              View Analytics & Alerts
            </Link>
            <Link className="rounded border border-black/10 px-3 py-2 hover:bg-black/5 transition-colors" href="/classes">
              Add New Class
            </Link>
          </div>
        </div>

        <div className="rounded bg-white p-5 shadow-soft">
          <div className="text-sm font-bold">System Status</div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="rounded bg-black/5 p-3">
              <div className="text-xs text-black/60">Workflows</div>
              <div className="font-extrabold text-green-600">Active</div>
            </div>
            <div className="rounded bg-black/5 p-3">
              <div className="text-xs text-black/60">Oracle DB</div>
              <div className="font-extrabold text-green-600">Connected</div>
            </div>
            <div className="rounded bg-black/5 p-3">
              <div className="text-xs text-black/60">Reports</div>
              <div className="font-extrabold">Auto-gen</div>
            </div>
            <div className="rounded bg-black/5 p-3">
              <div className="text-xs text-black/60">Anomalies</div>
              <div className="font-extrabold">Monitored</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
