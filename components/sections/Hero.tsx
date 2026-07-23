"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { scrollTo } from "@/lib/scrollTo";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* ==================== MOBILE ==================== */}
      <div className="md:hidden relative min-h-screen flex flex-col">
        {/* Spotlight glow behind photo */}
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-[radial-gradient(ellipse_at_center,rgba(24,199,193,0.06)_0%,transparent_65%)] z-0" />

        {/* Photo — top, dominant */}
        <div className="relative w-full h-[55vh] mt-12 z-0">
          <Image
            src="/hero.webp"
            alt="Славік Мартинюк"
            fill
            className="object-contain object-bottom"
            priority
            quality={90}
            sizes="100vw"
          />
          {/* Floor line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          {/* Floor shadow */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[60%] h-12 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)]" />
        </div>

        {/* Text — minimal, below photo */}
        <div className="relative z-10 px-5 pt-6 pb-10">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-heading leading-[0.88] uppercase"
            style={{ fontSize: "clamp(2.5rem, 12vw, 3.5rem)" }}
          >
            Славік
            <br />
            Мартинюк
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-text-secondary text-xs mt-3 tracking-wide"
          >
            стендап-комік
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-6"
          >
            <button
              onClick={() => scrollTo("tour")}
              className="bg-accent text-black text-sm font-semibold px-8 py-3.5 rounded-full hover:brightness-110 active:scale-[0.97] transition-all duration-300 min-h-[44px]"
            >
              Купити квиток
            </button>
          </motion.div>
        </div>
      </div>

      {/* ==================== DESKTOP / TABLET ==================== */}
      <div className="hidden md:block relative h-screen">
        {/* Spotlight glow */}
        <div className="absolute top-[10%] right-[15%] w-[50vw] h-[70vh] bg-[radial-gradient(ellipse_at_center,rgba(24,199,193,0.04)_0%,transparent_60%)] z-0" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-12 lg:px-24 flex items-center h-screen">
          {/* Text — 40% */}
          <div className="w-[40%] pr-8 lg:pr-16">
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
              className="text-text-secondary text-sm tracking-wide mt-6"
            >
              стендап-комік
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 flex items-center gap-5"
            >
              <button
                onClick={() => scrollTo("tour")}
                className="bg-accent text-black text-sm font-semibold px-7 py-3.5 rounded-full hover:brightness-110 transition-all duration-300 min-h-[44px]"
              >
                Купити квиток
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
            {/* Floor line */}
            <div className="absolute bottom-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
            {/* Floor shadow */}
            <div className="absolute bottom-4 left-[5%] right-[5%] h-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
            <Image
              src="/hero.webp"
              alt="Славік Мартинюк"
              fill
              className="object-contain object-bottom"
              priority
              quality={95}
              sizes="(min-width: 768px) 60vw, 100vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
