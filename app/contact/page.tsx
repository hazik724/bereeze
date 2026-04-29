import ContactForm from "@/components/contactForm"
import { Clock, MapPin, ShieldCheck, Headphones } from "lucide-react"

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-[#E8EDF2] text-[#124170]">

      {/* ================= HERO ================= */}
      <div className="max-w-5xl mx-auto px-6 pt-28 pb-16 text-center">

        <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] bg-[#124170] text-white px-4 py-1 rounded-full">
          GLOBAL SUPPORT CENTER
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold mt-6">
          Let’s Build Your Overseas Career
        </h1>

        <p className="text-[#124170]/70 mt-4 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Connect with our recruitment team for job opportunities, hiring assistance,
          and international deployment guidance across Gulf countries.
        </p>

        {/* TRUST STRIP */}
        <div className="flex flex-wrap justify-center gap-5 mt-8 text-xs text-[#124170]/60">

          <Trust icon={<Clock size={14} />} text="24–48 Hour Response Time" />
          <Trust icon={<ShieldCheck size={14} />} text="Verified Recruitment Agency" />
          <Trust icon={<Headphones size={14} />} text="Dedicated Support Team" />

        </div>

      </div>

      {/* ================= MAIN ================= */}
      <div className="max-w-6xl mx-auto px-6 pb-24 grid lg:grid-cols-2 gap-10 items-start">

        {/* ================= LEFT INFO ================= */}
        <div className="space-y-6">

          <InfoCard
            icon={<MapPin size={18} />}
            title="Office Location"
            text="Shahdadpur, Sindh, Pakistan"
          />

          <InfoCard
            icon={<Clock size={18} />}
            title="Working Hours"
            text="Monday – Saturday | 9:00 AM – 6:00 PM"
          />

          <InfoCard
            icon={<ShieldCheck size={18} />}
            title="Trust & Verification"
            text="All applications are reviewed by our recruitment verification team"
          />

          {/* EXTRA TRUST BLOCK */}
          <div className="bg-white border border-[#124170]/10 p-6 rounded-2xl">
            <h3 className="font-semibold text-[#124170]">
              Why candidates trust us?
            </h3>

            <ul className="text-sm text-[#124170]/70 mt-3 space-y-2">
              <li>✔ Direct employer connections</li>
              <li>✔ Transparent recruitment process</li>
              <li>✔ No fake job listings</li>
              <li>✔ Verified Gulf partners</li>
            </ul>
          </div>

        </div>

        {/* ================= FORM ================= */}
        <div className="bg-white border border-[#124170]/10 rounded-2xl p-6 shadow-sm hover:shadow-xl transition">
          <ContactForm />
        </div>

      </div>

      {/* ================= FOOTER NOTE ================= */}
      <div className="text-center pb-10 text-[#124170]/40 text-xs tracking-[0.2em]">
        © {new Date().getFullYear()} BAREEZE MANPOWER • GLOBAL RECRUITMENT SYSTEM
      </div>

    </section>
  )
}

/* ================= TRUST ================= */
function Trust({
  icon,
  text,
}: {
  icon: React.ReactNode
  text: string
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[#F77F00]">{icon}</span>
      <span>{text}</span>
    </div>
  )
}

/* ================= INFO CARD ================= */
function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode
  title: string
  text: string
}) {
  return (
    <div className="bg-white border border-[#124170]/10 p-6 rounded-2xl hover:shadow-md transition">

      <div className="flex items-center gap-2 text-[#124170] mb-2">
        {icon}
        <h3 className="font-medium">{title}</h3>
      </div>

      <p className="text-sm text-[#124170]/70">{text}</p>

    </div>
  )
}