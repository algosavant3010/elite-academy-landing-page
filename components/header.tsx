"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      setScrolled(currentScroll >= 50)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-md bg-academy-dark/95 border-b border-academy-accent/20" : "bg-transparent"
        }`}
      >
        <div className="mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center items-start"
          >
            <h1 className="font-oswald text-2xl md:text-3xl leading-none tracking-tight font-bold text-academy-light">
              ELITE <span className="text-academy-accent">ACADEMY</span>
            </h1>
            <p className="text-xs text-academy-accent/70 tracking-widest uppercase">Motorsports</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <button className="hidden sm:inline-block bg-academy-accent hover:bg-academy-accent/90 text-white px-6 py-2 font-semibold text-sm rounded transition-all glow-accent">
              Enroll Now
            </button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 bg-academy-accent/20 border border-academy-accent/50 hover:bg-academy-accent/30 rounded-lg transition-colors text-academy-accent"
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </motion.div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-academy-dark/98 backdrop-blur-xl z-40 flex items-center justify-center pt-20"
            onClick={() => setMenuOpen(false)}
          >
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
              }}
              className="text-center"
            >
              <motion.ul className="space-y-6 text-3xl md:text-5xl font-oswald font-bold uppercase text-academy-light">
                {["Programs", "Instructors", "Success Stories", "Gallery", "Contact"].map((item, index) => (
                  <motion.li
                    key={item}
                    variants={{
                      open: { opacity: 1, y: 0, rotate: 0 },
                      closed: { opacity: 0, y: 20, rotate: -5 },
                    }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="inline-block hover:text-academy-accent transition-colors duration-300 hover:scale-110 transform"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 20 },
                }}
                className="mt-12 flex justify-center gap-6"
              >
                {["INSTAGRAM", "FACEBOOK", "YOUTUBE"].map((social) => (
                  <motion.a
                    key={social}
                    whileHover={{ scale: 1.1, color: "#ff3d3d" }}
                    href="#"
                    className="text-sm font-bold text-academy-light/60 hover:text-academy-accent transition-colors"
                  >
                    {social}
                  </motion.a>
                ))}
              </motion.div>

              <motion.button
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 20 },
                }}
                className="mt-12 bg-academy-accent hover:bg-academy-accent/90 text-white px-8 py-3 font-bold rounded text-lg glow-accent transition-all"
              >
                Start Training
              </motion.button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
