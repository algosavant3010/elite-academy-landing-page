"use client"

import type React from "react"

import { motion } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

interface EnrollmentModalProps {
  isOpen: boolean
  onClose: () => void
  program?: {
    name: string
    price: string
  }
}

export default function EnrollmentModal({ isOpen, onClose, program }: EnrollmentModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "beginner",
    termsAccepted: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle enrollment submission
    console.log("Enrollment submitted:", formData)
    // Reset and close
    setFormData({
      name: "",
      email: "",
      phone: "",
      experience: "beginner",
      termsAccepted: false,
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-academy-dark border-2 border-academy-accent/30 rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-oswald font-bold text-academy-light">
            {program ? `Enroll in ${program.name}` : "Start Your Training"}
          </h2>
          <button onClick={onClose} className="text-academy-light/60 hover:text-academy-accent transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-academy-light mb-2">Full Name</label>
            <Input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-academy-dark border-academy-accent/30 text-academy-light placeholder:text-academy-light/40"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-academy-light mb-2">Email</label>
            <Input
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-academy-dark border-academy-accent/30 text-academy-light placeholder:text-academy-light/40"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-academy-light mb-2">Phone</label>
            <Input
              type="tel"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="bg-academy-dark border-academy-accent/30 text-academy-light placeholder:text-academy-light/40"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-academy-light mb-2">Experience Level</label>
            <select
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              className="w-full bg-academy-dark border border-academy-accent/30 text-academy-light rounded px-3 py-2"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="terms"
              checked={formData.termsAccepted}
              onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
              required
              className="mt-1 w-4 h-4 rounded border-academy-accent/30 cursor-pointer"
            />
            <label htmlFor="terms" className="text-sm text-academy-light/70">
              I agree to the terms and conditions
            </label>
          </div>

          {program && (
            <div className="bg-academy-accent/10 border border-academy-accent/30 rounded p-4 mb-4">
              <p className="text-sm text-academy-light/70">Program</p>
              <p className="font-bold text-academy-light">{program.name}</p>
              <p className="text-academy-accent text-lg font-bold mt-2">{program.price}</p>
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-academy-accent hover:bg-academy-accent/90 text-white font-bold glow-accent"
          >
            Complete Enrollment
          </Button>

          <p className="text-xs text-academy-light/50 text-center">
            You will receive a confirmation email with next steps
          </p>
        </form>
      </motion.div>
    </motion.div>
  )
}
