"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="w-full bg-[#0B1220] py-28 px-6 border-t border-white/10">

      <div className="max-w-4xl mx-auto text-center">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-semibold text-white leading-tight"
        >
          Ready to Start Your <br />
          International Career?
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white/50 mt-5 text-sm md:text-base"
        >
          Join thousands of workers who successfully found overseas jobs through our trusted recruitment process.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >

          <Link
            href="/apply"
            className="
              bg-white text-[#0B1220]
              px-6 py-3 rounded-md
              font-medium
              hover:bg-gray-200 transition
            "
          >
            Apply Now
          </Link>

          <Link
            href="/jobs"
            className="
              border border-white/20 text-white
              px-6 py-3 rounded-md
              hover:bg-white/10 transition
            "
          >
            View Jobs
          </Link>

        </motion.div>

      </div>

    </section>
  )
}