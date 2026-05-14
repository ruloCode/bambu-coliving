import Image from "next/image"
import Link from "next/link"
import { blogPostsContent } from "@/content"
import { Tag } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPostsContent[params.slug]

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Post no encontrado</h1>
        <p className="text-gray-600 mb-8">El artículo que buscas no existe o ha sido movido.</p>
        <Button asChild>
          <Link href="/blog">Volver al Blog</Link>
        </Button>
      </div>
    )
  }

  return (
    <article className="flex flex-col w-full">
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <Image
          src={post.content.mainImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center justify-center gap-4 text-sm">
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Introduction */}
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            {post.content.introduction}
          </p>

          {/* Sections */}
          <div className="space-y-12">
            {post.content.sections.map((section, index) => (
              <section key={index}>
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{section.content}</p>
                {section.image && (
                  <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Conclusion */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Conclusión</h2>
            <p className="text-gray-600 leading-relaxed">{post.content.conclusion}</p>
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {post.content.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm flex items-center gap-1"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>

          {/* Related Posts */}
          {post.content.relatedPosts.length > 0 && (
            <div className="mt-12 border-t pt-12">
              <h2 className="text-2xl font-bold mb-6">Artículos relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {post.content.relatedPosts.map((slug) => {
  const relatedPost = blogPostsContent[slug]
  if (!relatedPost || !relatedPost.image) return null  // ← Evita el error

  return (
    <Link
      key={slug}
      href={`/blog/${slug}`}
      className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative h-48">
        <Image
          src={relatedPost.image}
          alt={relatedPost.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold mb-2 group-hover:text-teal-600 transition-colors">
          {relatedPost.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
      </div>
    </Link>
  )
})}

              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  )
} 