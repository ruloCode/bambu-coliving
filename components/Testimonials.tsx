import TestimonialCard from "@/components/testimonial-card"

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Lo que dicen nuestros residentes</h2>
        <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">
          Experiencias reales de nuestra comunidad internacional.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            name="María González"
            origin="España"
            quote="Encontré en Bambu no solo un lugar para vivir, sino una familia. La ubicación es perfecta y las instalaciones superaron mis expectativas."
            image="/images/persona1.jpg"
          />
          <TestimonialCard
            name="John Smith"
            origin="Estados Unidos"
            quote="Como nómada digital, valoro mucho la conexión a internet y los espacios de trabajo. Bambu ofrece todo eso y más, con una comunidad increíble."
            image="/images/persona2.jpg"
          />
          <TestimonialCard
            name="Luisa Fernández"
            origin="Colombia"
            quote="La flexibilidad de los contratos y la calidad de los espacios hacen de Bambu la mejor opción en Bogotá para profesionales jóvenes."
            image="/images/persona3.jpg"
          />
        </div>
      </div>
    </section>
  )
}
