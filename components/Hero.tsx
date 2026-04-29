"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const slides = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
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
    <section className="relative w-full h-[90vh] overflow-hidden">

      {/* BACKGROUND SLIDES */}
      {slides.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt="hero"
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#0B1220]/80" />

      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">

        <div className="text-center max-w-3xl">

          <h1 className="text-white text-3xl md:text-5xl font-semibold leading-tight">
            Trusted Overseas Manpower & Recruitment Solutions
          </h1>

          <p className="mt-4 text-gray-300 text-sm md:text-base">
            Connecting skilled professionals with global opportunities across Gulf countries with trust, speed, and reliability.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              href="/apply"
              className="bg-white text-[#0B1220] px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition"
            >
              Apply Now
            </Link>

            <Link
              href="/jobs"
              className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-[#0B1220] transition"
            >
              View Jobs
            </Link>

          </div>

        </div>
      </div>
    </section>
  )
}