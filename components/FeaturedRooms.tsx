"use client"

import { Button } from "@/components/ui/button"
import RoomCard from "@/components/room-card"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { featuredRoomsContent } from "@/content"

export default function FeaturedRooms() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-3xl font-bold mb-2 text-center"
        >
          {featuredRoomsContent.title}
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-gray-600 mb-10 text-center max-w-2xl mx-auto"
        >
          {featuredRoomsContent.description}
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRoomsContent.rooms.map((room, index) => (
            <motion.div
              key={room.slug}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <RoomCard
                title={room.title}
                image={room.image}
                price={room.price}
                features={room.features}
                slug={room.slug}
              />
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 transition-all duration-300">
              <Link href={featuredRoomsContent.cta.href}>
                {featuredRoomsContent.cta.text} <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
