import { blogContent } from "@/content"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function BlogNewsletter() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{blogContent.newsletter.title}</h2>
          <p className="text-gray-600 mb-8">{blogContent.newsletter.description}</p>
          <form className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder={blogContent.newsletter.placeholder}
              className="flex-grow"
            />
            <Button type="submit" className="bg-teal-600 hover:bg-teal-700">
              {blogContent.newsletter.buttonText}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}