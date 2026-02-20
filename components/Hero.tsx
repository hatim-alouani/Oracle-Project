import Link from "next/link";

export default function Hero() {
  return (
    <div className="grid gap-8 lg:grid-cols-12 animate-fade-in">
      <div className="lg:col-span-8 relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl animate-slide-up card-hover">
        {/* Professional header accent */}
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400"></div>
        
        <div className="relative p-8 md:p-12">
          <div className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 animate-scale-in">
            <span className="text-base">🎓</span>
            <span>Official Government Portal</span>
          </div>
          
          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Attendance Analytics & Anomaly Detection
          </h1>
          
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Comprehensive attendance monitoring system for educational institutions. Track records, enforce policies, 
            detect anomalies, and generate detailed reports with enterprise-grade security and reliability.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link 
              href="/reports" 
              className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-white font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:from-blue-700 hover:to-blue-800"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>View Reports</span>
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link 
              href="/students" 
              className="group relative overflow-hidden rounded-lg border-2 border-slate-300 bg-white px-6 py-3 text-slate-700 font-semibold shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-400 hover:text-blue-700"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Manage Students</span>
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:col-span-4 grid gap-6">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl animate-slide-up card-hover" style={{animationDelay: '0.1s'}}>
          <div className="h-1 bg-gradient-to-r from-emerald-500 to-emerald-400"></div>
          <div className="relative p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <h3 className="text-lg font-bold text-slate-900">Quick Actions</h3>
            </div>
            <div className="grid gap-3">
              <Link 
                className="group rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1 hover:border-blue-300" 
                href="/students"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-blue-100 p-2.5 transition-transform duration-300 group-hover:scale-110">
                    <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <span className="flex-1">Mark Attendance</span>
                  <svg className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
              <Link 
                className="group rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1 hover:border-red-300" 
                href="/alerts"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-red-100 p-2.5 transition-transform duration-300 group-hover:scale-110">
                    <svg className="h-5 w-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <span className="flex-1">View Alerts</span>
                  <svg className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
              <Link 
                className="group rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1 hover:border-purple-300" 
                href="/anomalies"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-purple-100 p-2.5 transition-transform duration-300 group-hover:scale-110">
                    <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <span className="flex-1">Detect Anomalies</span>
                  <svg className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl animate-slide-up card-hover" style={{animationDelay: '0.2s'}}>
          <div className="h-1 bg-gradient-to-r from-amber-500 to-amber-400"></div>
          <div className="relative p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-2.5 w-2.5 rounded-full bg-amber-500 animate-pulse"></div>
              <h3 className="text-lg font-bold text-slate-900">System Status</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-blue-50 to-white p-4 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Tracking</div>
                <div className="mt-2 text-xl font-bold text-blue-600">Daily</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-red-50 to-white p-4 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Alerts</div>
                <div className="mt-2 text-xl font-bold text-red-600">Smart</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-green-50 to-white p-4 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Reports</div>
                <div className="mt-2 text-xl font-bold text-green-600">Live</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-purple-50 to-white p-4 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Database</div>
                <div className="mt-2 text-xl font-bold text-purple-600">Oracle</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
