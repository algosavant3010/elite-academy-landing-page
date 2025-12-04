"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

const programs = [
  {
    name: "Beginner Fundamentals",
    duration: "4 Weeks",
    price: "$1,299",
    description: "Master the basics of motocross riding with foundational techniques",
    features: ["Bike Control Basics", "Safety Protocols", "Track Introduction", "Group Training"],
    bgColor: "bg-black",
    borderColor: "border-academy-accent",
    priceCurrency: "USD",
    priceValue: 1299,
  },
  {
    name: "Intermediate Pro",
    duration: "8 Weeks",
    price: "$2,499",
    description: "Advance your skills with competitive racing techniques",
    features: ["Advanced Cornering", "Jump Technique", "Race Strategy", "1-on-1 Coaching"],
    bgColor: "bg-academy-accent",
    borderColor: "border-academy-accent",
    featured: true,
    priceCurrency: "USD",
    priceValue: 2499,
  },
  {
    name: "Elite Championship",
    duration: "12 Weeks",
    price: "$4,999",
    description: "Intensive training for serious racers aiming for competition",
    features: ["Elite Coaching", "Race Preparation", "Fitness Training", "Competition Entry"],
    bgColor: "bg-black",
    borderColor: "border-academy-accent",
    priceCurrency: "USD",
    priceValue: 4999,
  },
]

export default function ProgramsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-academy-dark relative overflow-hidden" id="programs">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-academy-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-academy-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-oswald font-bold text-academy-light mb-4">
            Training <span className="text-academy-accent">Programs</span>
          </h2>
          <p className="text-academy-light/60 text-lg max-w-2xl mx-auto">
            Choose the perfect program for your skill level and racing goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-6" role="list">
          {programs.map((program, idx) => (
            <article key={program.name} role="listitem" itemScope itemType="https://schema.org/Course">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="h-full"
              >
                <Card
                  className={`relative ${program.bgColor} border-2 ${program.borderColor} p-8 h-full flex flex-col hover:shadow-lg hover:shadow-academy-accent/50 transition-all ${
                    program.featured ? "ring-2 ring-academy-accent shadow-lg shadow-academy-accent" : ""
                  }`}
                >
                  {program.featured && (
                    <div className="absolute top-4 right-4 bg-academy-accent text-white px-3 py-1 text-xs font-bold rounded-full">
                      MOST POPULAR
                    </div>
                  )}

                  <h3 className="text-2xl font-oswald font-bold text-white mb-2" itemProp="name">
                    {program.name}
                  </h3>
                  <p className="text-academy-accent text-sm mb-4 font-semibold" itemProp="duration">
                    {program.duration}
                  </p>
                  <p className="text-gray-300 text-sm mb-6" itemProp="description">
                    {program.description}
                  </p>

                  <div className="flex-grow">
                    <ul
                      className="space-y-3 mb-8"
                      itemProp="hasCourseInstance"
                      itemScope
                      itemType="https://schema.org/CourseInstance"
                    >
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-academy-accent flex-shrink-0" aria-hidden="true" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-academy-accent/30 pt-6 mt-6">
                    <p
                      className="text-3xl font-bold text-white mb-4"
                      itemProp="offers"
                      itemScope
                      itemType="https://schema.org/Offer"
                    >
                      <span itemProp="priceCurrency" content={program.priceCurrency} />
                      <span itemProp="price" content={program.priceValue} />
                      {program.price}
                    </p>
                    <Button
                      className={`w-full font-bold ${
                        program.featured
                          ? "bg-academy-accent hover:bg-academy-accent/90 text-white glow-accent"
                          : "bg-academy-accent hover:bg-academy-accent/90 text-white"
                      }`}
                    >
                      Enroll Program
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
