"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { scrollTo } from "@/lib/scrollTo";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center pt-20 md:pt-0">
        {/* Text */}
        <div className="order-2 md:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-heading text-7xl sm:text-8xl md:text-[8rem] lg:text-[10rem] leading-[0.85] uppercase"
          >
            Славік
            <br />
            Мартинюк
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-text-secondary text-base md:text-lg mt-6 md:mt-8 max-w-sm"
          >
            Стендап-комік. Автор «Медичних історій».
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8 md:mt-12 flex items-center gap-4"
          >
            <button
              onClick={() => scrollTo("tour")}
              className="bg-accent text-black text-sm font-semibold px-6 py-3 rounded-full hover:brightness-110 transition-all duration-300"
            >
              Купити квитки
            </button>
            <a
              href="https://www.youtube.com/@slavikmartyniuk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary hover:text-white transition-colors duration-300"
            >
              YouTube →
            </a>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 relative aspect-[3/4] md:aspect-[2/3] w-full max-w-lg mx-auto md:max-w-none"
        >
          <Image
            src="/hero.jpg"
            alt="Славік Мартинюк"
            fill
            className="object-cover object-top"
            priority
            quality={95}
          />
        </motion.div>
      </div>
    </section>
  );
}
