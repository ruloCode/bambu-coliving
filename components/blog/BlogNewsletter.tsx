import { Button } from "@/components/ui/button"

const BlogNewsletter = () => (
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
)

export default BlogNewsletter