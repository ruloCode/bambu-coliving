import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, MessageCircle, Calendar, MapPin, Wifi, Coffee, Heart, Star } from "lucide-react"
import Link from "next/link"
import { comunidadContent } from "@/content"

// Icon mapping
const iconMap = {
  MessageCircle,
  Calendar,
  Wifi,
  MapPin,
  Coffee,
  Heart,
  Users
}

export default function ComunidadPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className={`relative py-24 ${comunidadContent.header.backgroundColor}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full mb-6">
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium">Nuestra Comunidad</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {comunidadContent.header.title.split("Bambu Coliving")[0]}
              <span className="text-teal-600">Bambu Coliving</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {comunidadContent.header.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                <Link href="/reserva">Únete Ahora</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/planes">Explora Planes</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {comunidadContent.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">¿Qué hace especial nuestra comunidad?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Más que un lugar para vivir, somos una familia global que se apoya mutuamente
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comunidadContent.features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap]
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Lo que dicen nuestros miembros</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comunidadContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-600 font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.origin}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {comunidadContent.cta.title}
          </h2>
          <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
            {comunidadContent.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {comunidadContent.cta.buttons.map((button, index) => (
              <Button 
                key={index}
                asChild 
                size="lg" 
                className={button.primary 
                  ? "bg-white text-teal-600 hover:bg-gray-100" 
                  : "border-white hover:bg-white hover:text-teal-600"
                }
                variant={button.primary ? "default" : "outline"}
              >
                <Link href={button.href}>{button.text}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 