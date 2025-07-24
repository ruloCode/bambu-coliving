import { Button } from "@/components/ui/button"
import { MapPin, Mail, Phone } from "lucide-react"
import Image from "next/image"
import ContactForm from "@/components/contact-form"
import { aboutUsContent } from "@/content"

// Map of icon names to Lucide icon components
const iconMap = {
  MapPin,
  Mail,
  Phone,
}

export default function AboutUs() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-teal-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{aboutUsContent.header.title}</h1>
          <p className="max-w-2xl mx-auto">
            {aboutUsContent.header.description}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">{aboutUsContent.missionVision.mission.title}</h2>
              {aboutUsContent.missionVision.mission.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-600 mb-6">
                  {paragraph}
                </p>
              ))}
              <h2 className="text-3xl font-bold mb-4">{aboutUsContent.missionVision.vision.title}</h2>
              <p className="text-gray-600">
                {aboutUsContent.missionVision.vision.description}
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src={aboutUsContent.missionVision.image.src}
                alt={aboutUsContent.missionVision.image.alt}
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
          <h2 className="text-3xl font-bold mb-8 text-center">{aboutUsContent.values.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutUsContent.values.items.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="ubicacion" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">{aboutUsContent.location.title}</h2>
              <p className="text-gray-600 mb-6">
                {aboutUsContent.location.description}
              </p>
              <div className="space-y-4">
                {aboutUsContent.location.contactInfo.map((info, index) => {
                  const IconComponent = iconMap[info.icon as keyof typeof iconMap]
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <IconComponent className="h-5 w-5 text-teal-600 mt-1" />
                      <div>
                        <h3 className="font-semibold">{info.label}</h3>
                        <p className="text-gray-600">{info.value}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="mt-6">
                <Button asChild variant="outline" className="rounded-full">
                  <a href={aboutUsContent.location.mapUrl} target="_blank" rel="noopener noreferrer">
                    {aboutUsContent.location.mapButtonText}
                  </a>
                </Button>
              </div>
            </div>
            <div className="h-[400px] rounded-xl overflow-hidden">
              <iframe
                src={aboutUsContent.location.embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Bambu Coliving"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacto" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{aboutUsContent.contact.title}</h2>
            <p className="text-gray-600 mb-8 text-center">
              {aboutUsContent.contact.description}
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
