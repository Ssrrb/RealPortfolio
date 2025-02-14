// pages/Projects.jsx

import React from 'react'
import Image from 'next/image'

export default function Projects() {
  return (
    <section className="w-full bg-white py-12 px-4 md:py-16 md:px-8 lg:px-16">
      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        {/* Use a responsive grid: single column on mobile, two columns on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
          
          {/* Left Column */}
          <div className="flex flex-col">
            {/* Small subheading */}
            <p className="text-sm font-semibold text-gray-500 mb-1">Google</p>
            
            {/* Main heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certification
            </h1>
            
            {/* Tag list */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                Cloud
              </span>
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                CI/CD
              </span>
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                Kubernetes
              </span>
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                Machine Learning
              </span>
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                Big Data
              </span>
            </div>

            {/* Call-to-action button */}
            <a href="https://www.credly.com/badges/481045c7-3588-4e12-906f-e24610f71981/public_url" target="_blank" rel="noopener noreferrer" className="w-fit bg-black text-white py-2 px-6 rounded font-medium hover:bg-gray-800 transition">
              View Cert
              </a>
          </div>

          {/* Right Column: Phone mockup */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/medias/certification.png"
              alt="Certification"
              width={400}
              height={600}
              className="w-auto h-auto max-w-full"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
