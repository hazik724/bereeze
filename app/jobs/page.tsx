export const dynamic = "force-dynamic"

import { client } from "@/sanity/lib/client"
import { jobsQuery } from "@/sanity/lib/queries"
import JobCard from "@/components/JobCard"
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
    <div className="min-h-screen bg-[#E8EDF2] text-[#124170]">

      {/* SOFT GRID BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#124170_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative max-w-6xl mx-auto px-5 py-16">

        {/* ================= HERO ================= */}
        <div className="max-w-3xl">

          <div className="flex items-center gap-2 text-xs text-[#124170]/60 mb-4">
            <Activity size={14} className="text-green-500 animate-pulse" />
            Live Recruitment System Active
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Verified Global Job Opportunities
          </h1>

          <p className="text-[#124170]/70 mt-5 text-sm md:text-base leading-relaxed">
            Real-time recruitment listings sourced from verified employers across Gulf markets.
            Every opportunity is validated through compliance and employer authentication layers.
          </p>

        </div>

        {/* ================= METRICS STRIP ================= */}
        <div className="mt-12 border border-[#124170]/10 rounded-2xl bg-white overflow-hidden">

          <div className="grid grid-cols-2 md:grid-cols-4">

            <Metric label="Active Listings" value={jobs?.length || 0} icon={<Sparkles size={14} />} />
            <Metric label="Verification Rate" value="100%" icon={<ShieldCheck size={14} />} />
            <Metric label="Regions Covered" value="4+" icon={<Globe size={14} />} />
            <Metric label="System Update" value="Live" icon={<TrendingUp size={14} />} />

          </div>

        </div>

        {/* ================= TRUST ROW ================= */}
        <div className="mt-8 flex flex-wrap gap-6 text-xs text-[#124170]/60">

          <Trust text="Employer Verified Listings" icon={<ShieldCheck size={14} />} />
          <Trust text="Global Recruitment Network" icon={<Globe size={14} />} />
          <Trust text="Thousands Deployed" icon={<Users size={14} />} />
          <Trust text="Real-Time Demand Tracking" icon={<TrendingUp size={14} />} />

        </div>

        {/* ================= LISTINGS ================= */}
        <div className="mt-16">

          {/* SECTION HEADER */}
          <div className="flex items-center justify-between mb-8">

            <h2 className="text-xl font-semibold">
              Latest Opportunities
            </h2>

            <span className="text-xs text-[#124170]/50">
              Showing verified results only
            </span>

          </div>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

            {jobs.map((job: any) => (
              <div
                key={job._id}
                className="transition-transform duration-300 hover:-translate-y-2"
              >
                <JobCard job={job} />
              </div>
            ))}

          </div>

        </div>

        {/* ================= AUTHORITY CLOSE ================= */}
        <div className="mt-20 border-t border-[#124170]/10 pt-10 text-center">

          <p className="text-xs tracking-[0.2em] text-[#124170]/60">
            VERIFIED THROUGH EMPLOYER AUTHENTICATION SYSTEMS
          </p>

          <p className="text-[11px] mt-3 text-[#124170]/40 italic">
            “We don’t list jobs. We validate opportunities.”
          </p>

        </div>

      </div>
    </div>
  )
}

/* ================= METRIC ================= */
function Metric({
  label,
  value,
  icon,
}: {
  label: string
  value: string | number
  icon: React.ReactNode
}) {
  return (
    <div className="p-5 border-r last:border-r-0 border-[#124170]/10">

      <div className="flex items-center gap-2 text-[#124170]/60 text-xs mb-2">
        {icon}
        {label}
      </div>

      <div className="text-xl font-semibold text-[#124170]">
        {value}
      </div>

    </div>
  )
}

/* ================= TRUST ================= */
function Trust({
  text,
  icon,
}: {
  text: string
  icon: React.ReactNode
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[#F77F00]">{icon}</span>
      <span>{text}</span>
    </div>
  )
}