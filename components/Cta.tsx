"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { CheckCircle2, ShieldCheck, Globe } from "lucide-react"

export default function CTA() {
  return (
    <section className="w-full bg-[#124170] py-28 px-6 border-t border-white/10">

      <div className="max-w-4xl mx-auto text-center">

        {/* TRUST BADGES */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">

          <div className="flex items-center gap-2 text-xs text-white/70 bg-white/10 px-3 py-1 rounded-full">
            <CheckCircle2 size={14} className="text-[#F77F00]" />
            Verified Recruitment
          </div>

          <div className="flex items-center gap-2 text-xs text-white/70 bg-white/10 px-3 py-1 rounded-full">
            <ShieldCheck size={14} className="text-[#F77F00]" />
            Safe Process
          </div>

          <div className="flex items-center gap-2 text-xs text-white/70 bg-white/10 px-3 py-1 rounded-full">
            <Globe size={14} className="text-[#F77F00]" />
            Gulf Hiring Network
          </div>

        </div>

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-semibold text-white leading-tight"
        >
          Start Your Overseas Career <br />
          With Verified Employers
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white/70 mt-5 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
        >
          Thousands of candidates trust our structured recruitment system for safe,
          legal, and verified overseas job placements across Gulf countries.
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
              bg-[#F77F00] text-white
              px-6 py-3 rounded-full
              font-medium
              hover:bg-[#e56f00] transition
              shadow-md
            "
          >
            Apply Now
          </Link>

          <Link
            href="/jobs"
            className="
              border border-white/30 text-white
              px-6 py-3 rounded-full
              hover:bg-white/10 transition
            "
          >
            View Jobs
          </Link>

        </motion.div>

        {/* FOOTNOTE TRUST */}
        <p className="text-white/40 text-xs mt-10 tracking-widest">
          NO FAKE JOBS • VERIFIED EMPLOYERS • TRANSPARENT PROCESS
        </p>

      </div>

    </section>
  )
}