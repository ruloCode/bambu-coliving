import { Button } from "@/components/ui/button"
import { Check, Wifi, Sparkles, Calendar, UtensilsCrossed, Dumbbell } from "lucide-react"
import Link from "next/link"
import { servicesContent } from "@/content"

// Map of icon names to Lucide icon components
const iconMap = {
  Wifi,
  Sparkles,
  Calendar,
  UtensilsCrossed,
  Dumbbell,
}

export default function Services() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-teal-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{servicesContent.header.title}</h1>
          <p className="max-w-2xl mx-auto">
            {servicesContent.header.description}
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesContent.services.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap]
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className={`bg-${service.colorScheme}-100 w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                    <IconComponent className={`h-6 w-6 text-${service.colorScheme}-600`} />
                  </div>
                  <h2 className="text-xl font-bold mb-2">{service.title}</h2>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className={`h-5 w-5 text-${service.colorScheme}-600 mt-0.5`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Included Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Servicios Incluidos en tu Estancia</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {servicesContent.includedServices.map((service, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{servicesContent.cta.title}</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            {servicesContent.cta.description}
          </p>
          <Button asChild size="lg" className="rounded-full px-8 bg-white text-teal-600 hover:bg-gray-100">
            <Link href={servicesContent.cta.buttonLink}>{servicesContent.cta.buttonText}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
