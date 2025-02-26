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
            Construyo sistemas inteligentes que conectan tecnología y personas, transformando ideas en soluciones escalables y automatizadas.{" "}
            Mi objetivo es ayudar a las personas a través del software.
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
              Formación
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-700 max-w-2xl">
              <p>
                Crecí en Asunción, Paraguay, y desde siempre me ha obsesionado cómo{" "}
                <strong>las ideas se convierten en sistemas funcionales. </strong>  
                 No se trata de programar el algoritmo más complejo, sino de{" "}
                <strong>crear el mayor impacto posible</strong> para ayudar en escala a las personas a lograr y alcanzar más.  
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="my-work">
            <AccordionTrigger className="py-3 text-lg font-medium text-left border-b border-gray-300 flex justify-between items-center">
              Cómo Puedo Ayudarte
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-700 max-w-2xl">
              <p>
                En un mundo digital globalizado donde todos estamos conectados, es necesario{" "}
                <strong>destacarse a través de la tecnología. </strong>  
                Con mi experiencia en IA, desarrollo web, automatización e Ingeniería de datos, puedo ayudarte a transformar tu producto o marca en una solución{" "}
                inteligente y escalable de impacto global.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="tech-people-impact">
            <AccordionTrigger className="py-3 text-lg font-medium text-left border-b border-gray-300 flex justify-between items-center">
              Mi Trabajo con Tecnología
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-700 max-w-2xl">
              <p>
                La tecnología es una herramienta. Lo que realmente importa es cómo se usa.  
                Ayudo a las personas y empresas a aprovecharla, no solo con código, sino con una{" "}
                <strong>visión estratégica orientada a resultados. </strong>  
                Pero más allá de lo técnico, creo en
                principios sólidos, comunicación clara y ejecución. {" "}  
                <strong>Si estás construyendo algo ambicioso o buscas ayuda, contáctame.</strong>
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
