export default function TopBar() {
  return (
    <div className="w-full bg-[#2e89c6] text-white">
      <div className="container-page flex items-center justify-between py-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="rounded bg-white/15 px-2 py-0.5">samedi</span>
          <span className="opacity-90">07/02/2026</span>
          <span className="ml-2 rounded bg-white/15 px-2 py-0.5">New</span>
          <span className="hidden md:inline opacity-90">
            Attendance Analytics & Anomaly Detection System
          </span>
        </div>
        <div className="flex items-center gap-3 opacity-90">
          <span className="hidden sm:inline">Admin Portal</span>
          <span className="h-3 w-px bg-white/30" />
          <span className="hidden sm:inline">Help</span>
        </div>
      </div>
    </div>
  );
}
