"use client"
import { motion } from "framer-motion"

function LoadingFallback() {
  return (
    <mesh>
      <sphereGeometry args={[1.5, 16, 16]} />
      <meshStandardMaterial color="#1a1f1a" wireframe />
    </mesh>
  )
}

export default function Footer() {
  return (
    <footer className="bg-academy-dark border-t border-academy-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-oswald font-bold text-academy-light mb-4">
              ELITE <span className="text-academy-accent">ACADEMY</span>
            </h3>
            <p className="text-academy-light/60 text-sm mb-4">
              Professional motocross training for riders of all levels
            </p>
            <p className="text-academy-light/60 text-sm">
              📍 Racing Track Road, Race City, 12345
              <br />📞 +1-555-ACADEMY
              <br />
              ✉️ info@eliteacademy.com
            </p>
          </motion.div>

          {/* Programs Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-oswald font-bold text-academy-light mb-6 tracking-wider uppercase text-sm">Programs</h4>
            <ul className="space-y-3">
              {["Beginner Fundamentals", "Intermediate Pro", "Elite Championship"].map((item) => (
                <li key={item}>
                  <a
                    href="#programs"
                    className="text-academy-light/60 hover:text-academy-accent transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-oswald font-bold text-academy-light mb-6 tracking-wider uppercase text-sm">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Success Stories", "Team", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-academy-light/60 hover:text-academy-accent transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-oswald font-bold text-academy-light mb-6 tracking-wider uppercase text-sm">
              Follow Us
            </h4>
            <ul className="space-y-3">
              {["Instagram", "Facebook", "YouTube", "TikTok"].map((social) => (
                <li key={social}>
                  <a href="#" className="text-academy-light/60 hover:text-academy-accent transition-colors text-sm">
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-academy-accent/10 my-12" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-academy-light/60 text-sm">© 2025 Elite Motorsports Academy. All rights reserved.</p>
          <div className="flex gap-6 mt-6 md:mt-0">
            <a href="#" className="text-academy-light/60 hover:text-academy-accent transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-academy-light/60 hover:text-academy-accent transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-academy-light/60 hover:text-academy-accent transition-colors text-sm">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
