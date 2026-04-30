"use client"

import { motion } from "framer-motion"
import {
  FileText,
  ShieldCheck,
  GraduationCap,
  Plane,
} from "lucide-react"

const groups = [
  {
    title: "Documentation & Legal",
    icon: FileText,
    items: [
      "Degree Attestation for Gulf Countries",
      "Protector Processing",
      "ENO & Biometric",
      "Medical Token",
    ],
  },
  {
    title: "Training & Preparation",
    icon: GraduationCap,
    items: [
      "NAVTTC Courses Program",
      "Soft Skill Certifications",
      "Interview Preparation",
    ],
  },
  {
    title: "Additional Services",
    icon: Plane,
    items: ["Holiday Trip"],
  },
]

export default function ServicesBlock() {
  return (
    <section className="w-full py-28 px-6 bg-[#E8EDF2]">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">

          <p className="text-xs tracking-[0.35em] text-[#124170]">
            SERVICE INFRASTRUCTURE
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold text-[#124170] mt-4">
            Complete Overseas Support System
          </h2>

          <p className="text-[#124170]/70 mt-5 text-sm md:text-base max-w-2xl mx-auto">
            A structured service pipeline designed to prepare, verify, and deploy
            candidates efficiently into international workforce systems.
          </p>

        </div>

        {/* PANELS */}
        <div className="space-y-8">

          {groups.map((group, i) => {
            const Icon = group.icon

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="
                  relative
                  bg-white
                  border border-[#124170]/10
                  rounded-2xl
                  overflow-hidden
                  hover:shadow-xl
                  transition
                "
              >

                {/* LEFT SYSTEM BAR */}
                <div className="absolute left-0 top-0 h-full w-1 bg-[#F77F00]" />

                <div className="p-8 grid md:grid-cols-3 gap-8 items-start">

                  {/* LEFT SIDE (TITLE) */}
                  <div className="flex items-center gap-4">

                    <div className="
                      w-12 h-12 rounded-xl
                      bg-[#124170] text-white
                      flex items-center justify-center
                    ">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#124170]">
                        {group.title}
                      </h3>

                      <p className="text-xs text-[#124170]/50 mt-1 tracking-wide">
                        SERVICE CATEGORY
                      </p>
                    </div>

                  </div>

                  {/* RIGHT SIDE (ITEMS) */}
                  <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">

                    {group.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="
                          flex items-start gap-3
                          text-sm text-[#124170]/70
                        "
                      >
                        <ShieldCheck
                          size={14}
                          className="text-[#F77F00] mt-[3px]"
                        />

                        <span className="leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}

                  </div>

                </div>

              </motion.div>
            )
          })}

        </div>

      </div>
    </section>
  )
}