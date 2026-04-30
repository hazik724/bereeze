"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import Image from "next/image"

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-[#124170]/10 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm"
          : "bg-white/60 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-14" : "h-16"
          }`}
        >

          {/* LOGO */}
<Link href="/" className="flex items-center gap-3">

<Image
  src="/logo.png"
  alt="Bareeze Manpower Logo"
  width={100}
  height={40}
  priority
  className="h-15 w-auto "
/>

</Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-7">

            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActive(item.id)}
                className={`text-sm font-medium transition relative ${
                  active === item.id
                    ? "text-[#124170]"
                    : "text-[#124170]/70 hover:text-[#124170]"
                }`}
              >
                {item.name}

                {active === item.id && (
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#F77F00] rounded-full" />
                )}
              </Link>
            ))}

            {/* SERVICES */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 text-sm font-medium text-[#124170]/70 hover:text-[#124170]"
              >
                Services <ChevronDown size={16} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    className="absolute top-10 left-0 w-64 bg-white border border-[#124170]/10 shadow-lg rounded-xl overflow-hidden"
                  >
                    {services.map((service) => (
                      <div
                        key={service}
                        className="px-4 py-3 text-sm text-[#124170]/70 hover:text-[#124170] hover:bg-[#E8EDF2] cursor-pointer transition"
                      >
                        {service}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CALL */}
            <a
              href="https://wa.me/923173890580"
              target="_blank"
              className="flex items-center gap-2 px-3 py-2 text-sm rounded-full border border-[#124170]/20 text-[#124170]/70 hover:text-[#124170] hover:border-[#124170]/40 transition"
            >
              <Phone size={14} /> Call
            </a>

            {/* CTA */}
            <Link
              href="/apply"
              className="px-5 py-2 bg-[#F77F00] text-white text-sm font-medium rounded-full hover:bg-[#e56f00] transition shadow-sm"
            >
              Apply Now
            </Link>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#124170]"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-[#124170]/10 overflow-hidden"
          >
            <div className="px-5 py-5 flex flex-col gap-4">

              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#124170]/70 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="border-t border-[#124170]/10 pt-3">
                <p className="text-sm font-semibold text-[#124170] mb-2">
                  Services
                </p>

                {services.map((s) => (
                  <div
                    key={s}
                    className="text-sm text-[#124170]/60 py-1"
                  >
                    {s}
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/923173890580"
                target="_blank"
                className="flex items-center gap-2 px-3 py-2 text-sm rounded-full border border-[#124170]/20 text-[#124170]/70"
              >
                <Phone size={14} /> Call
              </a>

              <Link
                href="/apply"
                className="px-5 py-2 bg-[#F77F00] text-white text-sm font-medium rounded-full"
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