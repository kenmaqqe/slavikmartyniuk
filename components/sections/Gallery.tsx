"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const photos = [
  { src: "/hero.jpg", alt: "Славік Мартинюк", aspect: "aspect-[3/4]" },
  { src: "/med.jpg", alt: "Медичні Історії", aspect: "aspect-[4/3]" },
  { src: "/never.jpg", alt: "Я ніколи не...", aspect: "aspect-[3/4]" },
  { src: "/hero.jpg", alt: "На сцені", aspect: "aspect-square" },
];

export default function Gallery() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-12 lg:px-24">
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="font-heading text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight mb-16 md:mb-20"
      >
        Галерея
      </motion.h2>

      {/* Masonry-like layout */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="break-inside-avoid"
          >
            <div className={`relative w-full ${photo.aspect} overflow-hidden`}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover hover:scale-[1.02] transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
