import { Button } from "@/components/ui/button"
import { Users, MessageCircle, Calendar, MapPin, Wifi, Coffee, Heart, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ComunidadPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-teal-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full mb-6">
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium">Nuestra Comunidad</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Únete a la comunidad de
              <span className="text-teal-600"> Bambu Coliving</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Conecta con nómadas digitales, emprendedores y profesionales de todo el mundo. 
              Una comunidad vibrante donde las ideas florecen y las amistades duran para siempre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                <Link href="/reserva">Únete Ahora</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#eventos">Ver Eventos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">150+</div>
              <div className="text-gray-600">Miembros Activos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">25+</div>
              <div className="text-gray-600">Nacionalidades</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">50+</div>
              <div className="text-gray-600">Eventos al Mes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">4.9</div>
              <div className="text-gray-600">Rating Comunidad</div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">¿Qué hace especial nuestra comunidad?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Más que un lugar para vivir, somos una familia global que se apoya mutuamente
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Networking Auténtico</h3>
              <p className="text-gray-600">
                Conecta con profesionales de diversas industrias en un ambiente relajado y natural.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Eventos Regulares</h3>
              <p className="text-gray-600">
                Talleres, charlas, noches de juegos, salidas grupales y mucho más cada semana.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <Wifi className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Coworking Integrado</h3>
              <p className="text-gray-600">
                Trabaja junto a otros profesionales en espacios diseñados para la productividad.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Exploración Local</h3>
              <p className="text-gray-600">
                Descubre Bogotá con guías locales y miembros que conocen los mejores secretos de la ciudad.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <Coffee className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Espacios Sociales</h3>
              <p className="text-gray-600">
                Cocina compartida, sala de estar, terraza y áreas diseñadas para la convivencia.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Apoyo Mutuo</h3>
              <p className="text-gray-600">
                Una red de apoyo para adaptarse a la vida en Bogotá y alcanzar tus metas profesionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="eventos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Próximos Eventos</h2>
            <p className="text-gray-600">No te pierdas nuestras actividades semanales</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image 
                  src="/images/Creativos1.jpg" 
                  alt="Networking Night" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-teal-600 mb-2">Viernes, 25 Enero</div>
                <h3 className="text-xl font-bold mb-2">Networking Night</h3>
                <p className="text-gray-600 mb-4">
                  Una noche para conocer nuevos miembros y compartir experiencias profesionales.
                </p>
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  Registrarse
                </Button>
              </div>
            </div>

            <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image 
                  src="/images/Creativos2.jpg" 
                  alt="Workshop Digital Marketing" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-teal-600 mb-2">Sábado, 26 Enero</div>
                <h3 className="text-xl font-bold mb-2">Workshop: Marketing Digital</h3>
                <p className="text-gray-600 mb-4">
                  Aprende las últimas tendencias en marketing digital con expertos del sector.
                </p>
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  Registrarse
                </Button>
              </div>
            </div>

            <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image 
                  src="/images/Creativos3.jpg" 
                  alt="City Tour Bogotá" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-teal-600 mb-2">Domingo, 27 Enero</div>
                <h3 className="text-xl font-bold mb-2">City Tour: Centro Histórico</h3>
                <p className="text-gray-600 mb-4">
                  Explora el corazón de Bogotá con otros miembros de la comunidad.
                </p>
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  Registrarse
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Lo que dicen nuestros miembros</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "La comunidad de Bambu es increíble. He hecho amigos de todo el mundo y he crecido tanto profesional como personalmente."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-teal-600 font-bold">M</span>
                </div>
                <div>
                  <div className="font-semibold">María González</div>
                  <div className="text-sm text-gray-500">Diseñadora UX, España</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Los eventos y workshops han sido fundamentales para mi crecimiento profesional. Recomiendo 100% vivir aquí."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-teal-600 font-bold">J</span>
                </div>
                <div>
                  <div className="font-semibold">John Smith</div>
                  <div className="text-sm text-gray-500">Desarrollador, USA</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Bambu no es solo un lugar para vivir, es un estilo de vida. La comunidad te abraza desde el primer día."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-teal-600 font-bold">L</span>
                </div>
                <div>
                  <div className="font-semibold">Lucia Ferrari</div>
                  <div className="text-sm text-gray-500">Marketing Manager, Italia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para formar parte de nuestra comunidad?
          </h2>
          <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
            Únete a Bambu Coliving y descubre una nueva forma de vivir, trabajar y conectar en Bogotá.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
              <Link href="/reserva">Reserva tu habitación</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white text-black">
              <Link href="/nosotros">Contáctanos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 