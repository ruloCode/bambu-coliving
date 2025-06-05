import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative h-8 w-8">
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-teal-500">
                  <path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-bold text-xl text-white">Bambu</span>
            </Link>
            <p className="mb-4">
              Espacio de coliving moderno en Bogotá para nómadas digitales, estudiantes y profesionales.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-teal-500">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/habitaciones" className="hover:text-teal-500">
                  Habitaciones
                </Link>
              </li>
              <li>
                <Link href="/espacios-compartidos" className="hover:text-teal-500">
                  Espacios Compartidos
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-teal-500">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/comunidad" className="hover:text-teal-500">
                  Comunidad
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-teal-500">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Información Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terminos-y-condiciones" className="hover:text-teal-500">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidad" className="hover:text-teal-500">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/politica-de-cookies" className="hover:text-teal-500">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-teal-500">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-teal-500 mt-0.5" />
                <span>dirección, Bogotá, Colombia</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-teal-500 mt-0.5" />
                <span>+57 (601) telefono</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-teal-500 mt-0.5" />
                <span>info@bambucoliving.co</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Bambu Coliving. Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0 flex gap-4">
            <Link href="/terminos-y-condiciones" className="text-sm hover:text-teal-500">
              Términos
            </Link>
            <Link href="/politica-de-privacidad" className="text-sm hover:text-teal-500">
              Privacidad
            </Link>
            <Link href="/politica-de-cookies" className="text-sm hover:text-teal-500">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
