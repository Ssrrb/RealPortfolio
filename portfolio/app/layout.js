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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`antialiased`}
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        <Header />
        <main className="mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
