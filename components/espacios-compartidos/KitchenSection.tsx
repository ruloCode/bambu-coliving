import Image from "next/image"
import { Utensils, Coffee, Users } from "lucide-react"

export default function KitchenSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-xl overflow-hidden order-last lg:order-first">
            <Image
              src="/images/Creativos3.jpg"
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
  )
}