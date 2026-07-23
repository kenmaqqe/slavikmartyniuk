"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { scrollTo } from "@/lib/scrollTo";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Full-bleed portrait */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Славік Мартинюк"
          fill
          className="object-cover object-[center_30%]"
          priority
          quality={95}
          sizes="100vw"
        />
        {/* Minimal gradient — only bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      {/* Content — bottom left */}
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 lg:p-24 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl uppercase leading-[0.9] tracking-tight">
            Славік
            <br />
            Мартинюк
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 md:mt-8 flex items-center gap-6"
        >
          <button
            onClick={() => scrollTo("shows")}
            className="text-sm tracking-widest uppercase text-white/70 hover:text-white transition-colors duration-300"
          >
            Афіша
          </button>
          <span className="w-8 h-px bg-white/20" />
          <button
            onClick={() => scrollTo("projects")}
            className="text-sm tracking-widest uppercase text-white/70 hover:text-white transition-colors duration-300"
          >
            YouTube
          </button>
        </motion.div>
      </div>
    </section>
  );
}
