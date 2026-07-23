"use client";

import { motion } from "framer-motion";

export default function Quote() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-12 lg:px-24">
      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <p className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase leading-[1.1] tracking-tight">
          &laquo;Один із найкращих стендап-коміків України&raquo;
        </p>
      </motion.blockquote>
    </section>
  );
}
