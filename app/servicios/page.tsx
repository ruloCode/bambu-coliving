import { Button } from "@/components/ui/button"
import { Check, Wifi, Sparkles, Calendar, UtensilsCrossed, Dumbbell } from "lucide-react"
import Link from "next/link"

export default function Services() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-teal-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="max-w-2xl mx-auto">
            En Plura Coliving, ofrecemos todo lo que necesitas para una experiencia de vida cómoda y productiva.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Wifi className="h-6 w-6 text-teal-600" />
              </div>
              <h2 className="text-xl font-bold mb-2">Internet de Alta Velocidad</h2>
              <p className="text-gray-600 mb-4">
                Conexión WiFi de 300 Mbps en todas las áreas del edificio, ideal para trabajo remoto y streaming.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                  <span>Fibra óptica de alta velocidad</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                  <span>Red dedicada para trabajo</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                  <span>Soporte técnico disponible</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="bg-rose-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-rose-600" />
              </div>
              <h2 className="text-xl font-bold mb-2">Limpieza y Mantenimiento</h2>
              <p className="text-gray-600 mb-4">
                Servicio de limpieza regular para áreas comunes y opción de limpieza para habitaciones privadas.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-rose-600 mt-0.5" />
                  <span>Limpieza diaria de áreas comunes</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-rose-600 mt-0.5" />
                  <span>Limpieza semanal de habitaciones (opcional)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-rose-600 mt-0.5" />
                  <span>Mantenimiento 24/7</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-teal-600" />
              </div>
              <h2 className="text-xl font-bold mb-2">Eventos Comunitarios</h2>
              <p className="text-gray-600 mb-4">
                Actividades semanales para fomentar la comunidad y el networking entre residentes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                  <span>Happy hours semanales</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                  <span>Talleres y charlas profesionales</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                  <span>Excursiones y actividades culturales</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="bg-rose-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <UtensilsCrossed className="h-6 w-6 text-rose-600" />
              </div>
              <h2 className="text-xl font-bold mb-2">Servicios de Cocina</h2>
              <p className="text-gray-600 mb-4">
                Cocina completamente equipada y servicios adicionales para tu comodidad.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-rose-600 mt-0.5" />
                  <span>Desayuno continental (opcional)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-rose-600 mt-0.5" />
                  <span>Cenas comunitarias semanales</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-rose-600 mt-0.5" />
                  <span>Servicio de café y té gratuito</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Dumbbell className="h-6 w-6 text-teal-600" />
              </div>
              <h2 className="text-xl font-bold mb-2">Bienestar y Fitness</h2>
              <p className="text-gray-600 mb-4">
                Servicios para mantener un estilo de vida saludable durante tu estancia.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                  <span>Gimnasio 24/7</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                  <span>Clases de yoga (2 veces por semana)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                  <span>Asesoramiento de bienestar</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="bg-rose-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Wifi className="h-6 w-6 text-rose-600" />
              </div>
              <h2 className="text-xl font-bold mb-2">Servicios Adicionales</h2>
              <p className="text-gray-600 mb-4">
                Complementa tu experiencia con nuestros servicios premium adicionales.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-rose-600 mt-0.5" />
                  <span>Servicio de lavandería</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-rose-600 mt-0.5" />
                  <span>Recepción de paquetes</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-rose-600 mt-0.5" />
                  <span>Asistencia para turismo local</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Included Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Servicios Incluidos en tu Estancia</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                <span>WiFi de alta velocidad (300 Mbps)</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                <span>Servicios básicos (agua, luz, gas)</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                <span>Limpieza de áreas comunes</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                <span>Acceso a todas las áreas comunes</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                <span>Mantenimiento del edificio</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                <span>Seguridad 24/7</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                <span>Participación en eventos comunitarios</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                <span>Café y té gratuitos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para experimentar Plura?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Reserva ahora y disfruta de todos nuestros servicios premium desde el primer día.
          </p>
          <Button asChild size="lg" className="rounded-full px-8 bg-white text-teal-600 hover:bg-gray-100">
            <Link href="/habitaciones">Explorar habitaciones</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
