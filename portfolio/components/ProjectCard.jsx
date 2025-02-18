import React from 'react'
import Image from 'next/image'

const ProjectCard = ({ subtitle, title, tags, ctaUrl, ctaLabel, imageSrc, imageAlt }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
      {/* Left Column */}
      <div className="flex flex-col">
        {/* Small subheading */}
        <p className="text-sm font-semibold text-gray-500 mb-1">{subtitle}</p>
        
        {/* Main heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h1>
        
        {/* Tag list */}
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

        {/* Call-to-action button */}
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
      <div className="flex justify-center md:justify-end">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={600}
          className="w-auto h-auto max-w-full"
        />
      </div>
    </div>
  )
}

export default ProjectCard
