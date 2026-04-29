"use client"

import { motion } from "framer-motion"
import {
  FileText,
  Search,
  ClipboardCheck,
  Plane,
  Briefcase,
} from "lucide-react"

const steps = [
  {
    icon: FileText,
    title: "Requirement Collection",
    desc: "We collect job requirements from international employers and define job criteria.",
  },
  {
    icon: Search,
    title: "Candidate Screening",
    desc: "Applicants are shortlisted based on skills, experience, and job suitability.",
  },
  {
    icon: ClipboardCheck,
    title: "Documentation Process",
    desc: "We handle all legal documents, contracts, and visa paperwork professionally.",
  },
  {
    icon: Plane,
    title: "Visa & Travel Processing",
    desc: "Visa approval, medical, and travel arrangements are completed step-by-step.",
  },
  {
    icon: Briefcase,
    title: "Final Deployment",
    desc: "Selected candidates are deployed safely to their destination countries.",
  },
]

export default function HowWeWork() {
  return (
    <section className="w-full bg-white py-28 px-6">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-20">

        <h2 className="text-3xl md:text-4xl font-semibold text-[#124170]">
          How Our Recruitment Pipeline Works
        </h2>

        <p className="text-[#124170]/60 mt-4 text-sm md:text-base">
          A structured end-to-end system ensuring transparency, safety, and successful overseas deployment.
        </p>

      </div>

      {/* TIMELINE */}
      <div className="max-w-4xl mx-auto relative">

        {/* MAIN LINE */}
        <div className="absolute left-6 top-0 h-full w-[2px] bg-[#E8EDF2]" />

        <div className="space-y-12">

          {steps.map((step, i) => {
            const Icon = step.icon

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="relative pl-20 group"
              >

                {/* STEP NODE */}
                <div className="
                  absolute left-5 top-2
                  w-3.5 h-3.5 rounded-full
                  bg-[#F77F00]
                  shadow-[0_0_10px_rgba(247,127,0,0.4)]
                " />

                {/* ICON BOX */}
                <div className="
                  absolute left-10 top-0
                  w-11 h-11
                  rounded-xl
                  bg-[#E8EDF2]
                  flex items-center justify-center
                  text-[#124170]
                  group-hover:scale-105 transition
                ">
                  <Icon size={18} />
                </div>

                {/* CARD */}
                <div className="
                  bg-white
                  border border-[#124170]/10
                  rounded-2xl
                  p-6
                  shadow-sm
                  hover:shadow-md
                  transition
                ">

                  {/* STEP NUMBER */}
                  <div className="text-xs text-[#124170]/40 tracking-widest mb-2">
                    STEP {String(i + 1).padStart(2, "0")}
                  </div>

                  <h3 className="text-lg font-semibold text-[#124170]">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#124170]/60 mt-2 leading-relaxed">
                    {step.desc}
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