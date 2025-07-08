"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCommunityOpen, setIsCommunityOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8">
            <img src="/images/LogoBambu.png" alt="Logo de Bambu" />
          </div>
          <span className="font-bold text-xl">Bambu Coliving</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Inicio
          </Link>
          
          {/* Comunidad with dropdown */}
          <div className="relative group">
            <Link 
              href="/comunidad" 
              className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary py-2"
            >
              Comunidad
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </Link>
            
            {/* Dropdown menu that appears on hover */}
            <div className="absolute top-full left-0 mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-white border border-gray-200 rounded-md shadow-lg py-2 min-w-[200px]">
                <Link 
                  href="/eventos" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                >
                  Eventos
                </Link>
                <Link 
                  href="/espacios-compartidos" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                >
                  Espacios Compartidos
                </Link>
                <Link 
                  href="/servicios" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                >
                  Servicios
                </Link>
              </div>
            </div>
          </div>

          <Link href="/habitaciones" className="text-sm font-medium transition-colors hover:text-primary">
            Habitaciones
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
        <div className="md:hidden border-t bg-white">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <Link
              href="/"
              className="flex w-full items-center py-3 text-sm font-medium transition-colors hover:text-primary border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            
            {/* Comunidad section */}
            <div className="border-b border-gray-100">
              <button
                className="flex w-full items-center justify-between py-3 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsCommunityOpen(!isCommunityOpen)}
              >
                <Link 
                  href="/comunidad" 
                  className="flex-1 text-left"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Comunidad
                </Link>
                <ChevronDown className={`h-4 w-4 transition-transform ${isCommunityOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isCommunityOpen && (
                <div className="pb-2 space-y-1">
                  <Link
                    href="/eventos"
                    className="flex w-full items-center py-2 pl-6 text-sm text-gray-600 transition-colors hover:text-primary hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Eventos
                  </Link>
                  <Link
                    href="/espacios-compartidos"
                    className="flex w-full items-center py-2 pl-6 text-sm text-gray-600 transition-colors hover:text-primary hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Espacios Compartidos
                  </Link>
                  <Link
                    href="/servicios"
                    className="flex w-full items-center py-2 pl-6 text-sm text-gray-600 transition-colors hover:text-primary hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Servicios
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/habitaciones"
              className="flex w-full items-center py-3 text-sm font-medium transition-colors hover:text-primary border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Habitaciones
            </Link>
            <Link
              href="/faqs"
              className="flex w-full items-center py-3 text-sm font-medium transition-colors hover:text-primary border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQs
            </Link>
            <Link
              href="/blog"
              className="flex w-full items-center py-3 text-sm font-medium transition-colors hover:text-primary border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/nosotros"
              className="flex w-full items-center py-3 text-sm font-medium transition-colors hover:text-primary border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contáctanos
            </Link>
            
            <div className="flex items-center gap-4 pt-4">
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
