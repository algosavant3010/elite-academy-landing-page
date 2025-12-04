"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Jake Mitchell",
    role: "Professional Racer",
    content:
      "The Elite Championship program transformed my racing. The instructors' personalized coaching gave me the edge I needed to compete at the highest level.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Amateur Competitor",
    content:
      "I went from beginner to confident racer in just 8 weeks. The structured approach and expert feedback made all the difference in my performance.",
    rating: 5,
  },
  {
    name: "Chris Walker",
    role: "Motocross Enthusiast",
    content:
      "Outstanding program with amazing instructors. They break down complex techniques in a way that actually sticks. Highly recommend!",
    rating: 5,
  },
  {
    name: "Lisa Park",
    role: "Parent of Student",
    content:
      "My son gained confidence and real skills. The academy's focus on safety and proper technique gives me peace of mind while he pursues his passion.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-academy-dark relative" id="testimonials">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-academy-secondary rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-oswald font-bold text-academy-light mb-4">
            Success <span className="text-academy-accent">Stories</span>
          </h2>
          <p className="text-academy-light/60 text-lg">See what our riders have accomplished</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8" role="list">
          {testimonials.map((testimonial, idx) => (
            <article
              key={testimonial.name}
              role="listitem"
              itemScope
              itemType="https://schema.org/Review"
              className="contents"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="bg-academy-dark border-academy-accent/20 p-8 hover:border-academy-accent/50 transition-colors h-full flex flex-col">
                  <div
                    className="flex gap-1 mb-4"
                    itemProp="reviewRating"
                    itemScope
                    itemType="https://schema.org/Rating"
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-academy-secondary text-academy-secondary"
                        aria-hidden="true"
                      />
                    ))}
                    <span itemProp="ratingValue" content={testimonial.rating} className="sr-only">
                      {testimonial.rating} out of 5 stars
                    </span>
                  </div>
                  <p className="text-academy-light/80 mb-6 flex-grow text-lg leading-relaxed" itemProp="reviewBody">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-oswald font-bold text-academy-light" itemProp="author">
                      {testimonial.name}
                    </p>
                    <p className="text-academy-accent text-sm">{testimonial.role}</p>
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
