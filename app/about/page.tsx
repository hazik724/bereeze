export const dynamic = "force-dynamic"

import FlipBook from "@/components/book"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck, Globe, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#E8EDF2] text-[#0B1220]">

      {/* BACKGROUND GRID */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.05] bg-[radial-gradient(#0B1220_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative max-w-6xl mx-auto px-5 py-16">

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto">

          <Badge className="bg-[#124170] text-white px-4 py-1 text-xs tracking-[0.25em]">
            COMPANY OVERVIEW
          </Badge>

          <h1 className="text-4xl md:text-5xl font-semibold mt-6 leading-tight">
            About Our Recruitment System
          </h1>

          <p className="text-[#0B1220]/70 mt-5 text-sm md:text-base leading-relaxed">
            We operate as a structured overseas manpower recruitment platform,
            connecting skilled workers with verified international employers across Gulf countries.
          </p>

          {/* TRUST ROW */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-xs">

            <div className="flex items-center gap-2 bg-white border border-[#0B1220]/10 px-3 py-1 rounded-full">
              <ShieldCheck size={14} />
              Verified Recruitment
            </div>

            <div className="flex items-center gap-2 bg-white border border-[#0B1220]/10 px-3 py-1 rounded-full">
              <Globe size={14} />
              Gulf Network
            </div>

            <div className="flex items-center gap-2 bg-white border border-[#0B1220]/10 px-3 py-1 rounded-full">
              <Users size={14} />
              Thousands Placed
            </div>

          </div>

        </div>

        {/* BOOK SECTION */}
        <div className="mt-20">


          {/* FLIPBOOK SECTION */}
<div className="mt-20">

<div className="text-center mb-10">
  <h2 className="text-2xl md:text-3xl font-semibold">
    Company Profile Document
  </h2>
  <p className="text-[#0B1220]/60 text-sm mt-2">
    Explore our official profile in an interactive book format
  </p>
</div>

{/* 👇 ONLY SHOW ON DESKTOP */}
<div className="hidden md:flex mt-20 w-full justify-center">
  <div className="w-full max-w-[1200px]">
    <FlipBook />
  </div>
</div>

</div>

        </div>

        {/* FOOTER */}
        <div className="text-center mt-16">
          <p className="text-xs text-[#0B1220]/50 tracking-widest">
            TRUST • TRANSPARENCY • GLOBAL OPPORTUNITIES
          </p>
        </div>

      </div>
    </div>
  )
}