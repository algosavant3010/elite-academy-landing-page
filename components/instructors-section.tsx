"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"

const instructors = [
  {
    name: "Marcus Davis",
    role: "Head Instructor",
    specialty: "Advanced Technique",
    bio: "10+ years of professional racing experience",
    image: "/professional-motocross-instructor-male.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Conditioning Coach",
    specialty: "Fitness & Endurance",
    bio: "Former professional athlete, fitness specialist",
    image: "/professional-motocross-coach-female.jpg",
  },
  {
    name: "Tony Rivera",
    role: "Track Master",
    specialty: "Track Strategy",
    bio: "25+ years in motorsports industry",
    image: "/experienced-racing-instructor.jpg",
  },
  {
    name: "Alex Chen",
    role: "Technique Coach",
    specialty: "Bike Handling",
    bio: "Champion-level training specialization",
    image: "/motocross-technique-expert.jpg",
  },
]

export default function InstructorsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative" id="instructors">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-oswald font-bold text-academy-light mb-4">
            Expert <span className="text-academy-accent">Instructors</span>
          </h2>
          <p className="text-academy-light/60 text-lg">
            Learn from industry veterans with decades of combined experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
          {instructors.map((instructor, idx) => (
            <article
              key={instructor.name}
              role="listitem"
              itemScope
              itemType="https://schema.org/Person"
              className="contents"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="bg-academy-dark border-academy-accent/20 overflow-hidden group hover:border-academy-accent/50 transition-all">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={instructor.image || "/placeholder.svg"}
                      alt={instructor.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      itemProp="image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-academy-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-oswald font-bold text-lg text-academy-light mb-1" itemProp="name">
                      {instructor.name}
                    </h3>
                    <p className="text-academy-accent text-sm font-semibold mb-2" itemProp="jobTitle">
                      {instructor.role}
                    </p>
                    <p className="text-academy-secondary text-xs mb-3">{instructor.specialty}</p>
                    <p className="text-academy-light/60 text-sm" itemProp="description">
                      {instructor.bio}
                    </p>
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
