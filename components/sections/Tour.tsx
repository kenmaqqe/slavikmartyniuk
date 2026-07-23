"use client";

import { motion } from "framer-motion";
import { shows } from "@/data/shows";

export default function Tour() {
  return (
    <section id="tour" className="py-24 md:py-36 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="font-heading text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight mb-16 md:mb-20"
        >
          Тур
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
              <a
                href={show.ticketUrl !== "#" ? show.ticketUrl : undefined}
                target={show.ticketUrl !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`group flex flex-col md:flex-row md:items-center py-5 md:py-6 border-b border-white/10 transition-colors duration-300 ${
                  show.status === "available"
                    ? "cursor-pointer hover:bg-white/[0.02]"
                    : "opacity-30 cursor-default"
                }`}
              >
                {/* City */}
                <div className="md:w-[30%] mb-1 md:mb-0">
                  <span className="font-heading text-2xl md:text-3xl uppercase">
                    {show.city}
                  </span>
                </div>

                {/* Date */}
                <div className="md:w-[20%] mb-1 md:mb-0">
                  <span className="text-text-secondary text-sm">
                    {show.date}
                  </span>
                </div>

                {/* Venue */}
                <div className="md:w-[35%] mb-2 md:mb-0">
                  <span className="text-text-secondary text-sm">
                    {show.venue}
                  </span>
                </div>

                {/* CTA */}
                <div className="md:w-[15%] md:text-right">
                  {show.status === "available" ? (
                    <span className="text-xs tracking-widest uppercase text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Купити →
                    </span>
                  ) : (
                    <span className="text-xs tracking-widest uppercase text-text-secondary/30">
                      Sold Out
                    </span>
                  )}
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
