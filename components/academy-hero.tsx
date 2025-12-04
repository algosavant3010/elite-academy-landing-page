"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function AcademyHero() {
  return (
    <section className="relative min-h-screen w-full bg-academy-dark flex items-center justify-center overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-academy-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-academy-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col justify-center items-center text-center py-20 lg:py-32">
          {/* Main heading - Removed Lorenzo, emphasized Elite Academy */}
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-academy-accent text-lg font-bold tracking-widest uppercase mb-4">Welcome to</p>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-oswald font-black text-academy-light mb-6 tracking-tighter leading-none">
              Elite <span className="text-academy-accent">Academy</span>
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-oswald font-bold text-academy-accent mb-8 tracking-tighter">
              Motorsports
            </h2>
          </motion.div>

          <motion.p
            className="text-lg sm:text-xl text-academy-light/80 mb-12 font-light leading-relaxed max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Master advanced motocross techniques with elite professional instructors. Join our exclusive training
            programs and achieve your racing potential.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-16 justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              className="bg-academy-accent hover:bg-academy-accent/90 text-white px-10 py-4 text-lg font-bold glow-accent"
              size="lg"
            >
              Enroll Now
            </Button>
            <Button
              className="border-2 border-academy-accent text-academy-accent hover:bg-academy-accent/10 px-10 py-4 text-lg font-bold bg-transparent"
              size="lg"
              variant="outline"
            >
              Explore Programs
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="grid grid-cols-3 gap-6 sm:gap-12 pt-12 border-t border-academy-accent/20 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-academy-accent">500+</p>
              <p className="text-xs sm:text-sm text-academy-light/60 mt-2">Riders Trained</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-academy-secondary">15+</p>
              <p className="text-xs sm:text-sm text-academy-light/60 mt-2">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-academy-accent">98%</p>
              <p className="text-xs sm:text-sm text-academy-light/60 mt-2">Success Rate</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
