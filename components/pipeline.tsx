"use client"

import { motion } from "framer-motion"
import {
  FileText,
  Search,
  UserCheck,
  BadgeCheck,
  Plane,
} from "lucide-react"

const steps = [
  {
    icon: FileText,
    title: "Applied",
    desc: "Candidate submits application via system",
  },
  {
    icon: Search,
    title: "Screening",
    desc: "Documents & profile verification process",
  },
  {
    icon: UserCheck,
    title: "Interview",
    desc: "Employer or agency evaluation stage",
  },
  {
    icon: BadgeCheck,
    title: "Selection",
    desc: "Final approval & job confirmation",
  },
  {
    icon: Plane,
    title: "Deployment",
    desc: "Visa, ticket & overseas travel process",
  },
]

export default function JobPipelineSection() {
  return (
    <section className="w-full bg-white py-28 px-6 border-t border-[#124170]/10">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>

          <h2 className="text-4xl md:text-5xl font-semibold text-[#124170] leading-tight">
            Transparent Hiring <br />
            Process System
          </h2>

          <p className="mt-6 text-[#124170]/70 text-base leading-relaxed">
            Every candidate goes through a structured recruitment pipeline ensuring
            transparency, verification, and safe overseas deployment.
          </p>

          {/* TRUST POINTS */}
          <div className="mt-10 space-y-3 text-sm text-[#124170]/70">

            <p>✔ Full application tracking system</p>
            <p>✔ Verified employer processing</p>
            <p>✔ Zero fake job handling policy</p>

          </div>

        </div>

        {/* RIGHT SIDE (PIPELINE VISUAL) */}
        <div className="relative">

          {/* vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-[#124170]/10" />

          <div className="space-y-10">

            {steps.map((step, i) => {
              const Icon = step.icon

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex gap-5 items-start relative"
                >

                  {/* DOT ICON */}
                  <div className="
                    w-10 h-10 rounded-full
                    bg-[#E8EDF2]
                    border border-[#124170]/10
                    flex items-center justify-center
                    text-[#124170]
                    z-10
                  ">
                    <Icon size={18} />
                  </div>

                  {/* CONTENT */}
                  <div>

                    <h3 className="text-[#124170] font-medium">
                      {step.title}
                    </h3>

                    <p className="text-sm text-[#124170]/60 mt-1">
                      {step.desc}
                    </p>

                  </div>

                </motion.div>
              )
            })}

          </div>

        </div>

      </div>
    </section>
  )
}