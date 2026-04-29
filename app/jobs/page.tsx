export const dynamic = "force-dynamic";

import { client } from "@/sanity/lib/client"
import { jobsQuery } from "@/sanity/lib/queries"
import JobCard from "@/components/JobCard"
import { Badge } from "@/components/ui/badge"

export default async function JobsPage() {
  const jobs = await client.fetch(jobsQuery)

  return (
    <div className="min-h-screen bg-[#E8EDF2]">

      <div className="max-w-6xl mx-auto px-4 py-14">

        {/* HEADER SECTION (ENTERPRISE STYLE) */}
        <div className="mb-12">

          <Badge className="bg-[#0B1220] text-white px-4 py-1 text-xs tracking-widest">
            LIVE JOB DATABASE
          </Badge>

          <h1 className="text-4xl md:text-5xl font-semibold text-[#0B1220] mt-6 tracking-tight">
            Latest Job Openings
          </h1>

          <p className="text-[#0B1220]/60 mt-4 max-w-2xl text-sm md:text-base leading-relaxed">
            Real-time verified overseas job listings sourced from trusted employers.
            Each opportunity is screened for compliance, authenticity, and deployment readiness.
          </p>

          {/* SYSTEM INFO BAR */}
          <div className="mt-8 flex flex-wrap gap-3 text-xs text-[#0B1220]/60">
            <span className="px-3 py-1 rounded-full border border-[#0B1220]/10 bg-white">
              {jobs?.length || 0} Active Listings
            </span>

            <span className="px-3 py-1 rounded-full border border-[#0B1220]/10 bg-white">
              Verified Employers Only
            </span>

            <span className="px-3 py-1 rounded-full border border-[#0B1220]/10 bg-white">
              Updated in Real Time
            </span>
          </div>

        </div>

        {/* GRID WRAPPER (CONTROLLED SYSTEM LAYOUT) */}
        <div className="relative">

          {/* subtle background structure line */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#0B1220_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {jobs.map((job: any, i: number) => (
              <div
                key={job._id}
                className="transition-transform duration-300 hover:-translate-y-1"
                style={{
                  animationDelay: `${i * 60}ms`,
                }}
              >
                <JobCard job={job} />
              </div>
            ))}

          </div>

        </div>

        {/* FOOTER TRUST SYSTEM */}
        <div className="mt-14 text-center">
          <p className="text-xs text-[#0B1220]/40 tracking-widest">
            ALL LISTINGS ARE FILTERED THROUGH VERIFICATION & COMPLIANCE SYSTEM
          </p>
        </div>

      </div>
    </div>
  )
}