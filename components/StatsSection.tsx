"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Globe, Users, Award, TrendingUp } from "lucide-react"

const stats = [
  { value: 10, suffix: "+", label: "Years of Experience", icon: Award },
  { value: 25000, suffix: "+", label: "Successful Placements", icon: Users },
  { value: 15000, suffix: "+", label: "Visas Processed", icon: TrendingUp },
  { value: 12, suffix: "+", label: "Partner Countries", icon: Globe },
]

function useCountUp(end: number, duration = 1200) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start: number

    const animate = (t: number) => {
      if (!start) start = t
      const progress = t - start
      const percent = Math.min(progress / duration, 1)

      setCount(Math.floor(percent * end))

      if (progress < duration) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration])

  return count
}

function StatCard({
  stat,
}: {
  stat: (typeof stats)[0]
}) {
  const Icon = stat.icon
  const count = useCountUp(stat.value)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="
        bg-white
        border border-[#124170]/10
        rounded-2xl
        p-6
        text-center
        hover:shadow-md
        transition
      "
    >
      <div className="w-10 h-10 mx-auto mb-4 rounded-lg bg-[#E8EDF2] flex items-center justify-center text-[#124170]">
        <Icon size={18} />
      </div>

      <h3 className="text-3xl font-semibold text-[#124170]">
        {count.toLocaleString()}
        {stat.suffix}
      </h3>

      <p className="text-sm text-[#124170]/60 mt-2">
        {stat.label}
      </p>
    </motion.div>
  )
}

export default function StatsSection() {
  return (
    <section className="w-full bg-[#E8EDF2] py-28 px-6 border-t border-[#124170]/10">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#124170]">
            Trusted Global Manpower Network
          </h2>

          <p className="text-sm md:text-base text-[#124170]/70 mt-3 max-w-2xl mx-auto">
            Delivering structured workforce solutions with verified outcomes and international compliance.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} />
          ))}
        </div>

      </div>
    </section>
  )
}