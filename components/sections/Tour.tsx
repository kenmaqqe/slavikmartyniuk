"use client";

import { motion } from "framer-motion";
import { shows } from "@/data/shows";

function TicketButton({ href, label }: { href: string; label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="group/btn relative inline-flex items-center gap-2.5 min-h-[44px] px-5 py-2.5 overflow-hidden rounded-full border border-accent/40 text-xs tracking-widest uppercase text-accent transition-colors duration-500"
    >
      {/* Sliding background */}
      <span className="absolute inset-0 bg-accent/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]" />

      {/* Glow pulse on hover */}
      <span className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_20px_rgba(24,199,193,0.15)]" />

      <span className="relative z-10 group-hover/btn:text-white transition-colors duration-500">
        {label}
      </span>
      <motion.span
        className="relative z-10 inline-block group-hover/btn:text-white transition-colors duration-500"
        whileHover={{ x: 4 }}
      >
        →
      </motion.span>
    </motion.a>
  );
}

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
              <div
                className={`py-5 md:py-6 border-b border-white/10 ${
                  show.status === "available" ? "" : "opacity-30"
                }`}
              >
                {/* Mobile layout */}
                <div className="md:hidden">
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <span className="font-heading text-2xl uppercase">
                      {show.city}
                    </span>
                    <span className="text-text-secondary text-sm flex-shrink-0">
                      {show.date}
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm mb-3">
                    {show.venue}
                  </p>
                  {show.status === "available" && show.ticketUrl && show.ticketUrl !== "#" ? (
                    <TicketButton href={show.ticketUrl} label="Купити" />
                  ) : show.status === "soldOut" ? (
                    <span className="inline-flex items-center min-h-[44px] text-xs tracking-widest uppercase text-text-secondary/30">
                      Sold Out
                    </span>
                  ) : null}
                </div>

                {/* Desktop layout */}
                <div className="hidden md:flex md:items-center">
                  <div className="w-[30%]">
                    <span className="font-heading text-3xl uppercase">
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
                    {show.status === "available" && show.ticketUrl && show.ticketUrl !== "#" ? (
                      <TicketButton href={show.ticketUrl} label="Купити" />
                    ) : (
                      <span className="text-xs tracking-widest uppercase text-text-secondary/30">
                        Sold Out
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
