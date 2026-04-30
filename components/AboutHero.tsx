"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Globe, Users, CheckCircle2 } from "lucide-react"

export default function AboutBlock() {
  return (
    <section className="w-full py-24 px-6 bg-white">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* ================= LEFT ================= */}
        <div>

          {/* LABEL */}
          <p className="text-xs tracking-[0.35em] text-[#124170] mb-5">
            ABOUT COMPANY
          </p>

          {/* TITLE */}
          <h2 className="text-3xl md:text-5xl font-semibold text-[#124170] leading-tight">
            A Trusted Bridge Between Talent & Global Opportunities
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-6 text-[#124170]/70 text-sm md:text-base leading-relaxed max-w-lg">
            Bareeze Manpower is a licensed overseas employment promoter delivering
            structured recruitment solutions for international employers. We ensure
            every candidate is verified, prepared, and deployed through a transparent
            and compliance-driven process.
          </p>

          {/* STRUCTURED POINTS (NOT RANDOM) */}
          <div className="mt-10 space-y-4">

            <Point text="Government licensed recruitment operations" />
            <Point text="End-to-end candidate verification system" />
            <Point text="Strong employer network across Gulf countries" />
            <Point text="Transparent and ethical hiring process" />

          </div>

        </div>

        {/* ================= RIGHT ================= */}
        <div className="space-y-6">

          {/* TRUST PANEL */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              bg-[#124170]
              text-white
              rounded-2xl
              p-8
              relative
              overflow-hidden
            "
          >

            {/* subtle glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

            <h3 className="text-xl font-semibold">
              Why Choose Us
            </h3>

            <div className="mt-6 space-y-4 text-sm text-white/80">

              <Trust icon={<ShieldCheck size={16} />} text="Fully verified recruitment system" />
              <Trust icon={<Globe size={16} />} text="Global hiring network" />
              <Trust icon={<Users size={16} />} text="Thousands successfully deployed" />

            </div>

          </motion.div>

          {/* MISSION + VISION MERGED (BETTER UX) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="
              bg-[#E8EDF2]
              border border-[#124170]/10
              rounded-2xl
              p-7
            "
          >

            <h3 className="text-lg font-semibold text-[#124170]">
              Our Commitment
            </h3>

            <p className="text-sm text-[#124170]/70 mt-3 leading-relaxed">
              We are committed to delivering reliable manpower solutions by maintaining
              transparency, compliance, and long-term trust with both employers and candidates.
            </p>

            {/* bottom indicator */}
            <div className="mt-6 h-[2px] w-full bg-[#124170]/10 rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-[#F77F00]" />
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  )
}

/* ================= POINT ================= */
function Point({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 text-sm text-[#124170]/70">
      <CheckCircle2 size={16} className="text-[#F77F00] mt-[2px]" />
      <span>{text}</span>
    </div>
  )
}

/* ================= TRUST ================= */
function Trust({ icon, text }: any) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[#F77F00]">{icon}</span>
      <span>{text}</span>
    </div>
  )
}