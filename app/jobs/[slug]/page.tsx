import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import ApplyForm from "@/components/ApplyForm"
import { Badge } from "@/components/ui/badge"
import { MapPin, Building2, Wallet, CheckCircle2 } from "lucide-react"
import { urlFor } from "@/sanity/lib/image"

const jobQuery = groq`
  *[_type == "job" && slug.current == $slug][0]{
    title,
    company,
    country,
    salary,
    description,
    requirements,
    image
  }
`

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const job = await client.fetch(jobQuery, { slug })

  if (!job) return <div className="p-10">Job not found</div>

  return (
    <div className="min-h-screen bg-[#E8EDF2]">

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* HERO */}
        <div className="rounded-2xl overflow-hidden border border-[#0B1220]/10 bg-white shadow-sm">

          <div className="relative h-72 w-full">

            {job.image ? (
              <img
                src={urlFor(job.image).width(1400).height(600).url()}
                className="w-full h-full object-cover"
                alt={job.title}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[#0B1220]/40">
                No Preview Available
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/80 via-[#0B1220]/30 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">

              <Badge className="bg-[#0B1220] text-white text-xs tracking-widest px-4 py-1">
                VERIFIED JOB
              </Badge>

              <h1 className="text-white text-4xl font-semibold mt-4">
                {job.title}
              </h1>

              <div className="flex flex-wrap gap-5 mt-4 text-white/80 text-sm">

                <div className="flex items-center gap-2">
                  <Building2 size={14} />
                  {job.company}
                  <CheckCircle2 size={14} className="text-green-400" />
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  {job.country}
                </div>

                {job.salary && (
                  <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs">
                    <Wallet size={14} />
                    {job.salary}
                  </div>
                )}

              </div>

            </div>

          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-12 gap-8 mt-10">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-8 space-y-6">

            <div className="bg-white border border-[#0B1220]/10 rounded-2xl p-8">
              <h2 className="text-lg font-semibold text-[#0B1220]">
                Job Description
              </h2>

              <p className="mt-4 text-[#0B1220]/70 leading-relaxed whitespace-pre-line">
                {job.description}
              </p>
            </div>

            {job.requirements && (
              <div className="bg-white border border-[#0B1220]/10 rounded-2xl p-8">
                <h2 className="text-lg font-semibold text-[#0B1220]">
                  Requirements
                </h2>

                <p className="mt-4 text-[#0B1220]/70 leading-relaxed whitespace-pre-line">
                  {job.requirements}
                </p>
              </div>
            )}

          </div>

          {/* RIGHT STICKY APPLICATION PANEL */}
          <div className="lg:col-span-4">

            <div className="sticky top-10 space-y-6">

              {/* APPLICATION CONSOLE */}
              <div className="
                bg-white border border-[#0B1220]/10
                rounded-2xl p-6 shadow-sm
              ">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-[#0B1220]">
                    Application Console
                  </h3>

                  <p className="text-xs text-[#0B1220]/60 mt-1">
                    Secure submission system for verified candidates
                  </p>
                </div>

                {/* FORM WRAPPER (KEY FIX FOR ALIGNMENT) */}
                <div className="space-y-4">
                  <ApplyForm jobTitle={job.title} />
                </div>

              </div>

              {/* TRUST SYSTEM PANEL */}
              <div className="bg-[#0B1220] text-white rounded-2xl p-6">

                <h4 className="font-medium text-sm">
                  Verification System
                </h4>

                <p className="text-white/60 text-xs mt-3 leading-relaxed">
                  All applications undergo structured verification before employer submission.
                  This ensures authenticity and compliance with international hiring standards.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  )
}