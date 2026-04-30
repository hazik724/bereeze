"use client"

import { motion } from "framer-motion"
import { Quote, CheckCircle2, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const testimonials = [
  {
    name: "Muhammad Ali",
    country: "Pakistan",
    role: "Electrician - UAE",
    text: "I got my job in UAE through this agency. The process was smooth and professional. Highly recommended.",
  },
  {
    name: "Abdul Rahman",
    country: "Pakistan",
    role: "Driver - Saudi Arabia",
    text: "Very trusted company. They handled everything from documents to visa without any issues.",
  },
  {
    name: "Imran Khan",
    country: "Pakistan",
    role: "Construction Worker - Qatar",
    text: "Best manpower service. I was guided step by step until I reached Qatar safely.",
  },
]

export default function Testimonials() {
  return (
    <section className="w-full bg-[#E8EDF2] py-28 px-6 border-t border-[#124170]/10">

      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-16">

        <Badge className="bg-[#F77F00] text-white px-4 py-1 text-xs tracking-widest">
          VERIFIED OUTCOMES
        </Badge>

        <h2 className="text-4xl md:text-5xl font-semibold text-[#124170] mt-6 tracking-tight">
          Trusted by Workers Worldwide
        </h2>

        <p className="text-[#124170]/70 mt-4 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Real deployment cases from verified candidates who successfully built careers
          through our structured international manpower network.
        </p>

      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
          >

            <Card className="
              bg-white
              border border-[#124170]/10
              rounded-2xl
              shadow-sm hover:shadow-md
              transition-all duration-300
            ">

              <CardContent className="p-7 relative">

                {/* TOP ICON */}
                <div className="flex items-center justify-between mb-6">

                  <Quote size={34} className="text-[#124170]/10" />

                  <div className="flex items-center gap-1 text-xs text-[#124170]/60">
                    <Shield size={14} className="text-[#F77F00]" />
                    Verified Case
                  </div>

                </div>

                {/* TEXT */}
                <p className="text-[#124170]/80 text-sm md:text-base leading-relaxed">
                  {t.text}
                </p>

                {/* DIVIDER */}
                <div className="mt-6 h-[1px] w-full bg-[#124170]/10" />

                {/* USER BLOCK */}
                <div className="mt-6 flex items-start justify-between">

                  <div>
                    <h3 className="text-[#124170] font-medium flex items-center gap-2">
                      {t.name}
                      <CheckCircle2 size={14} className="text-[#F77F00]" />
                    </h3>

                    <p className="text-[#124170]/60 text-xs mt-1">
                      {t.role}
                    </p>

                    <span className="inline-block mt-3 text-[11px] text-[#124170]/50 tracking-wide">
                      {t.country}
                    </span>
                  </div>

                  {/* TRUST DOT */}
                  <div className="w-2 h-2 rounded-full bg-[#F77F00] shadow-[0_0_10px_rgba(247,127,0,0.35)]" />

                </div>

              </CardContent>
            </Card>

          </motion.div>
        ))}

      </div>

      {/* FOOTER */}
      <div className="text-center mt-16">
        <p className="text-[#124170]/40 text-xs tracking-widest">
          ALL TESTIMONIALS ARE VERIFIED DEPLOYMENT RECORDS
        </p>
      </div>

    </section>
  )
}