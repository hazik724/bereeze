import ContactForm from "@/components/contactForm";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-[#0B1220] text-white">

      {/* HERO HEADER */}
      <div className="max-w-5xl mx-auto px-6 pt-28 pb-16 text-center">

        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Get in Touch
        </h1>

        <p className="text-white/50 mt-4 text-sm md:text-base max-w-2xl mx-auto">
          Have a question about recruitment, hiring, or overseas jobs?
          Our team will respond within 24–48 hours.
        </p>

      </div>

      {/* MAIN GRID */}
      <div className="max-w-6xl mx-auto px-6 pb-24 grid lg:grid-cols-2 gap-12 items-start">

        {/* LEFT INFO PANEL */}
        <div className="space-y-8">

          <div className="border border-white/10 p-6">
            <h3 className="text-lg font-medium">Office Information</h3>
            <p className="text-white/50 text-sm mt-2">
              Shahdadpur, Sindh, Pakistan
            </p>
          </div>

          <div className="border border-white/10 p-6">
            <h3 className="text-lg font-medium">Working Hours</h3>
            <p className="text-white/50 text-sm mt-2">
              Monday – Saturday<br />
              9:00 AM – 6:00 PM
            </p>
          </div>

          <div className="border border-white/10 p-6">
            <h3 className="text-lg font-medium">Support</h3>
            <p className="text-white/50 text-sm mt-2">
              We respond to all inquiries within 24–48 hours.
            </p>
          </div>

        </div>

        {/* RIGHT FORM */}
        <div className="border border-white/10 p-6">
          <ContactForm />
        </div>

      </div>

      {/* FOOTER NOTE */}
      <div className="text-center pb-10 text-white/30 text-xs">
        © {new Date().getFullYear()} Global Work Agency. All rights reserved.
      </div>

    </section>
  );
}