import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { faqsContent } from "@/content"

export default function FAQs() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-teal-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{faqsContent.header.title}</h1>
          <p className="max-w-2xl mx-auto">{faqsContent.header.description}</p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {faqsContent.sections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
                <Accordion type="single" collapsible className="mb-10">
                  {section.faqs.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${sectionIndex}-${faqIndex}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{faqsContent.cta.title}</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            {faqsContent.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full px-8 bg-teal-600 hover:bg-teal-700">
              <Link href={faqsContent.cta.primaryButton.link}>{faqsContent.cta.primaryButton.text}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link href={faqsContent.cta.secondaryButton.link}>{faqsContent.cta.secondaryButton.text}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
