"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PhotoBanner() {
  return (
    <section className="w-full">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[50vh] md:h-[70vh]"
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
