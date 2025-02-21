import React from 'react'
import Image from 'next/image'
import { imageConfigDefault } from 'next/dist/shared/lib/image-config'

const ProjectCard = ({ subtitle, title, tags, ctaUrl, ctaLabel, imageSrc, imageAlt }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
      {/* Left Column */}
      <div className="flex flex-col">
        <p className="text-sm font-semibold text-gray-500 mb-1">{subtitle}</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit bg-black text-white py-2 px-6 rounded font-medium hover:bg-gray-800 transition"
        >
          {ctaLabel}
        </a>
      </div>

      {/* Right Column: Image mockup */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex justify-center md:justify-end">
        <Image
          src={imageSrc}
          alt={imageAlt}
          quality={100} // Ensures maximum image quality
          unoptimized
          fill // Makes it responsive and fill the parent div
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain rounded-lg"
        />
      </div>
    </div>
  )
}

export default ProjectCard
