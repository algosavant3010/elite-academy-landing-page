"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import EnrollmentModal from "./enrollment-modal"

export default function CTASection() {
  const [showEnrollment, setShowEnrollment] = useState(false)

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-academy-accent/10 via-academy-dark to-academy-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-academy-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-academy-secondary rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-oswald font-bold text-academy-light mb-6">
              Ready to Become a <span className="text-academy-accent">Champion</span>?
            </h2>
            <p className="text-lg text-academy-light/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join Elite Motorsports Academy today and start your journey to racing excellence. Limited spots available
              each season.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              onClick={() => setShowEnrollment(true)}
              className="bg-academy-accent hover:bg-academy-accent/90 text-white px-8 py-6 text-lg font-bold glow-accent flex items-center justify-center gap-2 rounded"
            >
              Start Your Journey <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              className="border-2 border-academy-accent text-academy-accent hover:bg-academy-accent/10 px-8 py-6 text-lg font-bold rounded bg-transparent"
              variant="outline"
            >
              Get More Info
            </Button>
          </motion.div>

          <p className="text-sm text-academy-light/50 mt-8">
            ✓ Flexible payment plans available • ✓ Money-back guarantee • ✓ Group discounts
          </p>
        </div>
      </section>

      <EnrollmentModal isOpen={showEnrollment} onClose={() => setShowEnrollment(false)} />
    </>
  )
}
