"use client";

import { motion } from "framer-motion";
import { shows } from "@/data/shows";
import TicketCard from "./TicketCard";

export default function Tour() {
  return (
    <section id="tour" className="py-24 md:py-40 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight mb-16 md:mb-24">
            Тур
          </h2>
        </motion.div>

        <div className="border-t border-white/10">
          {shows.map((show, index) => (
            <motion.div
              key={show.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <TicketCard show={show} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
