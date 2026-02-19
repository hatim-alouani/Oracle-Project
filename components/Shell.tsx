import TopBar from "./TopBar";
import Navbar from "./Navbar";

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      {/* Subtle background overlay */}
      <div className="fixed inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10"></div>
      
      <div className="relative z-10">
        <TopBar />
        <Navbar />
        <main className="py-12">
          <div className="container-page">{children}</div>
        </main>
        <footer className="mt-20 border-t border-white/20 bg-white/60 backdrop-blur-xl py-8">
          <div className="container-page text-center">
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} Attendance Analytics System
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Powered by Oracle DB • Fastify • Next.js
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
