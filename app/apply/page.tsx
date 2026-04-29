import ApplyGeneralForm from "@/components/GenralApplyForm"
import { ShieldCheck, Globe, Users, FileText } from "lucide-react"

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-[#E8EDF2] text-[#0B1220]">

      {/* BACKGROUND GRID */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.05] bg-[radial-gradient(#0B1220_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative max-w-6xl mx-auto px-5 py-16">

        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto">

          <div className="inline-flex items-center gap-2 text-xs tracking-widest bg-[#0B1220] text-white px-4 py-1 rounded-full">
            VERIFIED OVERSEAS APPLICATION SYSTEM
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold mt-6 leading-tight">
            Start Your International Career Journey
          </h1>

          <p className="text-[#0B1220]/70 mt-5 text-sm md:text-base leading-relaxed">
            Submit your complete profile once and get matched with verified overseas job opportunities
            across UAE, Saudi Arabia, Qatar, and Oman through our recruitment network.
          </p>

          {/* TRUST BADGES */}
          <div className="flex flex-wrap justify-center gap-3 mt-8 text-xs">

            <div className="flex items-center gap-2 bg-white border border-[#0B1220]/10 px-3 py-1 rounded-full">
              <ShieldCheck size={14} />
              Verified Process
            </div>

            <div className="flex items-center gap-2 bg-white border border-[#0B1220]/10 px-3 py-1 rounded-full">
              <Globe size={14} />
              Gulf Recruitment Network
            </div>

            <div className="flex items-center gap-2 bg-white border border-[#0B1220]/10 px-3 py-1 rounded-full">
              <Users size={14} />
              10,000+ Placements
            </div>

          </div>
        </div>

        {/* PROCESS EXPLANATION */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <Step
            icon={<FileText size={18} />}
            title="1. Submit Profile"
            desc="Fill complete personal, passport, and experience details once."
          />

          <Step
            icon={<Users size={18} />}
            title="2. Verification"
            desc="Our team reviews your data for eligibility and job matching."
          />

          <Step
            icon={<Globe size={18} />}
            title="3. Job Matching"
            desc="We connect you with active overseas employer requirements."
          />

        </div>

        {/* FORM SECTION */}
        <div className="mt-16 bg-white border border-[#0B1220]/10 rounded-2xl p-6 md:p-10 shadow-sm">

          <div className="mb-8">
            <h2 className="text-xl font-semibold">Complete Application Form</h2>
            <p className="text-sm text-[#0B1220]/60 mt-1">
              Please provide accurate information for faster processing and approval.
            </p>
          </div>

          <ApplyGeneralForm />

        </div>

        {/* FOOTER TRUST NOTE */}
        <div className="text-center mt-14 text-xs text-[#0B1220]/50 tracking-widest">
          YOUR DATA IS SECURE AND USED ONLY FOR VERIFIED RECRUITMENT PURPOSES
        </div>

      </div>
    </div>
  )
}

/* STEP CARD */
function Step({ icon, title, desc }: any) {
  return (
    <div className="bg-white border border-[#0B1220]/10 rounded-xl p-5 hover:shadow-md transition">
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#0B1220] text-white mb-4">
        {icon}
      </div>

      <h3 className="font-semibold text-[#0B1220]">{title}</h3>
      <p className="text-sm text-[#0B1220]/60 mt-2 leading-relaxed">{desc}</p>
    </div>
  )
}