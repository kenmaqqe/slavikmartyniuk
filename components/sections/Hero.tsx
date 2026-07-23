"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { scrollTo } from "@/lib/scrollTo";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Mobile */}
      <div className="md:hidden relative min-h-screen flex flex-col">
        {/* Photo — top */}
        <div className="relative w-full h-[50vh] mt-14 z-0">
          <Image
            src="/hero.png"
            alt="Славік Мартинюк"
            fill
            className="object-contain object-bottom"
            priority
            quality={90}
            sizes="100vw"
          />
          {/* Floor shadow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-8 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,transparent_70%)]" />
          <div className="absolute bottom-4 left-[10%] right-[10%] h-px bg-white/[0.06]" />
        </div>

        {/* Text — below photo */}
        <div className="relative z-10 px-5 pt-8 pb-12">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-heading leading-[0.9] uppercase"
            style={{ fontSize: "clamp(2.8rem, 10vw, 3.5rem)" }}
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
            Ставить діагноз вашому дню — гумор без побічних ефектів
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-6 flex flex-col gap-3 w-full max-w-[280px]"
          >
            <button
              onClick={() => scrollTo("tour")}
              className="w-full bg-accent text-black text-sm font-semibold py-3.5 rounded-full hover:brightness-110 active:scale-[0.98] transition-all duration-300 min-h-[44px]"
            >
              Купити квитки
            </button>
            <a
              href="https://www.youtube.com/@slavikmartyniuk"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center text-sm text-text-secondary hover:text-white transition-colors duration-300 py-3 min-h-[44px] flex items-center justify-center"
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
            className="font-heading leading-[0.88] uppercase"
            style={{ fontSize: "clamp(4rem, 7vw, 7.5rem)" }}
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
            Ставить діагноз вашому дню — гумор без побічних ефектів
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 flex items-center gap-5"
          >
            <button
              onClick={() => scrollTo("tour")}
              className="bg-accent text-black text-sm font-semibold px-7 py-3.5 rounded-full hover:brightness-110 transition-all duration-300 min-h-[44px]"
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

        {/* Photo — 60%, with floor shadow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-[60%] relative h-[85vh]"
        >
          {/* Floor shadow */}
          <div className="absolute bottom-8 left-[5%] right-[5%] h-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)]" />
          <div className="absolute bottom-12 left-0 right-0 h-px bg-white/[0.05]" />
          <Image
            src="/hero.png"
            alt="Славік Мартинюк"
            fill
            className="object-contain object-bottom"
            priority
            quality={95}
            sizes="(min-width: 768px) 60vw, 100vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
