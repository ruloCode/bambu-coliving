import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ctaContent } from "@/content"

export default function CTA() {
  return (
    <section className="py-16 bg-teal-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{ctaContent.title}</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          {ctaContent.description}
        </p>
        <Button asChild size="lg" className="rounded-full px-8 bg-white text-teal-600 hover:bg-gray-100">
          <Link href={ctaContent.cta.href}>{ctaContent.cta.text}</Link>
        </Button>
      </div>
    </section>
  )
}
