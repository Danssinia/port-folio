import type { Metadata, Viewport } from "next";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/layout/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MyPortfolio",
    template: "%s | MyPortfolio",
  },
  description: "Daniel Merkebu - Web Developer based in Addis Ababa. Portfolio, services and projects.",
  icons: {
    icon: "/logo.png",
    apple: "/logo192.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="min-h-screen bg-[#0F0F0F] text-white">
        <ThemeProvider>
          <div className="relative overflow-x-clip">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
