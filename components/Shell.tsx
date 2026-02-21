import Navbar from "./Navbar";

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 flex flex-col">
      {/* Professional background pattern */}
      <div className="fixed inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 py-8 animate-fade-in">
          <div className="container-page">{children}</div>
        </main>
        <footer className="border-t border-slate-200 bg-slate-800 text-white py-6 mt-auto">
          <div className="container-page">
            <div className="grid md:grid-cols-3 gap-6 mb-4">
              <div>
                <h3 className="font-bold text-base mb-2">Attendance Portal</h3>
                <p className="text-xs text-slate-300">
                  Advanced analytics and anomaly detection system for educational institutions.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-base mb-2">Quick Links</h3>
                <ul className="space-y-1 text-xs text-slate-300">
                  <li><a href="/students" className="hover:text-white transition">Students</a></li>
                  <li><a href="/reports" className="hover:text-white transition">Reports</a></li>
                  <li><a href="/settings" className="hover:text-white transition">Settings</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-base mb-2">Contact</h3>
                <p className="text-xs text-slate-300">
                  For support and inquiries<br/>
                  alouanihatim01@gmail.com
                </p>
              </div>
            </div>
            <div className="border-t border-slate-700 pt-4 text-center">
              <div className="text-xs text-slate-400">
                © {new Date().getFullYear()} Attendance Analytics System. All rights reserved.
              </div>
              <div className="text-xs text-slate-500 mt-1">
                Powered by Oracle Database • Fastify • Next.js
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
