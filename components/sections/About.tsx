"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-40 px-5 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
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

        {/* Text — bold, minimal */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-prose"
        >
          <p
            className="font-heading uppercase leading-[1.05] tracking-tight mb-10 md:mb-14"
            style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}
          >
            Я той самий хлопець,
            <br />
            який змушує людей
            <br />
            сміятися
            <br />
            <span className="text-text-secondary">з власних проблем.</span>
          </p>

          <div className="text-text-secondary text-base leading-relaxed mb-10">
            <p>
              Український стендап-комік. Автор шоу{' '}
              <span className="text-white">«Медичні Історії»</span>,{' '}
              <span className="text-white">«Я Ніколи Не…»</span> та{' '}
              <span className="text-white">«Комедійна Кафедра»</span>.
            </p>
          </div>

          <div className="pt-8 border-t border-white/10 space-y-4">
            <a
              href="https://t.me/kiriill_rad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-secondary text-sm hover:text-white transition-colors min-h-[44px]"
            >
              Співпраця:{" "}
              <span className="text-white">@Kirill_Rad</span>
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
