import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow border-b border-gray-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/signature.png"
              alt="Signature"
              width={200}
              height={85}
              quality={100}
              unoptimized
              className="object-contain w-auto h-auto max-w-[120px] sm:max-w-[140px] md:max-w-[180px] lg:max-w-[220px] xl:max-w-[250px]"
            />
          </Link>

          {/* Navigation */}
          <nav className="flex space-x-4 sm:space-x-6 text-gray-800 text-xs sm:text-base md:text-lg">
            {/* TODO: Enable next-intl */}
            {/* <Link className="hover:text-gray-600" href="#">
              Traducir
            </Link> */}
            <Link className="hover:text-gray-600" href="/about">
              Acerca
            </Link>
            <a
              className="hover:text-gray-600"
              href="https://drive.google.com/file/d/1P7f-rIDYMOweq5TSTthaNW-QqDuLntVz/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
            <Link className="hover:text-gray-600" href="#footer">
              Contacto
            </Link>

          </nav>
        </div>
      </div>
    </header>
  );
}
