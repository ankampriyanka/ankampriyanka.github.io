import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ankam Priyanka",
  description: "AI Governance • Responsible AI • AI Assurance • Program Management",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${Geist.variable} ${Geist_Mono.variable}`}>
        {children}
      </body>
    </html>
  );
}