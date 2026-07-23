"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollTo } from "@/lib/scrollTo";

const navLinks = [
  { label: "Тур", target: "tour" },
  { label: "Відео", target: "video" },
  { label: "Про мене", target: "bio" },
  { label: "Контакти", target: "footer" },
] as const;

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (target: string) => {
    setMenuOpen(false);
    scrollTo(target);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-16 md:h-20">
          {/* Name */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-heading text-xl md:text-2xl uppercase tracking-wide hover:text-accent transition-colors"
          >
            Славік
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleNav(link.target)}
                className="text-sm text-text-secondary hover:text-white transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop social */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="https://www.instagram.com/cpt.guy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@slavikmartyniuk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary hover:text-white transition-colors"
            >
              YouTube
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 w-6"
            aria-label="Menu"
          >
            <span
              className={`block h-px bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block h-px bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleNav(link.target)}
                className="font-heading text-4xl uppercase tracking-wide text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="flex gap-6 mt-8">
              <a
                href="https://www.instagram.com/cpt.guy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@slavikmartyniuk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary hover:text-white transition-colors"
              >
                YouTube
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
