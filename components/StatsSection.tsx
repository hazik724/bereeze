"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Globe, Users, Award } from "lucide-react"

const stats = [
  {
    value: "10+",
    label: "Years of Experience",
    icon: Award,
    hint: "Industry credibility",
  },
  {
    value: "25K+",
    label: "Successful Placements",
    icon: Users,
    hint: "Verified outcomes",
  },
  {
    value: "15K+",
    label: "Visas Processed",
    icon: TrendingUp,
    hint: "End-to-end execution",
  },
  {
    value: "12+",
    label: "Partner Countries",
    icon: Globe,
    hint: "Global network",
  },
]

export default function StatsSection() {
  return (
    <section className="w-full bg-[#E8EDF2] py-24 px-6 border-t border-[#0B1220]/10">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <Badge className="bg-[#0B1220] text-white px-4 py-1 text-xs tracking-wide">
            PERFORMANCE OVERVIEW
          </Badge>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#0B1220] mt-5 tracking-tight">
            Trusted Global Manpower Network
          </h2>

          <p className="text-sm md:text-base text-[#0B1220]/60 mt-3 max-w-2xl mx-auto leading-relaxed">
            Delivering structured workforce solutions with verified outcomes, transparent processes,
            and international compliance across partner countries.
          </p>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((stat, i) => {
            const Icon = stat.icon

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <Card className="
                  bg-white/70 backdrop-blur-md
                  border border-[#0B1220]/10
                  shadow-sm hover:shadow-xl
                  transition-all duration-300
                  rounded-2xl
                ">
                  <CardContent className="p-6">

                    {/* TOP ROW */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="
                        w-11 h-11 rounded-xl
                        flex items-center justify-center
                        bg-[#0B1220] text-white
                        group-hover:scale-105 transition
                      ">
                        <Icon size={18} />
                      </div>

                      <span className="text-[11px] text-[#0B1220]/50 tracking-wide">
                        {stat.hint}
                      </span>
                    </div>

                    {/* VALUE */}
                    <div className="space-y-1">
                      <h2 className="
                        text-4xl font-semibold text-[#0B1220]
                        tracking-tight
                      ">
                        {stat.value}
                      </h2>

                      <p className="text-sm text-[#0B1220]/60 leading-snug">
                        {stat.label}
                      </p>
                    </div>

                    {/* PROGRESS LINE (DECORATIVE TRUST ELEMENT) */}
                    <div className="mt-6 h-[2px] w-full bg-[#0B1220]/10 overflow-hidden rounded-full">
                      <div className="h-full w-1/2 bg-[#0B1220] group-hover:w-3/4 transition-all duration-500" />
                    </div>

                  </CardContent>
                </Card>
              </motion.div>
            )
          })}

        </div>

        {/* FOOTER TRUST LINE */}
        <div className="mt-16 text-center">
          <p className="text-xs text-[#0B1220]/50 tracking-wide">
            Verified institutional metrics • Updated in real time • Compliance-driven reporting
          </p>
        </div>

      </div>
    </section>
  )
}