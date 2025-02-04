// app/layout.js

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Ensure correct import path

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sebastian R. Rojas - Portfolio",
  description: "My personal portfolio showcasing projects & experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Reusable Header */}
        <Header />

        {/* 🔹 Ensures consistent width without unnecessary margins */}
        <main className="container mx-auto px-6 my-8">
          {children}
        </main>
      </body>
    </html>
  );
}
