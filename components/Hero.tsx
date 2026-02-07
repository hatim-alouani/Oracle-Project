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
            <Link href="/statistics" className="rounded bg-black/5 px-4 py-2 text-[#111] font-semibold">
              View Statistics
            </Link>
            <Link href="/students" className="rounded bg-black/5 px-4 py-2 text-[#111] font-semibold">
              Manage Students
            </Link>
          </div>
        </div>
        <div className="h-40 bg-gradient-to-r from-[#2e89c6]/25 to-[#7b56b3]/25" />
      </div>

      <div className="lg:col-span-4 grid gap-4">
        <div className="rounded bg-white p-5 shadow-soft">
          <div className="text-sm font-bold">Quick Actions</div>
          <div className="mt-3 grid gap-2 text-sm">
            <Link className="rounded border border-black/10 px-3 py-2 hover:bg-black/5" href="/attendance">
              Mark Absences & Lateness
            </Link>
            <Link className="rounded border border-black/10 px-3 py-2 hover:bg-black/5" href="/statistics">
              Reports & Alerts
            </Link>
            <Link className="rounded border border-black/10 px-3 py-2 hover:bg-black/5" href="/students">
              Add / Remove Students
            </Link>
          </div>
        </div>

        <div className="rounded bg-white p-5 shadow-soft">
          <div className="text-sm font-bold">Indicators</div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="rounded bg-black/5 p-3">
              <div className="text-xs text-black/60">Tracking</div>
              <div className="font-extrabold">Daily</div>
            </div>
            <div className="rounded bg-black/5 p-3">
              <div className="text-xs text-black/60">Alerts</div>
              <div className="font-extrabold">Threshold</div>
            </div>
            <div className="rounded bg-black/5 p-3">
              <div className="text-xs text-black/60">Reports</div>
              <div className="font-extrabold">Monthly</div>
            </div>
            <div className="rounded bg-black/5 p-3">
              <div className="text-xs text-black/60">Views</div>
              <div className="font-extrabold">Oracle</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
