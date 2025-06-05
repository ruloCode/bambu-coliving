"use client"

import { Button } from "@/components/ui/button"
import RoomCard from "@/components/room-card"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

export default function FeaturedRooms() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-2 text-center"
        >
          Nuestros Espacios
        </motion.h2>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-10 text-center max-w-2xl mx-auto"
        >
          Descubre nuestras habitaciones diseñadas para ofrecerte confort, privacidad y todo lo que necesitas para
          vivir, trabajar y disfrutar en Bogotá.
        </motion.p>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants}>
            <RoomCard
              title="Bambu Tipo 1"
              image="/images/living_1.png"
              price="3.000.000"
              features={["Cama doble", "WiFi ilimitado", "Cocina privada", "Baño privado"]}
              slug="tipo-1"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <RoomCard
              title="Bambu Tipo 2"
              image="/images/living_2.png"
              price="3.500.000"
              features={["Cama queen", "WiFi ilimitado", "Cocina privada", "Baño privado", "Escritorio"]}
              slug="tipo-2"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <RoomCard
              title="Bambu Tipo 3"
              image="/images/living_3.png"
              price="4.200.000"
              features={["Cama king", "WiFi ilimitado", "Cocina privada", "Baño privado", "Balcón"]}
              slug="tipo-3"
            />
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 transition-all duration-300">
              <Link href="/habitaciones">
                Ver todas las habitaciones <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
