"use client";

import { useState } from "react";

export default function ApplyGeneralForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("appliedAt", new Date().toISOString());
    const res = await fetch("/api/apply-general", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      alert("Application submitted successfully!");
      e.target.reset();
    } else {
      alert("Failed to submit application");
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* NAME */}
      <input
        name="fullName"
        placeholder="Full Name"
        className="w-full border border-[#0B1220]/10 p-3"
        required
      />

      {/* PHONE */}
      <input
        name="phone"
        placeholder="Phone Number"
        className="w-full border border-[#0B1220]/10 p-3"
        required
      />

      {/* EMAIL */}
      <input
        name="email"
        placeholder="Email (optional)"
        className="w-full border border-[#0B1220]/10 p-3"
      />

      {/* COUNTRY */}
      <input
        name="country"
        placeholder="Preferred Country (UAE / Saudi / Qatar)"
        className="w-full border border-[#0B1220]/10 p-3"
      />

      {/* JOB INTEREST */}
      <input
        name="jobTitle"
        placeholder="Job Preference (Electrician, Driver, etc.)"
        className="w-full border border-[#0B1220]/10 p-3"
      />

      {/* MESSAGE */}
      <textarea
        name="message"
        placeholder="Message"
        className="w-full border border-[#0B1220]/10 p-3"
      />

      {/* CV */}
      <input
        type="file"
        name="cv"
        className="w-full"
        required
      />

      {/* SUBMIT */}
      <button
        disabled={loading}
        className="bg-[#0B1220] text-white px-6 py-3 w-full"
      >
        {loading ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}