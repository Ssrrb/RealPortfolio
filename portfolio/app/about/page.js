
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
          Soy Sebastián Rojas, estudiante de Análisis de Sistemas en la Universidad Católica de Asunción. También trabajo en la intersección entre software, automatización y soluciones impulsadas por IA.

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
              Formacion
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-700 max-w-2xl">
              <p>
                {/* Place your background text here. For example: */}
                Nacido y criado en Asunción, Paraguay, siempre me ha impulsado la resolución de problemas y generar un impacto significativo. Mi perspectiva cambió cuando comprendí que la tecnología es el punto donde los algoritmos se encuentran con las personas. La innovación adecuada, creada por las mentes adecuadas, no solo soluciona un problema, sino que escala, transforma industrias y empodera comunidades.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="my-work">
            <AccordionTrigger className="py-3 text-lg font-medium text-left border-b border-gray-300 flex justify-between items-center">
            Cómo Construyo y Pienso
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-700 max-w-2xl">
              <p>
              Los mejores creadores no solo piensan, también construyen. Incluso las mejores ideas no valen nada sin ejecución. Por eso, me mantengo siempre como estudiante y trabajador, experimentando, iterando y refinando. La única manera de aprender verdaderamente es construir, romper y reconstruir.

                {/* Place your design philosophy text here. */}

              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="tech, people and impact">
            <AccordionTrigger className="py-3 text-lg font-medium text-left border-b border-gray-300 flex justify-between items-center">
            Tecnología, Personas e Impacto
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-700 max-w-2xl">
              <p>
                {/* Place your 'things I love' text here. */}
                El software está transformando todas las empresas, y la clave del éxito es replantear el uso de los datos. Al desbloquear valor a través de una cultura basada en datos, optimización, predicción y automatización, ayudo a las empresas a adoptar tecnología de clase mundial. Pero más allá de las habilidades técnicas, valoro los principios sólidos, la comunicación clara y el trabajo en equipo. Si estás construyendo algo ambicioso en IA, fintech o automatización y buscas conectar con alguien que desafía lo normal, contactame
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
