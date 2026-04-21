"use client"

import { Calendar, MapPin, Coffee } from "lucide-react"
import { motion } from "framer-motion"
import { benefitsContent } from "@/content"
import Link from "next/link"

// Icon mapping
const iconMap = {
  Calendar,
  MapPin,
  Coffee
}

export default function Benefits() {
  const gridColsClass =
    benefitsContent.benefits.length >= 4
      ? "lg:grid-cols-4"
      : benefitsContent.benefits.length === 3
        ? "lg:grid-cols-3"
        : "lg:grid-cols-2"

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-3xl font-bold mb-2 text-center"
        >
          {benefitsContent.title}
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-gray-600 mb-10 text-center max-w-2xl mx-auto"
        >
          {benefitsContent.description}
        </motion.p>
        <div className={`grid grid-cols-1 md:grid-cols-2 ${gridColsClass} gap-8 max-w-6xl mx-auto`}>
          {benefitsContent.benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon as keyof typeof iconMap]
            const isRoseCard = benefit.title === "Bogotá Auténtica" || benefit.title === "Espacios Vibrantes"
            const colorClasses = isRoseCard
              ? { bg: 'bg-rose-100', text: 'text-rose-600' }
              : { bg: 'bg-teal-100', text: 'text-teal-600' }

            return (
              <Link href={benefit.href} key={benefit.title} className="h-full">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
                >
                  <div className={`${colorClasses.bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`h-8 w-8 ${colorClasses.text}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 flex-grow">{benefit.description}</p>
                </motion.div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
