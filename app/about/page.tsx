import FlipBook from "@/components/book"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck, Globe, Users, Building2 } from "lucide-react"
import AboutHero from "@/components/AboutHero"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#E8EDF2] text-[#124170]">

      {/* BACKGROUND GRID */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.05] bg-[radial-gradient(#124170_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 space-y-28">

        {/* ================= HERO ================= */}
        <div className="text-center max-w-3xl mx-auto">

          <Badge className="bg-[#124170] text-white px-4 py-1 text-xs tracking-[0.25em]">
            COMPANY OVERVIEW
          </Badge>

          <h1 className="text-4xl md:text-5xl font-semibold mt-6 leading-tight">
            A Structured Global Recruitment System
          </h1>

          <p className="text-[#124170]/70 mt-5 text-sm md:text-base leading-relaxed">
            We operate as a professional manpower infrastructure connecting skilled
            workers with verified employers across Gulf and international markets.
          </p>

          {/* TRUST PILLS */}
          <div className="flex flex-wrap justify-center gap-4 mt-10 text-xs">

            <div className="flex items-center gap-2 bg-white border border-[#124170]/10 px-4 py-2 rounded-full">
              <ShieldCheck size={14} />
              Verified Recruitment
            </div>

            <div className="flex items-center gap-2 bg-white border border-[#124170]/10 px-4 py-2 rounded-full">
              <Globe size={14} />
              Gulf Network
            </div>

            <div className="flex items-center gap-2 bg-white border border-[#124170]/10 px-4 py-2 rounded-full">
              <Users size={14} />
              Thousands Placed
            </div>

          </div>

        </div>

        {/* ================= AUTHORITY BLOCK ================= */}
        <div className="grid md:grid-cols-3 gap-6">

          {[
            {
              icon: ShieldCheck,
              title: "Verified Process",
              desc: "Every recruitment step follows structured verification, documentation, and compliance protocols.",
            },
            {
              icon: Globe,
              title: "International Network",
              desc: "Strong employer connections across UAE, Saudi Arabia, Qatar, and other Gulf regions.",
            },
            {
              icon: Building2,
              title: "System-Based Approach",
              desc: "We operate as a process-driven recruitment system, not just a placement agency.",
            },
          ].map((item, i) => {
            const Icon = item.icon

            return (
              <div
                key={i}
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
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#E8EDF2] flex items-center justify-center">
                  <Icon size={20} />
                </div>

                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>

                <p className="text-sm text-[#124170]/60 mt-2">
                  {item.desc}
                </p>
              </div>
            )
          })}

        </div>

        {/* ================= PROFILE DOCUMENT ================= */}
        <div>

          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Company Profile Document
            </h2>

            <p className="text-[#124170]/60 text-sm mt-3">
              Explore our official company profile in an interactive format
            </p>
          </div>

          {/* DESKTOP ONLY */}
          <div className="hidden md:flex justify-center">
            <div className="w-full max-w-[1200px]">
              <FlipBook />
            </div>
          </div>

        </div>

        {/* ================= FINAL POSITIONING ================= */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-lg font-medium">
            We don’t operate as a typical recruitment agency.
          </p>

          <p className="text-[#124170]/70 mt-3 text-sm md:text-base leading-relaxed">
            We function as a structured manpower system focused on compliance,
            transparency, and long-term workforce deployment success.
          </p>

          <div className="mt-6 text-xs tracking-widest text-[#124170]/50">
            TRUST • TRANSPARENCY • GLOBAL OPPORTUNITIES
          </div>

        </div>

        {/* ================= EXTRA HERO ================= */}
        <AboutHero />

      </div>
    </div>
  )
}