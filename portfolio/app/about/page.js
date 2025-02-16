
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function About() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-white text-black">
      {/* Main content */}
      <section className="container mx-auto px-4 py-8">
        {/* Title & Subtitle */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Sebastian Rojas
          </h1>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl">
          I’m Sebastian Rojas, a Systems Analysis student at Universidad Católica de Asunción and a full-time AI practitioner. 
          My passion lies in building software solutions that solve real-world problems.
          </p>
        </div>

        {/* Accordion Section */}
        <Accordion
          type="single"
          collapsible
          className="w-full md:w-2/3 lg:w-1/2 space-y-4"
        >
          <AccordionItem value="background">
            <AccordionTrigger className="py-3 text-lg font-medium text-left border-b border-gray-300 flex justify-between items-center">
              Background
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-gray-700">
              <p>
                {/* Place your background text here. For example: */}
                Born and raised in Asunción, Paraguay, I’ve always been driven by the idea that technology can create massive change. My turning point came when I realized that a well-designed algorithm can scale beyond a single problem—impacting entire industries, communities, and economies. 
                That’s why I pursued AI: not just for its complexity, but for its potential to solve problems at a global scale
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="design-philosophy">
            <AccordionTrigger className="py-3 text-lg font-medium text-left border-b border-gray-300 flex justify-between items-center">
              Work Philosophy -- What do I do?
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-gray-700">
              <p>
                {/* Place your design philosophy text here. */}
                I believe the best creators aren’t just thinkers they are builders. Great ideas mean nothing without execution.
                That’s why I push myself to be a student and a practitioner experimenting, and iterating. Action creates progress, and the only way to learn something deeply is to build it, break it, and refine it.

              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="things-i-love">
            <AccordionTrigger className="py-3 text-lg font-medium text-left border-b border-gray-300 flex justify-between items-center">
              Why does it Matter?
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-gray-700">
              <p>
                {/* Place your 'things I love' text here. */}
                I want to work with excellent people who challenge me—those high in integrity, energy, and intelligence. My mission is to solve real-world problems, helping businesses and my country adopt top tier technology: AI and data-driven strategies that drive growth.

A popular expression is that software is eating the world. A consequence to that is that all companies are technology companies, that means that every company in the world needs to have a machine learning and AI strategy. Part of that strategy is to think more seriously about data as there are always mathematical ways to make value.

But technical skill alone isn’t enough. I believe in strong principles, clear communication, and teamwork. Feel free to reach out whether to collaborate, discuss ideas, or build something meaningful together.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
