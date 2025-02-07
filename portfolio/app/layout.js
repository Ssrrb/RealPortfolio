// app/layout.js
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Sebastian R. Rojas - Portfolio",
  description: "My personal portfolio showcasing projects & experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Header />
        <main className="container mx-auto px-6 my-8">
          {children}
        </main>
      </body>
    </html>
  );
}