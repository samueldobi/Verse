import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Verse",
  description: "Learn local languages with friends ",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
 className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-500/20 selection:text-blue-900 dark:selection:bg-blue-400/30 dark:selection:text-blue-100`}
>
  <div className="relative min-h-screen">
    {/* Optional: Subtle background pattern */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.03),transparent_50%)] pointer-events-none" />
    <Navbar/>
    {/* Main content wrapper */}
    <div className="relative z-10">{children}</div>
    <Footer/>
  </div>
</body>
    </html>
  );
}
