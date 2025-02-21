import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow">
    <div className="container mx-auto px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="/">
          <Image
            src="/signature.png"
            alt="Signature"
            width={200}
            height={85}
            quality={100} // Ensures maximum image quality
            unoptimized
            className="object-contain w-auto h-auto max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[220px] xl:max-w-[250px]"
          />
        </a>

          {/* Navigation */}
          <nav className="flex space-x-4 sm:space-x-6 text-gray-800 text-xs sm:text-base md:text-lg">
            {/* TODO: Enable next-intl */}
            {/* <a className="hover:text-gray-600" href="#">
              Traducir
            </a> */}
            <a className="hover:text-gray-600" href="https://www.sebastianrojas.lat/about">
              About
            </a>
            <a className="hover:text-gray-600" href="https://drive.google.com/file/d/1V_3O6arDD_0yRASmYLYseDg77FqYoZNm/view?usp=sharing">
              CV
            </a>
            <a className="hover:text-gray-600" href="#footer">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
