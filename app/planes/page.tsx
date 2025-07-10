import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { comunidadContent } from "@/content"

export default function PlanesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-teal-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full mb-6">
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium">Planes Bambu</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Explora <span className="text-teal-600">Bogotá</span> con nosotros
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Descubre la ciudad a través de experiencias únicas diseñadas para conectar con la cultura local y nuestra comunidad.
            </p>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comunidadContent.upcomingPlans.plans.map((plan) => (
              <Card key={plan.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 w-full">
                  <Image
                    src={plan.image}
                    alt={plan.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="bg-teal-50">
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {plan.title}
                  </CardTitle>
                  <Badge className="bg-teal-100 text-teal-800">
                    {plan.subtitle}
                  </Badge>
                </CardHeader>
                <CardContent className="p-6">
                  <CardDescription className="text-gray-600 leading-relaxed mb-4">
                    {plan.description}
                  </CardDescription>
                  <Button 
                    asChild 
                    className="w-full bg-teal-600 hover:bg-teal-700"
                  >
                    <Link href={plan.registerLink}>Registrarme</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para explorar Bogotá con nosotros?
          </h2>
          <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad y vive experiencias únicas en la ciudad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-teal-600 hover:bg-gray-100"
            >
              <Link href="/reserva">Reserva tu habitación</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              className="border-white hover:bg-white hover:text-teal-600"
              variant="outline"
            >
              <Link href="/comunidad">Conoce la comunidad</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 