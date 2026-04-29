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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >

      {/* SUCCESS STATE */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-4 text-sm text-green-400 border border-green-500/20 bg-green-500/5 p-3"
          >
            Message sent successfully. We will contact you soon.
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* FIELD */}
        {[
          { name: "name", placeholder: "Your Name" },
          { name: "email", placeholder: "Your Email" },
          { name: "subject", placeholder: "Subject" },
        ].map((field, i) => (
          <motion.input
            key={field.name}
            name={field.name}
            placeholder={field.placeholder}
            required={field.name !== "subject"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="
              w-full px-4 py-3
              bg-transparent
              border border-white/10
              text-white text-sm
              outline-none
              focus:border-white/30
              focus:shadow-[0_0_0_1px_rgba(255,255,255,0.1)]
              transition
            "
          />
        ))}

        {/* MESSAGE */}
        <motion.textarea
          name="message"
          placeholder="Your Message"
          required
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="
            w-full px-4 py-3 min-h-[120px]
            bg-transparent
            border border-white/10
            text-white text-sm
            outline-none
            resize-none
            focus:border-white/30
            transition
          "
        />

        {/* BUTTON */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={loading}
          className="
            w-full py-3
            bg-white text-[#0B1220]
            text-sm font-medium
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