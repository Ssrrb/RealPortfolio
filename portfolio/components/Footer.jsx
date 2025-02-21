'use client';

import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import Image from "next/image";

export default function Footer() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <footer 
    id = "footer"
    className={`w-full px-6 py-12 bg-white shadow text-black transition-all border-t border-gray-200`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        {/* Left Icon */}
        <div className="flex items-center justify-center md:justify-start">
          <span className="text-2xl">
          <a href="#">
            <Image
              src="/signature.png"
              alt="Signature"
              width={200}
              height={85}
              className="object-contain w-32 sm:w-40 md:w-52"
            />
          </a>
          </span>
        </div>

        {/* Craft & Contact Sections */}
        <div className="flex justify-between md:justify-center md:space-x-40">
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-1">Projects</p>
            <ul className="mt-2 space-y-1">
              <li>Cert</li>
              <li>Generala</li>
              <li>Coming Soon..</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-1">Contact</p>
            <ul className="mt-2 space-y-1">
              <li><a href="https://www.linkedin.com/in/sebastian-rojas-28674a303/" className="hover:underline">LinkedIn↗</a></li>
              <li><a href="https://github.com/Ssrrb" className="hover:underline">GitHub↗</a></li>
              <li><a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=sirsebastianrojas@gmail.com" className="hover:underline">Mail ↗</a></li>
            </ul>
          </div>
        </div>

        {/* Theme Toggle & Copyright */}
        <div className="flex flex-col items-center md:items-end">
          <p className="mt-4 text-xs">© 2025 Sebastian Rojas. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
