"use client"

import { motion } from "framer-motion"
import {
  Briefcase,
  FileText,
  Plane,
  ShieldCheck,
  Globe,
  Users,
} from "lucide-react"

const services = [
  {
    icon: Briefcase,
    title: "Manpower Recruitment",
    desc: "Skilled & unskilled workforce deployment across Gulf countries.",
  },
  {
    icon: FileText,
    title: "Visa Processing",
    desc: "End-to-end documentation and embassy coordination.",
  },
  {
    icon: Plane,
    title: "Travel Arrangements",
    desc: "Flight booking, relocation, onboarding support.",
  },
  {
    icon: ShieldCheck,
    title: "Work Permits",
    desc: "Legal authorization with full compliance handling.",
  },
  {
    icon: Globe,
    title: "International Hiring",
    desc: "Global employers matched with verified candidates.",
  },
  {
    icon: Users,
    title: "Candidate Screening",
    desc: "Skill testing, background checks, validation system.",
  },
]

export default function ServicesSection() {
  return (
    <section className="w-full bg-[#E8EDF2] py-28 px-6 border-t border-[#124170]/10">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE (STORY / BRAND VALUE) */}
        <div>

          <h2 className="text-4xl md:text-5xl font-semibold text-[#124170] leading-tight">
            End-to-End <br />
            Recruitment Infrastructure
          </h2>

          <p className="mt-6 text-[#124170]/70 text-base leading-relaxed">
            We don’t just provide services — we manage the entire overseas
            employment lifecycle from recruitment to deployment.
          </p>

          {/* TRUST POINTS */}
          <div className="mt-10 space-y-4 text-sm text-[#124170]/70">

            <div className="flex gap-2 items-center">
              <span className="w-2 h-2 bg-[#F77F00] rounded-full" />
              Verified international hiring system
            </div>

            <div className="flex gap-2 items-center">
              <span className="w-2 h-2 bg-[#F77F00] rounded-full" />
              Full visa + documentation support
            </div>

            <div className="flex gap-2 items-center">
              <span className="w-2 h-2 bg-[#F77F00] rounded-full" />
              Direct employer connections (no middle fraud)
            </div>

          </div>

          {/* CTA */}
          <button className="mt-10 px-6 py-3 bg-[#124170] text-white rounded-full hover:bg-[#0f345a] transition">
            Explore Opportunities
          </button>

        </div>

        {/* RIGHT SIDE (INTERACTIVE LIST - NOT CARDS) */}
        <div className="space-y-4">

          {services.map((s, i) => {
            const Icon = s.icon

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="
                  group flex gap-4 p-5 rounded-xl
                  bg-white border border-[#124170]/10
                  hover:border-[#F77F00]/40
                  hover:shadow-md
                  transition-all duration-300
                  cursor-pointer
                "
              >

                {/* ICON */}
                <div className="
                  w-10 h-10 rounded-lg
                  bg-[#E8EDF2]
                  flex items-center justify-center
                  text-[#124170]
                  group-hover:text-[#F77F00]
                  transition
                ">
                  <Icon size={18} />
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="text-[#124170] font-medium">
                    {s.title}
                  </h3>

                  <p className="text-sm text-[#124170]/60 mt-1">
                    {s.desc}
                  </p>
                </div>

              </motion.div>
            )
          })}

        </div>

      </div>
    </section>
  )
}