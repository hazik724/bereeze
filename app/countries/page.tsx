export const dynamic = "force-dynamic"

import { Badge } from "@/components/ui/badge"
import { Globe, Users, MapPin, TrendingUp, ShieldCheck } from "lucide-react"

const countries = [
  {
    name: "United Arab Emirates",
    code: "UAE",
    flag: "/dubai.jfif",
    workers: "5,000+",
    roles: "Electricians • Drivers • Labor",
  },
  {
    name: "Saudi Arabia",
    code: "KSA",
    flag: "/ksa.jfif",
    workers: "8,000+",
    roles: "Construction • Technicians",
  },
  {
    name: "Qatar",
    code: "QATAR",
    flag: "/qatar.jfif",
    workers: "3,200+",
    roles: "Skilled Workers • Hospitality",
  },
  {
    name: "Oman",
    code: "OMAN",
    flag: "/oman.jfif",
    workers: "1,800+",
    roles: "Drivers • Warehouse Staff",
  },
]

export default function CountriesPage() {
  return (
    <div className="min-h-screen bg-[#E8EDF2] text-[#0B1220]">

      {/* GLOBAL GRID BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.05] bg-[radial-gradient(#0B1220_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative max-w-6xl mx-auto px-5 py-16">

        {/* ================= HERO ================= */}
        <div className="text-center mb-16">

          <Badge className="bg-[#124170] text-white px-4 py-1 text-xs tracking-[0.25em]">
            GLOBAL DEPLOYMENT NETWORK
          </Badge>

          <h1 className="text-4xl md:text-5xl font-semibold mt-6 leading-tight">
            International Workforce Distribution System
          </h1>

          <p className="text-[#0B1220]/70 mt-5 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            A structured global manpower network connecting verified workers
            with international employers across Gulf countries through a regulated deployment system.
          </p>

          {/* ================= SYSTEM STATS ================= */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">

            <Stat icon={<Globe size={16} />} label="Active Countries" value="4+" />
            <Stat icon={<Users size={16} />} label="Total Workers" value="18,000+" />
            <Stat icon={<MapPin size={16} />} label="Deployment Zone" value="Gulf Region" />
            <Stat icon={<TrendingUp size={16} />} label="System Growth" value="Expanding" />

          </div>

          {/* TRUST STRIP */}
          <div className="flex flex-wrap justify-center gap-5 mt-10 text-xs text-[#0B1220]/60">

            <Trust icon={<ShieldCheck size={14} />} text="Verified Deployment Channels" />
            <Trust icon={<Globe size={14} />} text="International Compliance System" />
            <Trust icon={<Users size={14} />} text="Active Workforce Network" />

          </div>

        </div>

        {/* ================= COUNTRY GRID ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">

          {countries.map((c, i) => (
            <div
              key={i}
              className="group bg-white border border-[#0B1220]/10 rounded-2xl overflow-hidden hover:shadow-2xl transition"
            >

              {/* IMAGE SECTION */}
              <div className="relative h-56 overflow-hidden">

                <img
                  src={c.flag}
                  alt={c.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-[#0B1220]/40" />

                {/* COUNTRY LABEL */}
                <div className="absolute bottom-5 left-5 text-white">
                  <h2 className="text-xl font-semibold">{c.name}</h2>
                  <p className="text-xs text-white/70">{c.code}</p>
                </div>

              </div>

              {/* CONTENT */}
              <div className="p-6">

                {/* WORKER METRIC */}
                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-xs text-[#0B1220]/50">Active Workers</p>
                    <p className="text-lg font-semibold text-[#124170]">{c.workers}</p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-[#0B1220]/50">Job Categories</p>
                    <p className="text-xs font-medium text-[#0B1220]/80">{c.roles}</p>
                  </div>

                </div>

                {/* PROGRESS BAR */}
                <div className="mt-6 h-[3px] w-full bg-[#0B1220]/10 rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-[#124170] group-hover:w-4/5 transition-all duration-500" />
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* ================= FOOTER ================= */}
        <div className="text-center mt-20">

          <p className="text-xs tracking-[0.2em] text-[#0B1220]/60">
            ALL DEPLOYMENTS ARE HANDLED THROUGH VERIFIED INTERNATIONAL RECRUITMENT CHANNELS
          </p>

          <p className="text-[11px] text-[#0B1220]/40 mt-3 italic">
            “We don’t send workers abroad — we build global careers.”
          </p>

        </div>

      </div>
    </div>
  )
}

/* ================= STAT ================= */
function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="bg-white border border-[#0B1220]/10 rounded-xl p-4 text-left hover:shadow-md transition">
      <div className="text-[#124170] mb-2">{icon}</div>
      <div className="text-lg font-semibold">{value}</div>
      <div className="text-xs text-[#0B1220]/60">{label}</div>
    </div>
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
      <span className="text-[#124170]">{icon}</span>
      <span>{text}</span>
    </div>
  )
}