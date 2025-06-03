import Image from "next/image"
import { Dumbbell, Users, Tv } from "lucide-react"

export default function GymSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-xl overflow-hidden order-last lg:order-first">
            <Image 
            src="/images/Creativos2.jpg" 
            alt="Gimnasio" 
            fill 
            className="object-cover" />
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
  )
}