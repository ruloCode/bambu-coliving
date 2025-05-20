import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "5 razones para elegir coliving en tu próxima aventura",
    excerpt:
      "Descubre por qué el coliving se ha convertido en la opción preferida para nómadas digitales y profesionales en todo el mundo.",
    date: "15 de abril, 2025",
    author: "María Rodríguez",
    image: "/placeholder.svg?height=400&width=600",
    slug: "5-razones-para-elegir-coliving",
  },
  {
    id: 2,
    title: "Guía para nómadas digitales en Bogotá",
    excerpt: "Todo lo que necesitas saber para trabajar remotamente desde la vibrante capital colombiana.",
    date: "2 de mayo, 2025",
    author: "Carlos Gómez",
    image: "/placeholder.svg?height=400&width=600",
    slug: "guia-nomadas-digitales-bogota",
  },
  {
    id: 3,
    title: "Cómo construir una comunidad en espacios compartidos",
    excerpt: "Estrategias y consejos para fomentar conexiones significativas en entornos de coliving.",
    date: "20 de mayo, 2025",
    author: "Laura Martínez",
    image: "/placeholder.svg?height=400&width=600",
    slug: "construir-comunidad-espacios-compartidos",
  },
  {
    id: 4,
    title: "Los mejores cafés para trabajar cerca de Plura Coliving",
    excerpt:
      "Una selección de cafeterías con buen WiFi, enchufes y ambiente agradable para tus días de trabajo fuera de casa.",
    date: "5 de junio, 2025",
    author: "Andrés Pérez",
    image: "/placeholder.svg?height=400&width=600",
    slug: "mejores-cafes-para-trabajar",
  },
  {
    id: 5,
    title: "Eventos imperdibles en Bogotá durante el verano 2025",
    excerpt: "Festivales, exposiciones y actividades culturales para disfrutar al máximo tu estancia en la ciudad.",
    date: "12 de junio, 2025",
    author: "Sofía Vargas",
    image: "/placeholder.svg?height=400&width=600",
    slug: "eventos-bogota-verano-2025",
  },
  {
    id: 6,
    title: "Equilibrio entre trabajo y vida personal en espacios de coliving",
    excerpt: "Consejos prácticos para mantener la productividad sin sacrificar tu bienestar en entornos compartidos.",
    date: "25 de junio, 2025",
    author: "Daniel Moreno",
    image: "/placeholder.svg?height=400&width=600",
    slug: "equilibrio-trabajo-vida-personal",
  },
]

export default function Blog() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-teal-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="max-w-2xl mx-auto">
            Artículos, guías y consejos para sacar el máximo provecho de tu experiencia de coliving.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
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

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Suscríbete a nuestro newsletter</h2>
            <p className="mb-6 text-gray-600">
              Recibe artículos, consejos y novedades sobre coliving directamente en tu bandeja de entrada.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button type="submit" className="bg-teal-600 hover:bg-teal-700">
                Suscribirme
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
