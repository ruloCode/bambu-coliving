"use client"

import { Wifi, Users, MapPin, Coffee } from "lucide-react"
import { motion } from "framer-motion"

export default function Benefits() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 120
      }
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-2 text-center"
        >
          ¿Por qué elegir Bambu?
        </motion.h2>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-10 text-center max-w-2xl mx-auto"
        >
          Ofrecemos más que un lugar para vivir. Somos una comunidad donde podrás conectar, crecer y disfrutar.
        </motion.p>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
          >
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Wifi className="h-8 w-8 text-teal-600" />
            </motion.div>
            <h3 className="text-xl font-bold mb-2">WiFi de Alta Velocidad</h3>
            <p className="text-gray-600">Conexión estable y rápida para trabajar sin interrupciones.</p>
          </motion.div>
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
          >
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Users className="h-8 w-8 text-rose-600" />
            </motion.div>
            <h3 className="text-xl font-bold mb-2">Comunidad Vibrante</h3>
            <p className="text-gray-600">Conoce personas de todo el mundo y expande tu red profesional.</p>
          </motion.div>
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
          >
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <MapPin className="h-8 w-8 text-teal-600" />
            </motion.div>
            <h3 className="text-xl font-bold mb-2">Ubicación Estratégica</h3>
            <p className="text-gray-600">En el corazón de Bogotá, cerca de todo lo que necesitas.</p>
          </motion.div>
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
          >
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Coffee className="h-8 w-8 text-rose-600" />
            </motion.div>
            <h3 className="text-xl font-bold mb-2">Espacios Compartidos</h3>
            <p className="text-gray-600">Coworking, cocina, gimnasio y áreas de descanso a tu disposición.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
