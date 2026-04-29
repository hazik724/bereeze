"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { urlFor } from "@/sanity/lib/image"
import { Briefcase, MapPin, Building2, BadgeCheck, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Job {
  _id: string
  title: string
  company: string
  country: string
  salary?: string
  image?: any
  slug: {
    current: string
  }
}

export default function JobCard({ job }: { job: Job }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -6 }}
      className="group"
    >
      <Link
        href={`/jobs/${job.slug.current}`}
        className="
          block overflow-hidden rounded-2xl
          border border-[#0B1220]/10
          bg-white/70 backdrop-blur-md
          shadow-sm hover:shadow-xl
          transition-all duration-300
        "
      >

        {/* IMAGE SECTION */}
        <div className="relative h-48 w-full overflow-hidden bg-[#E8EDF2]">

          {job.image ? (
            <img
              src={urlFor(job.image).width(900).height(600).url()}
              alt={job.title}
              className="
                w-full h-full object-cover
                group-hover:scale-105 transition duration-700
              "
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Briefcase className="text-[#0B1220]/30" size={26} />
            </div>
          )}

          {/* TOP BADGE OVERLAY */}
          <div className="absolute top-3 left-3">
            <Badge className="bg-[#0B1220] text-white text-[10px] tracking-widest px-3 py-1">
              VERIFIED OPPORTUNITY
            </Badge>
          </div>

        </div>

        {/* CONTENT */}
        <div className="p-6">

          {/* TITLE */}
          <h3 className="text-[#0B1220] font-semibold text-lg leading-snug tracking-tight group-hover:text-[#0B1220]/90">
            {job.title}
          </h3>

          {/* COMPANY ROW */}
          <div className="flex items-center gap-2 mt-2 text-sm text-[#0B1220]/60">
            <Building2 size={14} />
            <span>{job.company}</span>
            <BadgeCheck size={14} className="text-green-500 ml-1" />
          </div>

          {/* META GRID */}
          <div className="flex flex-wrap gap-2 mt-4">

            <span className="
              flex items-center gap-1
              text-xs px-3 py-1 rounded-full
              border border-[#0B1220]/10
              bg-[#E8EDF2]
              text-[#0B1220]/70
            ">
              <MapPin size={12} />
              {job.country}
            </span>

            {job.salary && (
              <span className="
                text-xs px-3 py-1 rounded-full
                bg-[#0B1220] text-white
              ">
                {job.salary}
              </span>
            )}

          </div>

          {/* DIVIDER */}
          <div className="my-5 h-[1px] bg-[#0B1220]/10" />

          {/* FOOTER ACTION ROW */}
          <div className="flex items-center justify-between">

            <span className="text-xs text-[#0B1220]/40 tracking-wide">
              International deployment listing
            </span>

            <div className="
              flex items-center gap-2
              text-sm font-medium
              text-[#0B1220]
              group-hover:gap-3 transition-all
            ">
              Apply Now
              <ArrowRight size={16} />
            </div>

          </div>

        </div>
      </Link>
    </motion.div>
  )
}