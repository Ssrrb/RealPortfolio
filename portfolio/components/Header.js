import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#">
            <Image
              src="/signature.png"
              alt="Signature"
              width={200}
              height={85}
              className="object-contain w-32 sm:w-40 md:w-52"
            />
          </a>

          {/* Navigation */}
          <nav className="flex space-x-4 sm:space-x-6 text-gray-800 text-xs sm:text-base md:text-lg">
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
