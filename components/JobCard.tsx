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
  slug: { current: string }
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
          border border-[#124170]/10
          bg-white
          shadow-sm hover:shadow-lg
          transition-all duration-300
        "
      >

        {/* IMAGE */}
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
              <Briefcase className="text-[#124170]/20" size={26} />
            </div>
          )}

          {/* VERIFIED BADGE */}
          <div className="absolute top-3 left-3">
            <Badge className="bg-[#124170] text-white text-[10px] tracking-widest px-3 py-1">
              VERIFIED JOB
            </Badge>
          </div>

        </div>

        {/* CONTENT */}
        <div className="p-6">

          {/* TITLE */}
          <h3 className="text-[#124170] font-semibold text-lg leading-snug group-hover:text-[#124170]/90">
            {job.title}
          </h3>

          {/* COMPANY */}
          <div className="flex items-center gap-2 mt-2 text-sm text-[#124170]/60">
            <Building2 size={14} />
            <span>{job.company}</span>
            <BadgeCheck size={14} className="text-[#F77F00]" />
          </div>

          {/* META */}
          <div className="flex flex-wrap gap-2 mt-4">

            <span className="
              flex items-center gap-1
              text-xs px-3 py-1 rounded-full
              border border-[#124170]/10
              bg-[#E8EDF2]
              text-[#124170]/70
            ">
              <MapPin size={12} />
              {job.country}
            </span>

            {job.salary && (
              <span className="
                text-xs px-3 py-1 rounded-full
                bg-[#124170]
                text-white
              ">
                {job.salary}
              </span>
            )}

          </div>

          {/* DIVIDER */}
          <div className="my-5 h-[1px] bg-[#124170]/10" />

          {/* FOOTER */}
          <div className="flex items-center justify-between">

            <span className="text-xs text-[#124170]/40 tracking-wide">
              International verified recruitment listing
            </span>

            <div className="
              flex items-center gap-2
              text-sm font-medium
              text-[#124170]
              group-hover:gap-3 transition-all
            ">
              Apply Now
              <ArrowRight size={16} className="text-[#F77F00]" />
            </div>

          </div>

        </div>
      </Link>
    </motion.div>
  )
}