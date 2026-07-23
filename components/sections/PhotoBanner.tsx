"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PhotoBanner() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="relative w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[16/9] lg:aspect-[2.35/1]"
      >
        <Image
          src="/med.jpg"
          alt="Славік Мартинюк на сцені"
          fill
          className="object-cover"
          quality={90}
          sizes="100vw"
        />
      </motion.div>
    </section>
  );
}
