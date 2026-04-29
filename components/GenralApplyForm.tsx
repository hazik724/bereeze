"use client"

import { useState } from "react"
import {
  User,
  Phone,
  Mail,
  Calendar,
  CreditCard,
  UploadCloud,
  Send,
  Globe,
  ShieldCheck,
} from "lucide-react"

export default function ApplyGeneralForm() {
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: any) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target)

    const res = await fetch("/api/apply-general", {
      method: "POST",
      body: formData,
    })

    if (res.ok) {
      alert("Application submitted successfully!")
      e.target.reset()
    } else {
      alert("Failed to submit application")
    }

    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">

      {/* ================= PERSONAL SECTION ================= */}
      <Section title="Personal Information" icon={<User size={16} />}>

        <div className="grid grid-cols-2 gap-4">
          <Input name="fullName" label="First Name" icon={<User size={16} />} required />
          <Input name="surname" label="Surname" icon={<User size={16} />} required />
        </div>

        <Input name="phone" label="Phone Number" icon={<Phone size={16} />} required />
        <Input name="email" label="Email Address (Optional)" icon={<Mail size={16} />} />

      </Section>

      {/* ================= WORK SECTION ================= */}
      <Section title="Work Preference" icon={<Globe size={16} />}>

        <Input
          name="country"
          label="Preferred Country"
          placeholder="UAE / Saudi / Qatar"
        />

        <Input
          name="jobTitle"
          label="Job Preference"
          placeholder="Electrician, Driver, Technician..."
        />

      </Section>

      {/* ================= PASSPORT SECTION ================= */}
      <Section title="Identity & Passport Details" icon={<CreditCard size={16} />}>

        <Input
          name="dateOfBirth"
          label="Date of Birth"
          type="date"
          icon={<Calendar size={16} />}
          required
        />

        <Input
          name="passportNumber"
          label="Passport Number"
          icon={<CreditCard size={16} />}
          required
        />

        <div className="grid grid-cols-2 gap-4">
          <Input name="passportIssueDate" label="Issue Date" type="date" icon={<Calendar size={16} />} required />
          <Input name="passportExpiryDate" label="Expiry Date" type="date" icon={<Calendar size={16} />} required />
        </div>

      </Section>

      {/* ================= EXPERIENCE ================= */}
      <Section title="Experience Level" icon={<ShieldCheck size={16} />}>

        <div className="flex gap-6 text-sm text-[#124170]">
          <label className="flex items-center gap-2">
            <input type="radio" name="experienceType" value="fresher" required />
            Fresher
          </label>

          <label className="flex items-center gap-2">
            <input type="radio" name="experienceType" value="gulf_return" required />
            Gulf Return
          </label>
        </div>

      </Section>

      {/* ================= MESSAGE ================= */}
      <textarea
        name="message"
        placeholder="Write your experience or message..."
        className="w-full border border-[#124170]/10 rounded-xl px-3 py-3 text-sm outline-none"
      />

      {/* ================= UPLOAD SECTION ================= */}
      <Section title="Document Upload" icon={<UploadCloud size={16} />}>

        {/* CV */}
        <UploadBox
          name="cv"
          title="Upload CV"
          desc="PDF, DOC files accepted"
        />

        {/* PASSPORT IMAGE */}
        <UploadBox
          name="passportImage"
          title="Passport Image"
          desc="Optional but recommended"
        />

      </Section>

      {/* ================= SUBMIT ================= */}
      <button
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-[#124170] text-white py-4 rounded-xl text-sm font-medium hover:bg-[#0f365f] transition disabled:opacity-60"
      >
        <Send size={16} />
        {loading ? "Submitting Application..." : "Submit Application"}
      </button>

    </form>
  )
}

/* ================= SECTION WRAPPER ================= */
function Section({ title, icon, children }: any) {
  return (
    <div className="space-y-5">

      <div className="flex items-center gap-2 text-[#124170] font-medium">
        {icon}
        <span>{title}</span>
      </div>

      <div className="space-y-4">
        {children}
      </div>

    </div>
  )
}

/* ================= INPUT ================= */
function Input({
  name,
  label,
  icon,
  type = "text",
  required = false,
  placeholder = "",
}: any) {
  return (
    <div className="space-y-2">

      <label className="text-xs text-[#124170]/70">{label}</label>

      <div className="flex items-center gap-2 border border-[#124170]/10 rounded-xl px-3 py-2 bg-white focus-within:border-[#124170]">

        <span className="text-[#124170]/40">{icon}</span>

        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className="w-full outline-none text-sm bg-transparent"
        />

      </div>

    </div>
  )
}

/* ================= UPLOAD BOX ================= */
function UploadBox({ name, title, desc }: any) {
  return (
    <label className="flex flex-col items-center justify-center border border-dashed border-[#124170]/20 rounded-xl p-6 cursor-pointer bg-white hover:bg-[#E8EDF2] transition">

      <UploadCloud size={20} className="text-[#124170]/40" />

      <p className="text-sm text-[#124170]/70 mt-2">{title}</p>
      <p className="text-xs text-[#124170]/40">{desc}</p>

      <input type="file" name={name} className="hidden" />

    </label>
  )
}