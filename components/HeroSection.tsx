"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { heroContent } from "@/content"

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative h-full w-full"
      >
        <Image
          src={heroContent.backgroundImage}
          alt={heroContent.alt}
          fill
          className="object-cover"
          priority
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 bg-black/30"
        />
      </motion.div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-4xl mx-auto px-4 text-center text-white">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-2"
          >
            {heroContent.titles.main}
          </motion.h1>
          
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-2"
          >
            {heroContent.titles.subtitle1}
          </motion.h2>
          
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-2"
          >
            {heroContent.titles.subtitle2}
          </motion.h2>
          
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
          >
            {heroContent.titles.subtitle3}
          </motion.h2>
          
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.8,
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild size="lg" className="rounded-full px-12 py-4 text-lg font-semibold bg-teal-600 hover:bg-teal-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl">
              <Link 
                href={heroContent.cta.href} 
                target={heroContent.cta.isExternal ? "_blank" : undefined}
                rel={heroContent.cta.isExternal ? "noopener noreferrer" : undefined}
              >
                {heroContent.cta.text}
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
