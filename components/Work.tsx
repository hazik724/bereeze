"use client"

import { motion } from "framer-motion"
import { FileText, Search, ClipboardCheck, Plane, Briefcase } from "lucide-react"
import { Card } from "@/components/ui/card"

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
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#0B1220]">
          How We Work
        </h2>

        <p className="text-gray-500 mt-4 text-sm md:text-base">
          A transparent and structured recruitment process designed to ensure safety, trust, and success.
        </p>
      </div>

      <div className="max-w-3xl mx-auto relative">
        <div className="absolute left-6 top-0 h-full w-px bg-gray-200" />

        <div className="space-y-10">
          {steps.map((step, i) => {
            const Icon = step.icon

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="relative pl-16"
              >
                <div className="absolute left-4 top-1.5 w-3.5 h-3.5 rounded-full bg-[#0B1220]" />

                <div className="absolute left-10 top-0">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm">
                    <Icon className="text-[#0B1220]" size={18} />
                  </div>
                </div>

                <Card className="p-5 border border-gray-100 shadow-sm rounded-lg hover:shadow-md transition-all duration-300">
                  <h3 className="text-[#0B1220] font-semibold text-lg">
                    {step.title}
                  </h3>

                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}