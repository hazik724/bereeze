"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const texts = [
  "Trusted Overseas Recruitment Platform",
  "Gulf Jobs • Saudi • UAE • Qatar Opportunities",
  "Fast Visa Processing & Legal Hiring Support",
  "100% Verified International Job Placements",
]

export default function TextSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[60px] flex items-center justify-center overflow-hidden">

      <AnimatePresence mode="wait">
        <motion.h2
          key={index}
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-center text-lg md:text-2xl font-medium text-[#124170]"
        >
          {texts[index]}
        </motion.h2>
      </AnimatePresence>

    </div>
  )
}