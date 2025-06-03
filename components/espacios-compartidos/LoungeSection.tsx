import Image from "next/image"
import { Tv, Users, Coffee } from "lucide-react"

export default function LoungeSection() {
  return (
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
            <Image 
            src="/images/Creativos1.jpg" 
            alt="Sala de Estar" 
            fill 
            className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}