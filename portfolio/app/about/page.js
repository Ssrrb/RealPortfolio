
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
          I’m Sebastian Rojas, a Systems Analysis student at Universidad Católica de Asunción,
           I also work full-time in software, automation, and AI-driven solutions.
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
            <AccordionContent className="text-base md:text-lg text-gray-700 max-w-2xl">
              <p>
                {/* Place your background text here. For example: */}
                Born and raised in Asunción, Paraguay, I’ve always been driven by problem-solving and meaningful impact. My perspective shifted when I realized that technology is where algorithms meet people. 
                The right innovation, built by the right minds, doesn’t just fix a problem—it scales, transforms industries, and empowers communities
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="my-work">
            <AccordionTrigger className="py-3 text-lg font-medium text-left border-b border-gray-300 flex justify-between items-center">
            How I Build and Think
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-700 max-w-2xl">
              <p>
                {/* Place your design philosophy text here. */}
                The best creators aren’t just thinkers—they are also builders. Even the greatest ideas are worthless without execution. That’s why I stay both a student and worker experimenting, iterating, and refining. 
                The only way to truly learn is to build, break, and rebuild.

              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="tech, people and impact">
            <AccordionTrigger className="py-3 text-lg font-medium text-left border-b border-gray-300 flex justify-between items-center">
            Technology, People, and Impact
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-700 max-w-2xl">
              <p>
                {/* Place your 'things I love' text here. */}
                Software is transforming every company, and the key to success is rethinking data. 
                By unlocking value through a data-driven culture of decisions through prediction, and automation, I help businesses—embrace world-class technology. 
                But beyond technical skills, I value strong principles, clear communication, and teamwork. 
                If you’re building something ambitious in AI, fintech, or automation and
                want to connect with someone who's ready, let’s make it happen.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
