"use client";

import { motion } from "framer-motion";
import { shows } from "@/data/shows";
import TicketCard from "./TicketCard";

export default function ShowsList() {
  return (
    <section id="shows" className="py-24 md:py-40 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight mb-16 md:mb-24">
            Афіша
          </h2>
        </motion.div>

        <div>
          {shows.map((show, index) => (
            <motion.div
              key={show.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
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
