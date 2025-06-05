"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link href="/1Q " className="flex items-center gap-2">
          <div className="relative h-8 w-8">
            <img src="/images/LogoBambu.png" alt="Logo de Bambu" />
            {/* <svg viewBox="0 0 24 24" className="h-8 w-8 text-teal-600">
              <path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg> */}
          </div>
          <span className="font-bold text-xl">Bambu Coliving</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Inicio
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="link" className="text-sm font-medium transition-colors hover:text-primary">
                Colivings
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/habitaciones">Habitaciones</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/espacios-compartidos">Espacios Compartidos</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/servicios">Servicios</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/comunidad" className="text-sm font-medium transition-colors hover:text-primary">
            Comunidad
          </Link>
          <Link href="/faqs" className="text-sm font-medium transition-colors hover:text-primary">
            FAQs
          </Link>
          <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
            Blog
          </Link>
          <Link href="/nosotros" className="text-sm font-medium transition-colors hover:text-primary">
            Contáctanos
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="Bandera de España"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="sr-only">Cambiar idioma</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <div className="flex items-center gap-2">
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Bandera de España"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <span>Español</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex items-center gap-2">
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Bandera de Estados Unidos"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <span>English</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}

          <Button asChild className="rounded-full bg-teal-600 hover:bg-teal-700">
            <Link href="/reserva">Reserva Ahora</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className="flex w-full items-center py-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/habitaciones"
              className="flex w-full items-center py-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Habitaciones
            </Link>
            <Link
              href="/espacios-compartidos"
              className="flex w-full items-center py-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Espacios Compartidos
            </Link>
            <Link
              href="/servicios"
              className="flex w-full items-center py-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="/comunidad"
              className="flex w-full items-center py-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Comunidad
            </Link>
            <Link
              href="/faqs"
              className="flex w-full items-center py-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQs
            </Link>
            <Link
              href="/blog"
              className="flex w-full items-center py-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/nosotros"
              className="flex w-full items-center py-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contáctanos
            </Link>
            <div className="flex items-center gap-4 pt-2">
              <Button asChild className="w-full rounded-full bg-teal-600 hover:bg-teal-700">
                <Link href="/reserva" onClick={() => setIsMenuOpen(false)}>
                  Reserva Ahora
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
