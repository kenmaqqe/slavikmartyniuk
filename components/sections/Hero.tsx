"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { scrollTo } from "@/lib/scrollTo";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Mobile */}
      <div className="md:hidden relative min-h-screen flex flex-col">
        {/* Photo — absolute, bottom */}
        <div className="absolute inset-x-0 bottom-0 h-[55vh] z-0">
          <Image
            src="/hero.png"
            alt="Славік Мартинюк"
            fill
            className="object-contain object-bottom"
            priority
            quality={95}
            sizes="100vw"
          />
        </div>

        {/* Text — top */}
        <div className="relative z-10 flex-1 flex flex-col justify-start px-5 pt-24 pb-8">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-heading text-[3.2rem] leading-[0.9] uppercase"
          >
            Славік
            <br />
            Мартинюк
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-text-secondary text-sm mt-4"
          >
            Новий стендап-тур
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-6 flex items-center gap-4"
          >
            <button
              onClick={() => scrollTo("tour")}
              className="bg-accent text-black text-xs font-semibold px-6 py-3 rounded-full hover:brightness-110 transition-all duration-300"
            >
              Купити квитки
            </button>
            <a
              href="https://www.youtube.com/@slavikmartyniuk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-secondary hover:text-white transition-colors duration-300"
            >
              Дивитись виступ →
            </a>
          </motion.div>
        </div>
      </div>

      {/* Desktop / Tablet */}
      <div className="hidden md:flex w-full max-w-[1400px] mx-auto px-12 lg:px-24 items-center h-screen">
        {/* Text — 40% */}
        <div className="w-[40%] pr-8 lg:pr-16 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-heading text-[5rem] lg:text-[6.5rem] xl:text-[7.5rem] leading-[0.88] uppercase"
          >
            Славік
            <br />
            Мартинюк
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-text-secondary text-lg mt-8"
          >
            Новий стендап-тур
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 flex items-center gap-5"
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
          className="w-[60%] relative h-[85vh]"
        >
          <Image
            src="/hero.png"
            alt="Славік Мартинюк"
            fill
            className="object-contain object-bottom"
            priority
            quality={95}
            sizes="60vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
