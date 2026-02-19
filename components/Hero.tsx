import Link from "next/link";

export default function Hero() {
  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <div className="lg:col-span-8 relative overflow-hidden rounded-3xl border border-white/20 bg-white/60 backdrop-blur-xl shadow-2xl shadow-black/10">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"></div>
        
        <div className="relative p-8 md:p-12">
          <div className="inline-flex rounded-full border border-white/20 bg-white/60 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-gray-700">
            🎓 Attendance Analytics Portal
          </div>
          
          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Attendance Analytics & Anomaly Detection
          </h1>
          
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Record absences/lateness, enforce rules, detect anomalies, and generate comprehensive student/class reports —
            powered by Oracle DB + intelligent automation workflows.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link 
              href="/reports" 
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-100 to-blue-200 px-6 py-3 text-white font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              <span className="relative z-10">View Statistics</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </Link>
            <Link 
              href="/students" 
              className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/60 backdrop-blur-xl px-6 py-3 text-gray-800 font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 hover:bg-white/80"
            >
              <span className="relative z-10">Manage Students</span>
            </Link>
          </div>
        </div>
        
        {/* Bottom gradient accent */}
        <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      </div>

      <div className="lg:col-span-4 grid gap-6">
        <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/60 backdrop-blur-xl shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent"></div>
          <div className="relative p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
              <h3 className="text-lg font-bold text-gray-900">Quick Actions</h3>
            </div>
            <div className="grid gap-3">
              <Link 
                className="group rounded-xl border border-white/20 bg-white/50 p-4 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-white hover:shadow-md hover:-translate-y-0.5" 
                href="/students"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-blue-100 p-2">
                    <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <span>Mark Attendance</span>
                </div>
              </Link>
              <Link 
                className="group rounded-xl border border-white/20 bg-white/50 p-4 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-white hover:shadow-md hover:-translate-y-0.5" 
                href="/alerts"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-red-100 p-2">
                    <svg className="h-4 w-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <span>View Alerts</span>
                </div>
              </Link>
              <Link 
                className="group rounded-xl border border-white/20 bg-white/50 p-4 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-white hover:shadow-md hover:-translate-y-0.5" 
                href="/anomalies"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-purple-100 p-2">
                    <svg className="h-4 w-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <span>Detect Anomalies</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/60 backdrop-blur-xl shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent"></div>
          <div className="relative p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-2 w-2 rounded-full bg-amber-500"></div>
              <h3 className="text-lg font-bold text-gray-900">System Metrics</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/20 bg-white/50 p-4 text-center">
                <div className="text-xs font-medium text-gray-600">Tracking</div>
                <div className="mt-1 text-lg font-bold text-gray-900">Daily</div>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/50 p-4 text-center">
                <div className="text-xs font-medium text-gray-600">Alerts</div>
                <div className="mt-1 text-lg font-bold text-gray-900">Smart</div>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/50 p-4 text-center">
                <div className="text-xs font-medium text-gray-600">Reports</div>
                <div className="mt-1 text-lg font-bold text-gray-900">Live</div>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/50 p-4 text-center">
                <div className="text-xs font-medium text-gray-600">Database</div>
                <div className="mt-1 text-lg font-bold text-gray-900">Oracle</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
