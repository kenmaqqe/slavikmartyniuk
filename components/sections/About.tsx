"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-36 px-5 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[3/4] w-full"
        >
          <Image
            src="/never.jpg"
            alt="Славік Мартинюк"
            fill
            className="object-cover"
            quality={90}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-prose"
        >
          <h2
            className="font-heading uppercase tracking-tight mb-8 md:mb-12"
            style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)" }}
          >
            Про Славіка
          </h2>

          <div className="space-y-5 text-text-secondary text-base md:text-lg leading-relaxed">
            <p>
              Український стендап-комік. Автор шоу{' '}
              <span className="text-white">«Медичні Історії»</span>,{' '}
              <span className="text-white">«Я Ніколи Не…»</span> та{' '}
              <span className="text-white">«Комедійна Кафедра»</span>.
            </p>
            <p>
              Тут ви знайдете багато стендапу, виступів та шоу, які збирають
              зали по всій Україні.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 space-y-4">
            <a
              href="https://t.me/kiriill_rad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-secondary text-sm hover:text-white transition-colors min-h-[44px]"
            >
              Співпраця:{" "}
              <span className="text-white">@Kirill_Rad</span>{" "}
              <span className="text-text-secondary/50">(Telegram)</span>
            </a>
            <a
              href="https://base.monobank.ua/266fbkhtqpLWST"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-secondary text-sm hover:text-accent transition-colors min-h-[44px]"
            >
              Підтримати канал:{" "}
              <span className="text-accent">Monobank →</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
