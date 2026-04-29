"use client"

import { useState } from "react"
import { UploadCloud, User, Phone, Mail, Send } from "lucide-react"

export default function ApplyForm({ jobTitle }: { jobTitle: string }) {
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
    } else {
      alert("Submission failed. Please try again.")
    }

    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* HEADER */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-[#0B1220]">
          Application Form
        </h3>
        <p className="text-xs text-[#0B1220]/60 mt-1">
          Applying for: <span className="font-medium">{jobTitle}</span>
        </p>
      </div>

      {/* FULL NAME */}
      <div className="space-y-2">
        <label className="text-xs text-[#0B1220]/70">Full Name</label>
        <div className="flex items-center gap-2 border border-[#0B1220]/10 rounded-xl px-3 py-2 bg-white focus-within:border-[#0B1220]">
          <User size={16} className="text-[#0B1220]/40" />
          <input
            name="fullName"
            required
            placeholder="Enter your full name"
            className="w-full outline-none text-sm bg-transparent"
          />
        </div>
      </div>

      {/* PHONE */}
      <div className="space-y-2">
        <label className="text-xs text-[#0B1220]/70">Phone Number</label>
        <div className="flex items-center gap-2 border border-[#0B1220]/10 rounded-xl px-3 py-2 bg-white focus-within:border-[#0B1220]">
          <Phone size={16} className="text-[#0B1220]/40" />
          <input
            name="phone"
            required
            placeholder="+92 xxx xxxxxxx"
            className="w-full outline-none text-sm bg-transparent"
          />
        </div>
      </div>

      {/* EMAIL */}
      <div className="space-y-2">
        <label className="text-xs text-[#0B1220]/70">Email (Optional)</label>
        <div className="flex items-center gap-2 border border-[#0B1220]/10 rounded-xl px-3 py-2 bg-white focus-within:border-[#0B1220]">
          <Mail size={16} className="text-[#0B1220]/40" />
          <input
            name="email"
            placeholder="example@gmail.com"
            className="w-full outline-none text-sm bg-transparent"
          />
        </div>
      </div>

      {/* MESSAGE */}
      <div className="space-y-2">
        <label className="text-xs text-[#0B1220]/70">Message</label>
        <div className="border border-[#0B1220]/10 rounded-xl px-3 py-2 bg-white focus-within:border-[#0B1220]">
          <textarea
            name="message"
            placeholder="Write short message or experience..."
            className="w-full outline-none text-sm bg-transparent min-h-[90px] resize-none"
          />
        </div>
      </div>

      {/* CV UPLOAD */}
      <div className="space-y-2">
        <label className="text-xs text-[#0B1220]/70">Upload CV</label>

        <label className="
          flex flex-col items-center justify-center
          border border-dashed border-[#0B1220]/20
          rounded-xl p-6 cursor-pointer
          bg-white hover:bg-[#E8EDF2]
          transition
        ">
          <UploadCloud className="text-[#0B1220]/40" size={20} />

          <p className="text-sm text-[#0B1220]/60 mt-2">
            Click to upload CV (PDF, DOC)
          </p>

          <input
            type="file"
            name="cv"
            required
            className="hidden"
          />
        </label>
      </div>

      {/* SUBMIT */}
      <button
        disabled={loading}
        className="
          w-full flex items-center justify-center gap-2
          bg-[#0B1220] text-white
          py-3 rounded-xl
          text-sm font-medium
          hover:bg-[#111C33]
          transition
          disabled:opacity-60
        "
      >
        <Send size={16} />
        {loading ? "Submitting..." : "Submit Application"}
      </button>

      {/* FOOTNOTE */}
      <p className="text-[11px] text-[#0B1220]/40 text-center mt-2">
        Your application will be reviewed by our verification team.
      </p>

    </form>
  )
}