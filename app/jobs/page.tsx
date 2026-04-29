export const dynamic = "force-dynamic"

import { client } from "@/sanity/lib/client"
import { jobsQuery } from "@/sanity/lib/queries"
import JobCard from "@/components/JobCard"
import { Badge } from "@/components/ui/badge"
import {
  ShieldCheck,
  Globe,
  Users,
  TrendingUp,
  Activity,
  Sparkles,
} from "lucide-react"

export default async function JobsPage() {
  const jobs = await client.fetch(jobsQuery)

  return (
    <div className="min-h-screen bg-[#E8EDF2] text-[#0B1220]">

      {/* BACKGROUND INTELLIGENCE GRID */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(#0B1220_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative max-w-6xl mx-auto px-5 py-16">

        {/* ================= HEADER SYSTEM ================= */}
        <div className="mb-14">

          {/* LIVE SYSTEM STATUS */}
          <div className="flex items-center gap-2 text-xs text-[#0B1220]/60 mb-5">
            <Activity size={14} className="text-green-500 animate-pulse" />
            <span>Live Recruitment Intelligence System Active</span>
          </div>

          {/* SYSTEM BADGE */}
          <Badge className="bg-[#124170] text-white px-4 py-1 text-[11px] tracking-[0.25em]">
            GLOBAL TALENT NETWORK
          </Badge>

          {/* MAIN TITLE */}
          <h1 className="text-4xl md:text-5xl font-semibold mt-6 leading-tight tracking-tight">
            Verified Overseas Job Ecosystem
          </h1>

          {/* DESCRIPTION */}
          <p className="text-[#0B1220]/70 mt-5 max-w-3xl text-sm md:text-base leading-relaxed">
            A structured recruitment intelligence system aggregating verified hiring demands
            from international employers across UAE, Saudi Arabia, Qatar, Oman and other Gulf markets.
            Every listing is validated through compliance screening and employer verification protocols.
          </p>

          {/* ================= INTELLIGENCE CARDS ================= */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">

            <Stat icon={<Sparkles size={14} />} label="Active Listings" value={jobs?.length || 0} />
            <Stat icon={<ShieldCheck size={14} />} label="Verification Rate" value="100%" />
            <Stat icon={<Globe size={14} />} label="Gulf Coverage" value="4+ Regions" />
            <Stat icon={<TrendingUp size={14} />} label="Update System" value="Real-Time" />

          </div>

          {/* ================= TRUST LAYER ================= */}
          <div className="mt-10 flex flex-wrap gap-5 text-xs text-[#0B1220]/60">

            <Trust icon={<ShieldCheck size={14} />} text="Employer Verified Listings" />
            <Trust icon={<Globe size={14} />} text="International Recruitment Network" />
            <Trust icon={<Users size={14} />} text="Thousands Successfully Deployed" />
            <Trust icon={<TrendingUp size={14} />} text="Continuous Market Demand Tracking" />

          </div>

        </div>

        {/* ================= LISTINGS SECTION ================= */}
        <div className="relative">

          {/* LISTING BACKDROP LAYER */}
          <div className="absolute inset-0 rounded-3xl bg-white/20 blur-3xl" />

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

            {jobs.map((job: any) => (
              <div
                key={job._id}
                className="transform transition duration-300 hover:-translate-y-2"
              >
                <JobCard job={job} />
              </div>
            ))}

          </div>

        </div>

        {/* ================= FINAL AUTHORITY FOOTER ================= */}
        <div className="mt-20 text-center">

          <p className="text-xs tracking-[0.2em] text-[#0B1220]/60">
            ALL OPPORTUNITIES ARE VERIFIED THROUGH EMPLOYER AUTHENTICATION SYSTEMS
          </p>

          <p className="text-[11px] mt-3 text-[#0B1220]/40 italic">
            “We don’t show jobs. We show verified global opportunities.”
          </p>

        </div>

      </div>
    </div>
  )
}

/* ================= STAT CARD ================= */
function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string | number
}) {
  return (
    <div className="bg-white border border-[#0B1220]/10 rounded-xl p-4 hover:shadow-md transition">
      <div className="flex items-center justify-between mb-3 text-[#124170]">
        {icon}
      </div>
      <div className="text-lg font-semibold">{value}</div>
      <div className="text-xs text-[#0B1220]/60 mt-1">{label}</div>
    </div>
  )
}

/* ================= TRUST BADGE ================= */
function Trust({
  icon,
  text,
}: {
  icon: React.ReactNode
  text: string
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[#124170]">{icon}</span>
      <span>{text}</span>
    </div>
  )
}