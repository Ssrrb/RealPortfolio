"use client";

import styles from "./page.module.css";
import dynamic from "next/dynamic";
import Projects from "../components/Projects"
const Scene = dynamic(() => import("../components/Scene"), {
  ssr: false,
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
        <Projects />
      </div>

      {/* Add more sections here as needed */}
    </div>
  );
}
