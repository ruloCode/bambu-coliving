import Image from "next/image"
import { Wifi, Users, Coffee } from "lucide-react"

export default function CoworkingSection() {
  return (
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
              src="images/Creativos1.jpg"
              alt="Espacio de Coworking"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}