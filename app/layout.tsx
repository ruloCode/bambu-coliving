import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bambu Coliving | Bogotá, Colombia",
  description: "Espacio de coliving moderno en Bogotá para nómadas digitales, estudiantes y profesionales",
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: "Bambu Coliving | Bogotá, Colombia",
    description: "Espacio de coliving moderno en Bogotá para nómadas digitales, estudiantes y profesionales",
    url: 'https://bambucoliving.com',
    siteName: 'Bambu Coliving',
    images: [
      {
        url: '/og_img.jpg',
        width: 1200,
        height: 630,
        alt: 'Bambu Coliving - Espacio de coliving moderno en Bogotá',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Bambu Coliving | Bogotá, Colombia",
    description: "Espacio de coliving moderno en Bogotá para nómadas digitales, estudiantes y profesionales",
    images: ['/og_img.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
