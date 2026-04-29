"use client"

import { useState } from "react"
import {
  UploadCloud,
  User,
  Phone,
  Mail,
  Send,
  Calendar,
  CreditCard,
  CheckCircle2,
} from "lucide-react"

export default function ApplyForm({ jobTitle }: { jobTitle: string }) {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: any) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target)
    formData.append("jobTitle", jobTitle)

    const res = await fetch("/api/apply", {
      method: "POST",
      body: formData,
    })

    if (res.ok) {
      alert("Application submitted successfully!")
      e.target.reset()
      setStep(1)
    } else {
      alert("Submission failed. Please try again.")
    }

    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* HEADER */}
      <div>
        <h3 className="text-lg font-semibold text-[#124170]">
          Application Form
        </h3>

        <p className="text-xs text-[#124170]/60 mt-1">
          Applying for: <span className="font-medium">{jobTitle}</span>
        </p>

        {/* STEP INDICATOR (VISUAL SYSTEM) */}
        <div className="flex items-center justify-between mt-6 text-xs">

          <StepDot active={step >= 1} label="Personal" />
          <Line />
          <StepDot active={step >= 2} label="Details" />
          <Line />
          <StepDot active={step >= 3} label="Upload" />

        </div>
      </div>

      {/* STEP 1 */}
      {step === 1 && (
        <div className="space-y-4">

          <Input icon={<User size={16} />} name="fullName" label="Full Name" />
          <Input icon={<Phone size={16} />} name="phone" label="Phone" />
          <Input icon={<Mail size={16} />} name="email" label="Email (Optional)" />

          <button
            type="button"
            onClick={() => setStep(2)}
            className="w-full bg-[#124170] text-white py-3 rounded-xl"
          >
            Continue
          </button>

        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="space-y-4">

          <Input icon={<Calendar size={16} />} name="dateOfBirth" label="Date of Birth" type="date" />
          <Input icon={<CreditCard size={16} />} name="passportNumber" label="Passport Number" />

          <div className="grid grid-cols-2 gap-4">
            <Input icon={<Calendar size={16} />} name="passportIssueDate" label="Issue Date" type="date" />
            <Input icon={<Calendar size={16} />} name="passportExpiryDate" label="Expiry Date" type="date" />
          </div>

          {/* EXPERIENCE */}
          <div className="flex gap-4 text-sm text-[#124170]/70">
            <label className="flex items-center gap-2">
              <input type="radio" name="experienceType" value="fresher" />
              Fresher
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="experienceType" value="gulf_return" />
              Gulf Return
            </label>
          </div>

          <div className="flex gap-3">
            <button type="button" onClick={() => setStep(1)} className="w-full border border-[#124170]/20 py-3 rounded-xl">
              Back
            </button>

            <button type="button" onClick={() => setStep(3)} className="w-full bg-[#124170] text-white py-3 rounded-xl">
              Continue
            </button>
          </div>

        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div className="space-y-4">

          <label className="flex flex-col items-center justify-center border border-dashed border-[#124170]/20 rounded-xl p-6 cursor-pointer bg-white hover:bg-[#E8EDF2] transition">

            <UploadCloud size={20} className="text-[#124170]/40" />

            <p className="text-sm text-[#124170]/60 mt-2">
              Upload CV (PDF, DOC)
            </p>

            <input type="file" name="cv" required className="hidden" />
          </label>

          <textarea
            name="message"
            placeholder="Message (optional)"
            className="w-full border border-[#124170]/10 rounded-xl p-3 text-sm"
          />

          <div className="flex gap-3">

            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full border border-[#124170]/20 py-3 rounded-xl"
            >
              Back
            </button>

            <button
              disabled={loading}
              className="w-full bg-[#F77F00] text-white py-3 rounded-xl flex items-center justify-center gap-2"
            >
              <Send size={16} />
              {loading ? "Submitting..." : "Submit Application"}
            </button>

          </div>

        </div>
      )}

    </form>
  )
}

/* STEP DOT */
function StepDot({ active, label }: any) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className={`w-3 h-3 rounded-full ${active ? "bg-[#F77F00]" : "bg-[#124170]/20"}`} />
      <span className={active ? "text-[#124170]" : "text-[#124170]/40"}>
        {label}
      </span>
    </div>
  )
}

/* LINE */
function Line() {
  return <div className="flex-1 h-[2px] bg-[#124170]/10 mx-2" />
}

/* INPUT */
function Input({ icon, name, label, type = "text" }: any) {
  return (
    <div className="space-y-2">
      <label className="text-xs text-[#124170]/70">{label}</label>

      <div className="flex items-center gap-2 border border-[#124170]/10 rounded-xl px-3 py-2 bg-white">
        <span className="text-[#124170]/40">{icon}</span>

        <input
          name={name}
          type={type}
          className="w-full outline-none text-sm"
        />
      </div>
    </div>
  )
}