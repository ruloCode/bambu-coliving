import { blogContent } from "@/content"
import Image from "next/image"

export default function BlogHeader() {
  return (
    <section className="relative h-[50vh] min-h-[400px] w-full">
      <Image
        src={blogContent.header.image}
        alt="Blog Header"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{blogContent.header.title}</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">{blogContent.header.description}</p>
        </div>
      </div>
    </section>
  )
}