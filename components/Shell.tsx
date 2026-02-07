import TopBar from "./TopBar";
import Navbar from "./Navbar";

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <main className="py-8">
        <div className="container-page">{children}</div>
      </main>
      <footer className="mt-10 border-t border-black/10 py-6">
        <div className="container-page text-xs text-black/60">
          © {new Date().getFullYear()} Attendance Analytics System — Oracle DB / n8n / Next.js
        </div>
      </footer>
    </div>
  );
}
