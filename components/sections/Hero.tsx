"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { scrollTo } from "@/lib/scrollTo";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-0 items-center pt-24 md:pt-0 pb-16 md:pb-0">
        {/* Text — 40% */}
        <div className="md:col-span-2 md:pr-8 lg:pr-16 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-heading text-[4.5rem] sm:text-[5.5rem] md:text-[5rem] lg:text-[6.5rem] xl:text-[7.5rem] leading-[0.88] uppercase"
          >
            Славік
            <br />
            Мартинюк
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-text-secondary text-base md:text-lg mt-6 md:mt-8"
          >
            Новий стендап-тур
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 md:mt-12 flex flex-wrap items-center gap-5"
          >
            <button
              onClick={() => scrollTo("tour")}
              className="bg-accent text-black text-sm font-semibold px-7 py-3.5 rounded-full hover:brightness-110 transition-all duration-300"
            >
              Купити квитки
            </button>
            <a
              href="https://www.youtube.com/@slavikmartyniuk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary hover:text-white transition-colors duration-300"
            >
              Дивитись виступ →
            </a>
          </motion.div>
        </div>

        {/* Photo — 60% */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-3 relative w-full h-[60vh] md:h-[85vh]"
        >
          <Image
            src="/hero.png"
            alt="Славік Мартинюк"
            fill
            className="object-contain object-bottom"
            priority
            quality={95}
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
