"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

const slides = [
  "/desktop1.jpg",
  "/desktop2.jpg",
  "/desktop3.jpg",
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-[92vh] overflow-hidden bg-[#E8EDF2]">

      {/* BACKGROUND SLIDES */}
      {slides.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt="hero"
            fill
            priority
            className="object-cover scale-105"
          />
        </div>
      ))}

      {/* SOFT BRAND OVERLAY (NOT TOO DARK) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#124170]/90 via-[#124170]/70 to-[#124170]/40" />

      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">

        <div className="text-center max-w-3xl">

          {/* BADGE */}
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-white/10 text-white text-xs tracking-widest mb-6 border border-white/10">
            VERIFIED OVERSEAS RECRUITMENT
          </div>

          {/* TITLE */}
          <h1 className="text-white text-3xl md:text-5xl font-semibold leading-tight">
            Trusted Overseas Manpower <br />
            & Recruitment Solutions
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-5 text-white/70 text-sm md:text-base leading-relaxed">
            Connecting skilled professionals with global opportunities across Gulf countries
            with <span className="text-[#F77F00] font-medium">trust</span>,
            speed, and verified deployment systems.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              href="/apply"
              className="bg-[#F77F00] text-white px-6 py-3 rounded-full font-medium hover:bg-[#e56f00] transition shadow-md"
            >
              Apply Now
            </Link>

            <Link
              href="/jobs"
              className="border border-white/30 text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#124170] transition"
            >
              View Jobs
            </Link>

          </div>

          {/* TRUST LINE */}
          <div className="mt-10 text-xs text-white/50 tracking-widest">
            UAE • SAUDI ARABIA • QATAR • VERIFIED DEPLOYMENT NETWORK
          </div>

        </div>
      </div>
    </section>
  )
}