import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Obada Portfolio",
  description: "A modern portfolio built with Next.js, React, TailwindCSS, and Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
        {children}
      </body>
    </html>
  );
}
