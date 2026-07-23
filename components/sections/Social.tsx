"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube } from "lucide-react";

export default function Social() {
  return (
    <section className="py-24 md:py-36 px-5 md:px-12 lg:px-24 border-t border-b border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight mb-12 md:mb-16"
          style={{ fontSize: "clamp(2.8rem, 8vw, 5rem)" }}
        >
          Слідкуй
        </motion.h2>

        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a
            href="https://www.instagram.com/cpt.guy/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-4 py-5 px-6 border border-white/10 rounded-2xl hover:border-white/20 hover:bg-white/[0.02] transition-all duration-300"
          >
            <Instagram size={20} className="text-text-secondary group-hover:text-white transition-colors" />
            <div>
              <p className="font-heading text-xl uppercase tracking-wide">Instagram</p>
              <p className="text-text-secondary text-sm">@cpt.guy</p>
            </div>
          </motion.a>

          <motion.a
            href="https://www.youtube.com/@slavikmartyniuk"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-4 py-5 px-6 border border-white/10 rounded-2xl hover:border-white/20 hover:bg-white/[0.02] transition-all duration-300"
          >
            <Youtube size={20} className="text-text-secondary group-hover:text-white transition-colors" />
            <div>
              <p className="font-heading text-xl uppercase tracking-wide">YouTube</p>
              <p className="text-text-secondary text-sm">@slavikmartyniuk</p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
