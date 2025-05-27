import { CalendarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  author: string
  image: string
  slug: string
}

interface Props {
  posts: BlogPost[]
}

const BlogPostsGrid = ({ posts }: Props) => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <CalendarIcon className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Por {post.author}</span>
                <Button asChild variant="ghost" size="sm" className="text-teal-600 hover:text-teal-700">
                  <Link href={`/blog/${post.slug}`}>Leer más</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default BlogPostsGrid