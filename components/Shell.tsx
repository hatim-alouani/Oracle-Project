import Navbar from "./Navbar";

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50">
      {/* Professional background pattern */}
      <div className="fixed inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10">
        <Navbar />
        <main className="py-8 animate-fade-in">
          <div className="container-page">{children}</div>
        </main>
        <footer className="mt-20 border-t border-slate-200 bg-slate-800 text-white py-12">
          <div className="container-page">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-3">Attendance Portal</h3>
                <p className="text-sm text-slate-300">
                  Advanced analytics and anomaly detection system for educational institutions.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3">Quick Links</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li><a href="/students" className="hover:text-white transition">Students</a></li>
                  <li><a href="/reports" className="hover:text-white transition">Reports</a></li>
                  <li><a href="/settings" className="hover:text-white transition">Settings</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3">Contact</h3>
                <p className="text-sm text-slate-300">
                  For support and inquiries<br/>
                  alouanihatim01@gmail.com
                </p>
              </div>
            </div>
            <div className="border-t border-slate-700 pt-8 text-center">
              <div className="text-sm text-slate-400">
                © {new Date().getFullYear()} Attendance Analytics System. All rights reserved.
              </div>
              <div className="text-xs text-slate-500 mt-2">
                Powered by Oracle Database • Fastify • Next.js
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
