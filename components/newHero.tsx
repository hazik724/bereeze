"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import TextSlider from "@/components/TextSlider"

export default function Hero3D() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 120])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section
      ref={ref}
      className="relative h-[95vh] overflow-hidden bg-[#E8EDF2] flex items-center justify-center"
    >

      {/* 3D BACKGROUND LAYER */}
      <motion.div
        style={{ y: yBg, scale }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#124170] to-[#E8EDF2] opacity-20" />

        {/* FLOATING ORBS */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F77F00]/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#124170]/20 blur-3xl rounded-full animate-pulse" />
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 text-center max-w-4xl px-6">

        {/* 3D FLOATING CARD */}
        <motion.div
          initial={{ rotateX: 20, opacity: 0, y: 30 }}
          animate={{ rotateX: 0, opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl p-8 shadow-2xl"
          style={{
            transformStyle: "preserve-3d",
            perspective: 1000,
          }}
        >

          <TextSlider />

          <h1 className="text-3xl md:text-5xl font-semibold text-[#124170] mt-6 leading-tight">
            Build Your Career Abroad With Real Opportunities
          </h1>

          <p className="text-[#124170]/70 mt-4 text-sm md:text-base">
            Trusted manpower recruitment platform connecting skilled workers with Gulf employers.
          </p>

          {/* CTA */}
          <div className="mt-8 flex gap-4 justify-center">

            <button className="bg-[#F77F00] text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition">
              Apply Now
            </button>

            <button className="border border-[#124170]/20 text-[#124170] px-6 py-3 rounded-xl hover:bg-white transition">
              View Jobs
            </button>

          </div>

        </motion.div>

      </div>

    </section>
  )
}