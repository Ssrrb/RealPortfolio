// components/Header.js
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow mx-24 my-0">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div>
            <a href="#">
              <Image
                src="/signature.png"
                alt="Signature"
                width={220}
                height={85}
                className="object-contain"
              />
            </a>
          </div>

          <nav className="space-x-8 text-gray-800 text-base lg:text-lg">
            <a className="hover:text-gray-600" href="#">
              Projects
            </a>
            <a className="hover:text-gray-600" href="#">
              About
            </a>
            <a className="hover:text-gray-600" href="#">
              CV
            </a>
            <a className="hover:text-gray-600" href="#">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
