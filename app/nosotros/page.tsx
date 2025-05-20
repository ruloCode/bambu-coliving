import { Button } from "@/components/ui/button"
import { MapPin, Mail, Phone } from "lucide-react"
import Image from "next/image"
import ContactForm from "@/components/contact-form"

export default function AboutUs() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-teal-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Quiénes Somos</h1>
          <p className="max-w-2xl mx-auto">
            Conoce más sobre Plura Coliving, nuestra misión y el equipo detrás de este proyecto.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
              <p className="text-gray-600 mb-6">
                En Plura Coliving, nuestra misión es crear espacios de vida que fomenten la comunidad, la productividad
                y el bienestar. Creemos en el poder de los entornos compartidos para impulsar la creatividad y las
                conexiones significativas.
              </p>
              <p className="text-gray-600 mb-6">
                Nos esforzamos por ofrecer una experiencia de coliving que combine la comodidad de un hogar con las
                ventajas de una comunidad global, todo ello en una ubicación privilegiada en el corazón de Bogotá.
              </p>
              <h2 className="text-3xl font-bold mb-4">Nuestra Visión</h2>
              <p className="text-gray-600">
                Aspiramos a redefinir la forma en que las personas viven y trabajan en la era digital, creando un
                ecosistema donde nómadas digitales, emprendedores y profesionales puedan prosperar personal y
                profesionalmente.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Equipo de Plura Coliving"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">Comunidad</h3>
              <p className="text-gray-600">
                Creemos en el poder de las conexiones humanas y en crear espacios que fomenten relaciones significativas
                entre personas de diversos orígenes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">Sostenibilidad</h3>
              <p className="text-gray-600">
                Nos comprometemos a implementar prácticas sostenibles en nuestras operaciones diarias y a minimizar
                nuestro impacto ambiental.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">Innovación</h3>
              <p className="text-gray-600">
                Buscamos constantemente nuevas formas de mejorar la experiencia de coliving, adaptándonos a las
                necesidades cambiantes de nuestra comunidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Nuestra Ubicación</h2>
              <p className="text-gray-600 mb-6">
                Plura Coliving está estratégicamente ubicado en el barrio San Felipe de Bogotá, un área vibrante
                conocida por su escena artística, restaurantes de moda y excelente conectividad.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-teal-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Dirección</h3>
                    <p className="text-gray-600">Cra. 20A #74-55, San Felipe, Bogotá, Colombia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-teal-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Teléfono</h3>
                    <p className="text-gray-600">+57 (601) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-teal-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">info@pluracoliving.co</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button asChild variant="outline" className="rounded-full">
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    Ver en Google Maps
                  </a>
                </Button>
              </div>
            </div>
            <div className="h-[400px] rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5742788531586!2d-74.0651!3d4.6686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a3b3b3b3b3b%3A0x8e3f9a3b3b3b3b3b!2sSan%20Felipe%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sco!4v1620000000000!5m2!1ses!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Plura Coliving"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Contáctanos</h2>
            <p className="text-gray-600 mb-8 text-center">
              ¿Tienes alguna pregunta o comentario? Completa el formulario a continuación y nos pondremos en contacto
              contigo lo antes posible.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
