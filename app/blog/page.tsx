import BlogHeader from "@/components/blog/BlogHeader"
import BlogPostsGrid from "@/components/blog/BlogPostsGrid"
import BlogNewsletter from "@/components/blog/BlogNewsletter"


const blogPosts = [
  {
    id: 1,
    title: "5 razones para elegir coliving en tu próxima aventura",
    excerpt:
      "Descubre por qué el coliving se ha convertido en la opción preferida para nómadas digitales y profesionales en todo el mundo.",
    date: "15 de abril, 2025",
    author: "María Rodríguez",
    image: "/images/Creativos1.jpg",
    slug: "5-razones-para-elegir-coliving",
  },
  {
    id: 2,
    title: "Guía para nómadas digitales en Bogotá",
    excerpt: "Todo lo que necesitas saber para trabajar remotamente desde la vibrante capital colombiana.",
    date: "2 de mayo, 2025",
    author: "Carlos Gómez",
    image: "/images/Creativos1.jpg",
    slug: "guia-nomadas-digitales-bogota",
  },
  {
    id: 3,
    title: "Cómo construir una comunidad en espacios compartidos",
    excerpt: "Estrategias y consejos para fomentar conexiones significativas en entornos de coliving.",
    date: "20 de mayo, 2025",
    author: "Laura Martínez",
    image: "/images/Creativos1.jpg",
    slug: "construir-comunidad-espacios-compartidos",
  },
  {
    id: 4,
    title: "Los mejores cafés para trabajar cerca de Plura Coliving",
    excerpt:
      "Una selección de cafeterías con buen WiFi, enchufes y ambiente agradable para tus días de trabajo fuera de casa.",
    date: "5 de junio, 2025",
    author: "Andrés Pérez",
    image: "/images/Creativos1.jpg",
    slug: "mejores-cafes-para-trabajar",
  },
  {
    id: 5,
    title: "Eventos imperdibles en Bogotá durante el verano 2025",
    excerpt: "Festivales, exposiciones y actividades culturales para disfrutar al máximo tu estancia en la ciudad.",
    date: "12 de junio, 2025",
    author: "Sofía Vargas",
    image: "/images/Creativos1.jpg",
    slug: "eventos-bogota-verano-2025",
  },
  {
    id: 6,
    title: "Equilibrio entre trabajo y vida personal en espacios de coliving",
    excerpt: "Consejos prácticos para mantener la productividad sin sacrificar tu bienestar en entornos compartidos.",
    date: "25 de junio, 2025",
    author: "Daniel Moreno",
    image: "/images/Creativos1.jpg",
    slug: "equilibrio-trabajo-vida-personal",
  },
]

export default function Blog() {
  return (
    <div className="flex flex-col w-full">
      <BlogHeader />
      <BlogPostsGrid posts={blogPosts} />
      <BlogNewsletter />
    </div>
  )
}