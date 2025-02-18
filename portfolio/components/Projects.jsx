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
  // Add more projects here with the same key data structure.
]

export default function Projects() {
  return (
    <section className="w-full bg-white py-12 px-4 md:py-16 md:px-8 lg:px-16">
      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}
