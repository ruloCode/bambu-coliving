import BlogHeader from "@/components/blog/BlogHeader"
import BlogPostsGrid from "@/components/blog/BlogPostsGrid"
import BlogNewsletter from "@/components/blog/BlogNewsletter"


const blogPosts = [
  {
    id: 1,
    title: "Slowmads en Bogotá: El Auge del Coliving para una inmersión cultural real.",
    excerpt: "El mundo de los viajes está en constante evolución. La figura del nómada digital, siempre conectado y en rápido movimiento, está dando paso a una nueva ola de viajeros...",
    author: "Fausto Abner",
    image: "/images/Creativos2.jpg",
    slug: "slowmads-en-bogota",
  },
  {
    id: 2,
    title: "El auge del coliving en Bogotá: Un análisis de las busquedas clave que definen el mercado.",
    excerpt: "El coliving se consolida en Bogotá como una solución de vivienda cada vez más popular, atrayendo a una diversa gama de residentes.",
    author: "Fausto Abner",
    image: "/images/Creativos1.jpg",
    slug: "el-auge-del-coliving",
  },
  {
    id: 3,
    title: "Coliving vs Residencia Estudiantil: La evolución del alojamiento en Bogotá para la nueva generación",
    excerpt: "En la vibrante Bogotá, la búsqueda del alojamiento ideal es una preocupación constante para estudiantes universitarios y jóvenes profesionales que inician su camino laboral.",
    author: "Fausto Abner",
    image: "/images/Creativos1.jpg",
    slug: "coliving-vs-residencia",
  },
  {
    id: 4,
    title: "Más Allá de las Paredes: Cómo el Coliving en Bogotá Impulsa tu Carrera Profesional",
    excerpt:
      "En una ciudad tan vibrante y competitiva como Bogotá, el concepto de hogar está en plena transformación.",
    author: "Fausto Abner",
    image: "/images/Creativos1.jpg",
    slug: "mas-alla-de-las-paredes",
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