import ApplyGeneralForm from "@/components/GenralApplyForm"
import { ShieldCheck, Globe, Users, FileText, CheckCircle2 } from "lucide-react"

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-[#E8EDF2] text-[#124170]">

      {/* BACKGROUND GRID */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(#0B1220_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative max-w-5xl mx-auto px-5 py-20">

        {/* ================= HERO (SHORT + POWERFUL) ================= */}
        <div className="text-center max-w-2xl mx-auto">

          <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] bg-[#F77F00] text-white px-4 py-1 rounded-full">
            VERIFIED OVERSEAS RECRUITMENT SYSTEM
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold mt-6 leading-tight">
            Apply Once. Get Matched Globally.
          </h1>

          <p className="text-[#0B1220]/70 mt-5 text-sm md:text-base">
            Submit your complete profile and get connected with verified overseas employers
            across Gulf countries through our structured recruitment pipeline.
          </p>

          {/* TRUST ROW */}
          <div className="flex flex-wrap justify-center gap-3 mt-8 text-xs">

            <Badge icon={<ShieldCheck size={14} />} text="Verified Process" />
            <Badge icon={<Globe size={14} />} text="Gulf Network" />
            <Badge icon={<Users size={14} />} text="10,000+ Placements" />

          </div>

        </div>

        {/* ================= PROCESS (FLOW STYLE - NOT BOXES) ================= */}
        <div className="mt-16 space-y-6 ">

          <FlowStep
            icon={<FileText size={18} />}
            title="Step 1 — Submit Complete Profile"
            desc="Fill personal, passport, and experience details in one secure form."
          />

          <FlowStep
            icon={<Users size={18} />}
            title="Step 2 — Verification & Screening"
            desc="Our recruitment team verifies and evaluates your eligibility."
          />

          <FlowStep
            icon={<Globe size={18} />}
            title="Step 3 — Global Job Matching"
            desc="We connect you directly with active overseas employer requirements."
          />

        </div>

        {/* ================= FORM (CENTERPIECE) ================= */}
        <div className="mt-14 bg-white border border-[#0B1220]/10 rounded-2xl shadow-md p-6 md:p-10">

          <div className="mb-8">
            <h2 className="text-xl font-semibold">
              Complete Application Form
            </h2>

            <p className="text-sm text-[#124170]/60 mt-1">
              Ensure accuracy — your profile is directly sent to international recruiters.
            </p>
          </div>

          <ApplyGeneralForm />

        </div>

        {/* ================= SECURITY FOOTER ================= */}
        <div className="text-center mt-14">

          <div className="inline-flex items-center gap-2 text-sm text-[#0B1220]/60">
            <ShieldCheck size={16} />
            Your data is encrypted and used only for verified recruitment purposes
          </div>

          <p className="text-[11px] text-[#0B1220]/40 mt-3 tracking-widest">
            INTERNATIONAL COMPLIANCE • VERIFIED EMPLOYERS • SECURE PROCESSING
          </p>

        </div>

      </div>
    </div>
  )
}

/* ================= FLOW STEP ================= */
function FlowStep({ icon, title, desc }: any) {
  return (
    <div className="flex gap-4 items-start bg-white border border-[#0B1220]/10 rounded-xl p-5 hover:shadow-md transition">

      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#0B1220] text-white">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-[#0B1220]/60 mt-1 leading-relaxed">
          {desc}
        </p>
      </div>

    </div>
  )
}

/* ================= BADGE ================= */
function Badge({ icon, text }: any) {
  return (
    <div className="flex items-center gap-2 bg-white border border-[#0B1220]/10 px-3 py-1 rounded-full">
      {icon}
      {text}
    </div>
  )
}