import TestimonialCard from "@/components/testimonial-card"
import { testimonialsContent } from "@/content"

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">{testimonialsContent.title}</h2>
        <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">
          {testimonialsContent.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsContent.testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.name}-${index}`}
              name={testimonial.name}
              origin={testimonial.origin}
              quote={testimonial.quote}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
