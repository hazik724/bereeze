"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/", id: "home" },
    { name: "Jobs", href: "/jobs", id: "jobs" },
    { name: "Countries", href: "/countries", id: "countries" },
    { name: "About", href: "/about", id: "about" },
    { name: "Contact", href: "/contact", id: "contact" },
  ];

  const services = [
    "Manpower Recruitment",
    "Visa Processing",
    "Travel Arrangements",
    "Work Permits",
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/10 ${
        scrolled
          ? "bg-[#0B1220]/80 backdrop-blur-xl shadow-lg"
          : "bg-[#0B1220]/50 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-14" : "h-16"
          }`}
        >
          {/* Logo */}
          <Link
            href="#"
            className="text-xl font-semibold tracking-wide text-white"
          >
            BAREEZE<span className="text-amber-400"> MANPOWER</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">

            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActive(item.id)}
                className={`text-sm font-medium transition relative ${
                  active === item.id
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.name}

                {/* Active underline */}
                {active === item.id && (
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-amber-400 rounded-full" />
                )}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 text-sm font-medium text-white/70 hover:text-white"
              >
                Services <ChevronDown size={16} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    className="absolute top-10 left-0 w-64 bg-[#0F172A] border border-white/10 shadow-2xl rounded-xl overflow-hidden"
                  >
                    {services.map((service) => (
                      <div
                        key={service}
                        className="px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 cursor-pointer transition"
                      >
                        {service}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Call */}
            <a
  href="https://wa.me/923173890580"
  target="_blank"
  className="flex items-center gap-2 px-3 py-2 text-sm rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition"
>
  <Phone size={14} /> Call
</a>

            {/* CTA */}
            <Link
  href="/apply"
  className="px-5 py-2 bg-amber-400 text-black text-sm font-medium rounded-full hover:bg-amber-300 transition shadow-md"
>
  Apply Now
</Link>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#0B1220] border-t border-white/10 overflow-hidden"
          >
            <div className="px-5 py-5 flex flex-col gap-4">

              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/70 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="border-t border-white/10 pt-3">
                <p className="text-sm font-semibold text-white mb-2">
                  Services
                </p>
                {services.map((s) => (
                  <div
                    key={s}
                    className="text-sm text-white/60 py-1"
                  >
                    {s}
                  </div>
                ))}
              </div>

              <a
  href="https://wa.me/923173890580"
  target="_blank"
  className="flex items-center gap-2 px-3 py-2 text-sm rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition"
>
  <Phone size={14} /> Call
</a>

<Link
  href="/apply"
  className="px-5 py-2 bg-amber-400 text-black text-sm font-medium rounded-full hover:bg-amber-300 transition shadow-md"
>
  Apply Now
</Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}