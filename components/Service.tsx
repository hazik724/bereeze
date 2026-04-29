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
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    icon: Briefcase,
    title: "Manpower Recruitment",
    desc: "Structured workforce deployment for skilled and unskilled labor across international markets.",
    tag: "Recruitment",
  },
  {
    icon: FileText,
    title: "Visa Processing",
    desc: "End-to-end documentation, compliance handling, and embassy coordination services.",
    tag: "Documentation",
  },
  {
    icon: Plane,
    title: "Travel Arrangements",
    desc: "End-to-end relocation support including ticketing, scheduling, and onboarding logistics.",
    tag: "Logistics",
  },
  {
    icon: ShieldCheck,
    title: "Work Permits",
    desc: "Legal authorization processing with full regulatory compliance and verification.",
    tag: "Compliance",
  },
  {
    icon: Globe,
    title: "International Hiring",
    desc: "Connecting verified global employers with pre-screened, qualified candidates.",
    tag: "Global HR",
  },
  {
    icon: Users,
    title: "Candidate Screening",
    desc: "Multi-layer skill testing, background checks, and qualification validation.",
    tag: "Verification",
  },
]

export default function ServicesSection() {
  return (
    <section className="w-full bg-[#E8EDF2] py-28 px-6 border-t border-[#0B1220]/10">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <Badge className="bg-[#0B1220] text-white px-4 py-1 text-xs tracking-widest">
            CORE OPERATIONS
          </Badge>

          <h2 className="text-4xl md:text-5xl font-semibold text-[#0B1220] mt-6 tracking-tight">
            Our Professional Services
          </h2>

          <p className="text-[#0B1220]/60 mt-4 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            End-to-end manpower infrastructure designed for global recruitment,
            compliance execution, and enterprise-grade workforce deployment systems.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, i) => {
            const Icon = service.icon

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <Card className="
                  h-full rounded-2xl
                  bg-white/70 backdrop-blur-md
                  border border-[#0B1220]/10
                  shadow-sm hover:shadow-xl
                  transition-all duration-300
                ">
                  <CardContent className="p-7">

                    {/* TOP ROW */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="
                        w-12 h-12 rounded-xl
                        bg-[#0B1220] text-white
                        flex items-center justify-center
                        group-hover:scale-105 transition
                      ">
                        <Icon size={20} />
                      </div>

                      <Badge className="text-[10px] bg-[#0B1220]/5 text-[#0B1220]/70">
                        {service.tag}
                      </Badge>
                    </div>

                    {/* TITLE */}
                    <h3 className="text-lg font-semibold text-[#0B1220] tracking-tight">
                      {service.title}
                    </h3>

                    {/* DESC */}
                    <p className="text-sm text-[#0B1220]/60 mt-3 leading-relaxed">
                      {service.desc}
                    </p>

                    {/* FOOTER LINE (TRUST INDICATOR) */}
                    <div className="mt-6 h-[2px] w-full bg-[#0B1220]/10 overflow-hidden rounded-full">
                      <div className="h-full w-1/3 bg-[#0B1220] group-hover:w-2/3 transition-all duration-500" />
                    </div>

                  </CardContent>
                </Card>
              </motion.div>
            )
          })}

        </div>
      </div>
    </section>
  )
}