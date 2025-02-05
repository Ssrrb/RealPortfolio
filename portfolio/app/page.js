"use client"; // Mark this file as a Client Component

import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/Scene'), {
  ssr: false,
});

export default function Hero() {
  return (
    <main className="relative h-screen">
      <Scene />
    </main>
  );
}
