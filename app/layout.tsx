import "./globals.css";
import type { Metadata } from "next";
import Shell from "@/components/Shell";

export const metadata: Metadata = {
  title: "Attendance Portal",
  description: "Attendance Analytics and Anomaly Detection System",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
