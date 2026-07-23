"use client";

import { motion } from "framer-motion";
import { shows } from "@/data/shows";

export default function Tour() {
  return (
    <section id="tour" className="py-20 md:py-36 px-5 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight mb-12 md:mb-20"
          style={{ fontSize: "clamp(2.8rem, 8vw, 5rem)" }}
        >
          Концерти
        </motion.h2>

        <div className="border-t border-white/10">
          {shows.map((show, index) => (
            <motion.div
              key={show.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
            >
              <motion.a
                href={show.status === "available" && show.ticketUrl && show.ticketUrl !== "#" ? show.ticketUrl : undefined}
                target={show.status === "available" ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ backgroundColor: "rgba(24,199,193,0.03)" }}
                whileTap={{ scale: 0.995 }}
                className={`group relative block py-5 md:py-6 border-b border-white/10 transition-colors duration-500 ${
                  show.status !== "available" ? "opacity-30 pointer-events-none" : "cursor-pointer"
                }`}
              >
                {/* Mobile layout */}
                <div className="md:hidden px-1">
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <span className="font-heading text-2xl uppercase group-hover:text-accent transition-colors duration-500">
                      {show.city}
                    </span>
                    <span className="text-text-secondary text-sm flex-shrink-0">
                      {show.date}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-text-secondary text-sm">
                      {show.venue}
                    </p>
                    <span className="text-xs tracking-widest uppercase text-accent">
                      Купити →
                    </span>
                  </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden md:flex md:items-center px-1">
                  <div className="w-[30%]">
                    <span className="font-heading text-3xl uppercase group-hover:text-accent transition-colors duration-500">
                      {show.city}
                    </span>
                  </div>
                  <div className="w-[20%]">
                    <span className="text-text-secondary text-sm">
                      {show.date}
                    </span>
                  </div>
                  <div className="w-[35%]">
                    <span className="text-text-secondary text-sm">
                      {show.venue}
                    </span>
                  </div>
                  <div className="w-[15%] text-right">
                    <span className="text-xs tracking-widest uppercase text-accent">
                      Купити →
                    </span>
                  </div>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
