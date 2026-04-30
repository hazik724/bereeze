"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, ShieldCheck, Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-[#124170] text-white relative overflow-hidden">

      {/* TOP TRUST STRIP */}
      <div className="border-b border-white/10 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-between items-center gap-4 text-xs text-white/70">

          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-[#F77F00]" />
            Verified Recruitment Agency
          </div>

          <div className="flex items-center gap-2">
            <Globe size={14} className="text-[#F77F00]" />
            Gulf & International Hiring Network
          </div>

          <div className="flex items-center gap-2">
            <Phone size={14} className="text-[#F77F00]" />
            24/7 Candidate Support
          </div>

        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div className="md:col-span-2">

          <h2 className="text-2xl font-semibold tracking-tight">
            BAREEZE <span className="text-[#F77F00]">MANPOWER</span>
          </h2>

          <p className="text-white/70 text-sm mt-4 leading-relaxed max-w-md">
            A trusted international recruitment system connecting skilled workers
            with verified employers across Gulf countries and beyond.
          </p>

          <div className="mt-6 text-xs text-white/50 tracking-widest">
            BUILT FOR TRUST • POWERED BY TRANSPARENCY • DRIVEN BY RESULTS
          </div>

        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-sm font-semibold mb-4 text-white/90">
            Quick Links
          </h3>

          <div className="flex flex-col gap-2 text-sm text-white/70">
            <Link href="/">Home</Link>
            <Link href="/jobs">Jobs</Link>
            <Link href="/countries">Countries</Link>
            <Link href="/apply">Apply</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-sm font-semibold mb-4 text-white/90">
            Services
          </h3>

          <div className="flex flex-col gap-2 text-sm text-white/70">
            <span>Manpower Recruitment</span>
            <span>Visa Processing</span>
            <span>Work Permits</span>
            <span>Travel Assistance</span>
          </div>
        </div>

      </div>

      {/* CONTACT STRIP */}
      <div className="border-t border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-sm text-white/70">

          <div className="flex items-center gap-2">
            <Phone size={16} className="text-[#F77F00]" />
            +92 61 4588222
            <Phone size={16} className="text-[#F77F00]" />
            +92 320 1110201
          </div>
          

          <div className="flex items-center gap-2">
            <Mail size={16} className="text-[#F77F00]" />
            bareezemanpower@hotmail.com
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-[#F77F00]" />
           22-B Babar Commercial Center Kutchery Road Multan Pakistan • Gulf Operations
          </div>

        </div>
      </div>

      {/* BOTTOM FINAL LINE */}
      <div className="border-t border-white/10 py-6 text-center">

        <p className="text-xs text-white/40 tracking-widest">
          © {new Date().getFullYear()} BAREEZE MANPOWER • ALL RIGHTS RESERVED • GLOBAL RECRUITMENT PLATFORM
        </p>

        <p className="text-[10px] text-white/30 mt-2 tracking-[0.3em]">
          “WE DON’T JUST PLACE JOBS — WE BUILD FUTURES”
        </p>

      </div>

    </footer>
  )
}