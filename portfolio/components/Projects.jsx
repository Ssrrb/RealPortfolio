import React from 'react'
import ProjectCard from '../components/ProjectCard'

const projectsData = [
  {
    subtitle: 'Google',
    title: 'Certification',
    tags: ['Cloud', 'CI/CD', 'Kubernetes', 'Machine Learning', 'Big Data'],
    ctaUrl: 'https://www.credly.com/badges/481045c7-3588-4e12-906f-e24610f71981/public_url',
    ctaLabel: 'View Cert',
    imageSrc: '/medias/certification.png',
    imageAlt: 'Certification'
  },
  {
    subtitle: 'Game',
    title: 'Generala',
    tags: ['C', 'Git', 'Low-level'],
    ctaUrl: 'https://github.com/Ssrrb/Generala-en-C',
    ctaLabel: 'View Project',
    imageSrc: '/medias/Generala.png',
    imageAlt: 'Juego'
  }
  // Add more projects here with the same key data structure.
]

export default function Projects() {
  return (
    <section className="w-full bg-white py-10 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {projectsData.map((project, index) => (
          <div key={index} className="mb-20">
            <ProjectCard {...project} />
            {index !== projectsData.length - 1 && (
              <header className="flex items-center justify-center py-5 border-b border-gray-200 mt-10"></header>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
