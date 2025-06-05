import { Wifi, Users, MapPin, Coffee } from "lucide-react"

export default function Benefits() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">¿Por qué elegir Bambu?</h2>
        <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">
          Ofrecemos más que un lugar para vivir. Somos una comunidad donde podrás conectar, crecer y disfrutar.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl text-center">
            <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wifi className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">WiFi de Alta Velocidad</h3>
            <p className="text-gray-600">Conexión estable y rápida para trabajar sin interrupciones.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl text-center">
            <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-rose-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Comunidad Vibrante</h3>
            <p className="text-gray-600">Conoce personas de todo el mundo y expande tu red profesional.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl text-center">
            <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Ubicación Estratégica</h3>
            <p className="text-gray-600">En el corazón de Bogotá, cerca de todo lo que necesitas.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl text-center">
            <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Coffee className="h-8 w-8 text-rose-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Espacios Compartidos</h3>
            <p className="text-gray-600">Coworking, cocina, gimnasio y áreas de descanso a tu disposición.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
