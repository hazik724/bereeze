import { client } from "@/sanity/lib/client"
import { jobsQuery } from "@/sanity/lib/queries"
import JobCard from "@/components/JobCard"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ShieldCheck, Globe, Users, TrendingUp } from "lucide-react"

export default async function LandingJobsSection() {
  const jobs = await client.fetch(jobsQuery)
  const previewJobs = jobs?.slice(0, 6)

  return (
    <section className="w-full bg-[#E8EDF2] py-28 px-6 border-t border-[#124170]/10">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-14">

          <div className="max-w-2xl">

            {/* LIVE BADGE */}
            <Badge className="bg-[#124170] text-white px-4 py-1 text-xs tracking-widest flex items-center gap-2 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#F77F00] animate-pulse" />
              REAL-TIME GLOBAL RECRUITMENT FEED
            </Badge>

            {/* MAIN TITLE */}
            <h2 className="text-4xl md:text-5xl font-semibold text-[#124170] mt-6 tracking-tight leading-tight">
              Latest Verified Overseas Job Opportunities
            </h2>

            {/* RICH DESCRIPTION */}
            <p className="text-[#124170]/70 mt-5 text-sm md:text-base leading-relaxed">
              We continuously monitor and publish <span className="font-medium text-[#124170]">active hiring opportunities</span> from verified employers across Gulf countries including UAE, Saudi Arabia, Qatar, and Oman.  
              Every listing is reviewed for authenticity before being published.
            </p>

            {/* TRUST / AUTHORITY LAYER */}
            <div className="grid sm:grid-cols-3 gap-4 mt-6 text-xs text-[#124170]/60">

              <div className="flex items-center gap-2">
                <ShieldCheck size={14} />
                Verified Employers Only
              </div>

              <div className="flex items-center gap-2">
                <Globe size={14} />
                Gulf + International Market
              </div>

              <div className="flex items-center gap-2">
                <TrendingUp size={14} />
                Daily Updated Listings
              </div>

            </div>

            {/* MICRO INSIGHT TEXT */}
            <p className="text-[11px] text-[#124170]/40 mt-4 tracking-wide">
              “All opportunities are sourced from real recruitment demand, not scraped listings.”
            </p>

          </div>

          {/* CTA */}
          <div className="flex flex-col items-start md:items-end gap-3">

            <Link
              href="/jobs"
              className="
                flex items-center gap-2
                bg-[#124170] text-white
                px-6 py-3 rounded-full
                text-sm font-medium
                hover:bg-[#0f365c]
                transition
              "
            >
              Explore All Opportunities
              <ArrowRight size={16} />
            </Link>

            <p className="text-xs text-[#124170]/50 text-left md:text-right max-w-[220px]">
              New jobs are added as soon as employers request manpower
            </p>

          </div>

        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewJobs?.map((job: any) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>

        {/* FINAL TRUST LINE */}
        <div className="mt-16 text-center">

          <div className="flex items-center justify-center gap-2 text-xs text-[#124170]/50">
            <Users size={14} />
            Thousands of candidates successfully placed across Gulf countries
          </div>

          <p className="mt-3 text-[11px] text-[#124170]/40 tracking-widest">
            TRANSPARENT • VERIFIED • COMPLIANT RECRUITMENT SYSTEM
          </p>

        </div>

      </div>
    </section>
  )
}