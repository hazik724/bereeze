import { client } from "@/sanity/lib/client"
import { jobsQuery } from "@/sanity/lib/queries"
import JobCard from "@/components/JobCard"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export default async function LandingJobsSection() {
  const jobs = await client.fetch(jobsQuery)

  const previewJobs = jobs?.slice(0, 6) // landing preview only

  return (
    <section className="w-full bg-[#E8EDF2] py-28 px-6 border-t border-[#0B1220]/10">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">

          <div>
            <Badge className="bg-[#0B1220] text-white px-4 py-1 text-xs tracking-widest">
              LIVE OPPORTUNITIES
            </Badge>

            <h2 className="text-4xl md:text-5xl font-semibold text-[#0B1220] mt-6 tracking-tight">
              Latest Global Jobs
            </h2>

            <p className="text-[#0B1220]/60 mt-4 max-w-2xl text-sm md:text-base leading-relaxed">
              Real-time verified overseas job openings from trusted employers across Gulf and international markets.
            </p>
          </div>

          {/* VIEW ALL CTA */}
          <Link
            href="/jobs"
            className="
              flex items-center gap-2
              text-[#0B1220]
              font-medium text-sm
              hover:gap-3 transition-all
            "
          >
            View All Jobs
            <ArrowRight size={16} />
          </Link>

        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {previewJobs?.map((job: any) => (
            <JobCard key={job._id} job={job} />
          ))}

        </div>

        {/* FOOTER TRUST LINE */}
        <div className="mt-16 text-center">
          <p className="text-xs text-[#0B1220]/40 tracking-widest">
            ONLY VERIFIED AND ACTIVE OPPORTUNITIES ARE SHOWN
          </p>
        </div>

      </div>
    </section>
  )
}