"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Bio() {
  return (
    <section id="bio" className="py-24 md:py-40 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[3/4] w-full max-w-md mx-auto"
        >
          <Image
            src="/never.jpg"
            alt="Славік Мартинюк"
            fill
            className="object-cover"
            quality={90}
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight mb-8">
            Про мене
          </h2>

          <div className="space-y-5 text-text-secondary text-base md:text-lg leading-relaxed">
            <p>
              Стендап-комік, автор шоу «Медичні історії» — поєднання гумору та
              медицини, яке збирає зали по всій Україні.
            </p>
            <p>
              Кожен виступ — це історія, яка лікує краще за будь-які ліки.
              Чесний, тонкий, іноді гострий гумор, який запам&apos;ятовується.
            </p>
            <p>
              Більше 250 виступів у 12 містах України. YouTube-канал з понад
              мільйоном переглядів.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
