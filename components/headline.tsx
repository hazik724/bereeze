"use client"

import { motion } from "framer-motion"

const items = [
  "Trusted Overseas Manpower Solutions",
  "Verified Gulf Job Opportunities",
  "International Recruitment Network",
  "Apply Once • Get Matched Globally",
  "Secure & Verified Hiring Process",
]

export default function TextTicker() {
  return (
    <div className="w-full overflow-hidden bg-[#124170] py-3">

      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {/* duplicate content for seamless loop */}
        {[...items, ...items].map((text, i) => (
          <span
            key={i}
            className="text-white text-sm md:text-base tracking-wide flex items-center gap-2"
          >
            <span className="text-[#F77F00]">●</span>
            {text}
          </span>
        ))}
      </motion.div>

    </div>
  )
}