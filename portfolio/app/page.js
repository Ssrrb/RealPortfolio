"use client";

import styles from "./page.module.css";
import dynamic from "next/dynamic";
import Projects from "../components/Projects"

const Scene = dynamic(() => import("../components/Scene"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-screen w-full">
      <p className="text-lg font-semibold">Loading...</p>
    </div>
  )
});




export default function Home() {
  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <div id="hero-section" className="w-full">
        <Scene />
      </div>

      {/* Projects Section */}
      <div id="projects-section" className="w-full py-10">
      <header className="flex items-center justify-center py-5 border-b border-gray-200">
      </header>
      <header className="flex items-center justify-center py-5 border-b border-gray-200">
      <h1 className="text-xl font-semibold tracking-wide">PROYECTOS</h1>
      </header>
        <Projects />
      </div>

      {/* Add more sections here as needed */}
    </div>
  );
}
