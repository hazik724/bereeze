"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      setSuccess(true);
      e.target.reset();
      setTimeout(() => setSuccess(false), 3000);
    }

    setLoading(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        bg-white
        border border-[#124170]/10
        rounded-2xl
        p-6
      "
    >

      {/* SUCCESS */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="
              mb-4 text-sm
              text-green-700
              bg-green-50
              border border-green-200
              p-3 rounded-lg
            "
          >
            Message sent successfully. We will contact you soon.
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* INPUTS */}
        {[
          { name: "name", placeholder: "Your Name", required: true },
          { name: "email", placeholder: "Your Email", required: true },
          { name: "subject", placeholder: "Subject", required: false },
        ].map((field, i) => (
          <motion.input
            key={field.name}
            name={field.name}
            placeholder={field.placeholder}
            required={field.required}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="
              w-full px-4 py-3
              bg-[#E8EDF2]
              border border-[#124170]/10
              text-[#124170]
              text-sm
              rounded-lg
              outline-none
              focus:border-[#124170]
              transition
            "
          />
        ))}

        {/* MESSAGE */}
        <motion.textarea
          name="message"
          placeholder="Your Message"
          required
          className="
            w-full px-4 py-3 min-h-[120px]
            bg-[#E8EDF2]
            border border-[#124170]/10
            text-[#124170]
            text-sm
            rounded-lg
            outline-none
            resize-none
            focus:border-[#124170]
            transition
          "
        />

        {/* BUTTON */}
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          disabled={loading}
          className="
            w-full py-3
            bg-[#124170]
            text-white
            text-sm font-medium
            rounded-lg
            hover:bg-[#0f3558]
            transition
            disabled:opacity-50
          "
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>

      </form>
    </motion.div>
  );
}