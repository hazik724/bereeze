"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { urlFor } from "@/sanity/lib/image"
import {
  Briefcase,
  MapPin,
  Building2,
  BadgeCheck,
  ArrowRight,
  Clock3,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function JobCard({ job }: any) {
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
          bg-white border border-[#124170]/10
          shadow-sm hover:shadow-xl
          transition-all duration-300
        "
      >

        {/* ================= IMAGE ================= */}
        <div className="relative h-52 overflow-hidden bg-[#E8EDF2]">

          {job.image ? (
            <img
              src={urlFor(job.image).width(900).height(600).url()}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Briefcase className="text-[#124170]/20" size={28} />
            </div>
          )}

          {/* TOP STRIP (URGENCY / STATUS) */}
          <div className="absolute top-3 left-3 flex gap-2">

            <Badge className="bg-[#F77F00] text-white text-[10px] tracking-widest px-3 py-1">
              VERIFIED OPPORTUNITY
            </Badge>

            <div className="flex items-center gap-1 bg-white/90 backdrop-blur px-2 py-1 rounded-full text-[10px] text-[#124170]">
              <Clock3 size={12} />
              Active
            </div>

          </div>

        </div>

        {/* ================= CONTENT ================= */}
        <div className="p-6">

          {/* TITLE (PRIMARY) */}
          <h3 className="text-[#124170] font-semibold text-lg leading-snug group-hover:text-[#124170]/90">
            {job.title}
          </h3>

          {/* COMPANY (SECONDARY AUTHORITY) */}
          <div className="flex items-center gap-2 mt-2 text-sm text-[#124170]/60">
            <Building2 size={14} />
            <span>{job.company}</span>
            <BadgeCheck size={14} className="text-[#F77F00]" />
          </div>

          {/* META (FAST SCAN INFO) */}
          <div className="flex flex-wrap gap-2 mt-4">

            <span className="
              flex items-center gap-1
              text-xs px-3 py-1 rounded-full
              bg-[#E8EDF2] text-[#124170]/70
              border border-[#124170]/10
            ">
              <MapPin size={12} />
              {job.country}
            </span>

            {job.salary && (
              <span className="
                text-xs px-3 py-1 rounded-full
                bg-[#124170] text-white
              ">
                {job.salary}
              </span>
            )}

          </div>

          {/* DIVIDER */}
          <div className="my-5 h-[1px] bg-[#124170]/10" />

          {/* FOOTER */}
          <div className="flex items-center justify-between">

            {/* TRUST LINE */}
            <span className="text-[11px] text-[#124170]/40 tracking-wide">
              Verified international recruitment listing
            </span>

            {/* CTA (NOW STRONGER) */}
            <div className="
              flex items-center gap-2
              text-sm font-semibold
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