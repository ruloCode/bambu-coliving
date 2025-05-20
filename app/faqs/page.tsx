import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FAQs() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-teal-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Preguntas Frecuentes</h1>
          <p className="max-w-2xl mx-auto">Encuentra respuestas a las preguntas más comunes sobre Plura Coliving.</p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Sobre las Reservas</h2>
            <Accordion type="single" collapsible className="mb-10">
              <AccordionItem value="item-1">
                <AccordionTrigger>¿Cuál es el proceso de reserva?</AccordionTrigger>
                <AccordionContent>
                  El proceso de reserva es sencillo: selecciona tu habitación preferida, elige las fechas de tu
                  estancia, completa tus datos personales y realiza el pago. Una vez confirmada la reserva, recibirás un
                  correo electrónico con todos los detalles.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>¿Cuál es la estancia mínima?</AccordionTrigger>
                <AccordionContent>
                  La estancia mínima en Plura Coliving es de 1 mes. Ofrecemos descuentos especiales para estancias de 3,
                  6 y 12 meses.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>¿Qué métodos de pago aceptan?</AccordionTrigger>
                <AccordionContent>
                  Aceptamos tarjetas de crédito y débito internacionales (Visa, Mastercard, American Express),
                  transferencias bancarias y PayPal. Todos los pagos se procesan de manera segura a través de nuestra
                  plataforma.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>¿Cuál es la política de cancelación?</AccordionTrigger>
                <AccordionContent>
                  Si cancelas con más de 30 días de anticipación a tu llegada, recibirás un reembolso del 100% menos los
                  gastos de gestión. Para cancelaciones entre 15-30 días antes, el reembolso será del 50%. No hay
                  reembolsos para cancelaciones con menos de 15 días de anticipación.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <h2 className="text-2xl font-bold mb-6">Sobre la Estancia</h2>
            <Accordion type="single" collapsible className="mb-10">
              <AccordionItem value="item-5">
                <AccordionTrigger>¿Qué incluye el precio mensual?</AccordionTrigger>
                <AccordionContent>
                  El precio mensual incluye alojamiento, todos los servicios básicos (agua, luz, gas), internet de alta
                  velocidad, limpieza de áreas comunes, acceso a todas las instalaciones compartidas y participación en
                  eventos comunitarios.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>¿Puedo recibir visitas?</AccordionTrigger>
                <AccordionContent>
                  Sí, puedes recibir visitas durante el día. Para visitas que pernocten, debes notificar con
                  anticipación y podría aplicar un cargo adicional según la duración de la estancia.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>¿Se permiten mascotas?</AccordionTrigger>
                <AccordionContent>
                  Sí, Plura Coliving es pet-friendly. Aceptamos mascotas pequeñas y medianas con un depósito adicional.
                  Por favor, infórmanos sobre tu mascota al momento de hacer la reserva.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>¿Hay servicio de limpieza para las habitaciones?</AccordionTrigger>
                <AccordionContent>
                  Ofrecemos servicio de limpieza semanal para las habitaciones con un costo adicional. Las áreas comunes
                  se limpian diariamente sin costo extra.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <h2 className="text-2xl font-bold mb-6">Sobre las Instalaciones</h2>
            <Accordion type="single" collapsible className="mb-10">
              <AccordionItem value="item-9">
                <AccordionTrigger>¿Cómo es la conexión a internet?</AccordionTrigger>
                <AccordionContent>
                  Ofrecemos conexión WiFi de fibra óptica de 300 Mbps en todo el edificio, con una red dedicada para
                  trabajo que garantiza estabilidad y velocidad para videoconferencias y tareas exigentes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10">
                <AccordionTrigger>¿Hay espacios para trabajar?</AccordionTrigger>
                <AccordionContent>
                  Sí, contamos con un espacio de coworking completamente equipado con escritorios ergonómicos, sillas
                  cómodas, salas de reuniones y áreas de descanso para maximizar tu productividad.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-11">
                <AccordionTrigger>¿Qué medidas de seguridad tienen?</AccordionTrigger>
                <AccordionContent>
                  La seguridad es una prioridad en Plura Coliving. Contamos con sistema de acceso con tarjeta
                  electrónica, cámaras de seguridad en áreas comunes, personal de seguridad 24/7 y casilleros
                  individuales para objetos de valor.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-12">
                <AccordionTrigger>¿Hay estacionamiento disponible?</AccordionTrigger>
                <AccordionContent>
                  Sí, ofrecemos estacionamiento limitado con un costo adicional. Te recomendamos reservar tu espacio con
                  anticipación si planeas traer vehículo.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿No encontraste lo que buscabas?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Si tienes alguna pregunta adicional, no dudes en contactarnos. Estamos aquí para ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full px-8 bg-teal-600 hover:bg-teal-700">
              <Link href="/nosotros">Contáctanos</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link href="/habitaciones">Explorar habitaciones</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
