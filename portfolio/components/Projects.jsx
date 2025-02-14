import Image from 'next/image'

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Header */}
      <header className="flex items-center justify-center py-4 border-b border-gray-200">
      </header>
      <header className="flex items-center justify-center py-4 border-b border-gray-200">
      <h1 className="text-xl font-semibold tracking-wide">PROJECTS</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-10 md:px-8">
        {/* Title / Subtitle */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          No More Lonely Battles
        </h2>
        <p className="text-base md:text-lg text-center max-w-xl mb-6">
          A short description or tagline can go here. Provide context for your app or project.
        </p>

        {/* Call-to-action Button */}
        <button className="px-6 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 mb-8">
          Download
        </button>

        {/* Mockup Image */}
        <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
        </div>
      </main>
    </div>
  )
}
