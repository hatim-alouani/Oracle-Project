import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="text-center max-w-5xl mx-auto px-4 animate-fade-in">
        <div className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 mb-8 animate-scale-in">
          <span className="text-2xl">🎓</span>
          <span>Official Educational Portal</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
          Attendance Analytics &<br />
          <span className="text-blue-600">Monitoring System</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Advanced attendance tracking with real-time analytics, anomaly detection, and comprehensive reporting 
          for educational institutions.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Link 
            href="/dashboard" 
            className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-white font-semibold text-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:from-blue-700 hover:to-blue-800"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>Access Dashboard</span>
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
          
          <Link 
            href="/students" 
            className="group relative overflow-hidden rounded-lg border-2 border-slate-300 bg-white px-8 py-4 text-slate-700 font-semibold text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-400 hover:text-blue-700"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>View Students</span>
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 stagger-animation">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 card-hover">
            <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-400 absolute top-0 left-0 right-0"></div>
            <div className="rounded-xl bg-blue-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Real-Time Analytics</h3>
            <p className="text-slate-600">Monitor attendance patterns and trends with live data visualization and comprehensive statistics.</p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 card-hover">
            <div className="h-1 bg-gradient-to-r from-red-500 to-red-400 absolute top-0 left-0 right-0"></div>
            <div className="rounded-xl bg-red-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <svg className="h-8 w-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Smart Alerts</h3>
            <p className="text-slate-600">Automated alert system for at-risk students with customizable thresholds and notifications.</p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 card-hover">
            <div className="h-1 bg-gradient-to-r from-purple-500 to-purple-400 absolute top-0 left-0 right-0"></div>
            <div className="rounded-xl bg-purple-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Comprehensive Reports</h3>
            <p className="text-slate-600">Generate detailed reports for students, classes, and semesters with exportable formats.</p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-sm text-slate-600 font-semibold uppercase tracking-wide">Automated</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-sm text-slate-600 font-semibold uppercase tracking-wide">Monitoring</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">Real-Time</div>
            <div className="text-sm text-slate-600 font-semibold uppercase tracking-wide">Updates</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">Secure</div>
            <div className="text-sm text-slate-600 font-semibold uppercase tracking-wide">Database</div>
          </div>
        </div>
      </div>
    </div>
  );
}

