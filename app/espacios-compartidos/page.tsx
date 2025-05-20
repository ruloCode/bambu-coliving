import Image from "next/image"
import { Wifi, Users, Coffee, Dumbbell, Utensils, Tv } from "lucide-react"

export default function SharedSpaces() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-teal-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Espacios Compartidos</h1>
          <p className="max-w-2xl mx-auto">
            Descubre las áreas comunes diseñadas para fomentar la comunidad, productividad y bienestar.
          </p>
        </div>
      </section>

      {/* Coworking Space */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 px-4 py-1 rounded-full mb-4">
                <Coffee className="h-4 w-4" />
                <span className="text-sm font-medium">Coworking</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Espacio de Coworking</h2>
              <p className="text-gray-600 mb-6">
                Nuestro espacio de coworking está diseñado para maximizar tu productividad. Con escritorios ergonómicos,
                sillas cómodas, y un ambiente inspirador, tendrás todo lo que necesitas para trabajar eficientemente.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Wifi className="h-5 w-5 text-teal-600" />
                  <span>Internet de alta velocidad (300 Mbps)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Coffee className="h-5 w-5 text-teal-600" />
                  <span>Café y té gratuitos</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-teal-600" />
                  <span>Salas de reuniones reservables</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-05-14%20a%20las%2014.04.39_2cc26270.jpg-DJzxuBgfK0IzOMmp0tVmjIOzBPVcte.jpeg"
                alt="Espacio de Coworking"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden order-last lg:order-first">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Cocina Compartida"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 px-4 py-1 rounded-full mb-4">
                <Utensils className="h-4 w-4" />
                <span className="text-sm font-medium">Cocina</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Cocina Compartida</h2>
              <p className="text-gray-600 mb-6">
                Nuestra cocina completamente equipada te permite preparar tus comidas favoritas y compartir momentos con
                otros residentes. Un espacio diseñado para fomentar la comunidad a través de la gastronomía.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-rose-600" />
                  <span>Electrodomésticos de alta gama</span>
                </li>
                <li className="flex items-center gap-2">
                  <Coffee className="h-5 w-5 text-rose-600" />
                  <span>Máquina de café profesional</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-rose-600" />
                  <span>Amplio comedor para eventos comunitarios</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lounge */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 px-4 py-1 rounded-full mb-4">
                <Tv className="h-4 w-4" />
                <span className="text-sm font-medium">Sala de estar</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Sala de Estar</h2>
              <p className="text-gray-600 mb-6">
                Un espacio acogedor para relajarte, socializar o disfrutar de una película. Nuestra sala de estar está
                diseñada para el confort y la convivencia.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Tv className="h-5 w-5 text-teal-600" />
                  <span>Smart TV con Netflix, Amazon Prime y Disney+</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-teal-600" />
                  <span>Cómodos sofás y sillones</span>
                </li>
                <li className="flex items-center gap-2">
                  <Coffee className="h-5 w-5 text-teal-600" />
                  <span>Juegos de mesa y libros disponibles</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Sala de Estar" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Gym */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden order-last lg:order-first">
              <Image src="/placeholder.svg?height=400&width=600" alt="Gimnasio" fill className="object-cover" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 px-4 py-1 rounded-full mb-4">
                <Dumbbell className="h-4 w-4" />
                <span className="text-sm font-medium">Gimnasio</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Gimnasio</h2>
              <p className="text-gray-600 mb-6">
                Mantén tu rutina de ejercicios en nuestro gimnasio equipado con máquinas cardiovasculares, pesas y
                espacio para yoga y estiramientos.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Dumbbell className="h-5 w-5 text-rose-600" />
                  <span>Equipamiento de cardio y musculación</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-rose-600" />
                  <span>Clases grupales semanales</span>
                </li>
                <li className="flex items-center gap-2">
                  <Tv className="h-5 w-5 text-rose-600" />
                  <span>Acceso 24/7 para residentes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
