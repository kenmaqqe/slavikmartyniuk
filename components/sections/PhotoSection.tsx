"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PhotoSection() {
  return (
    <section className="w-full">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative w-full aspect-[21/9] md:aspect-[3/1]"
      >
        <Image
          src="/med.jpg"
          alt="Славік Мартинюк на сцені"
          fill
          className="object-cover"
          quality={90}
        />
      </motion.div>
    </section>
  );
}
