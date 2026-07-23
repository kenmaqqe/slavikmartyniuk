"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollTo } from "@/lib/scrollTo";

const navLinks = [
  { label: "Тур", target: "tour" },
  { label: "Відео", target: "video" },
  { label: "Про мене", target: "about" },
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

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNav = (target: string) => {
    setMenuOpen(false);
    setTimeout(() => scrollTo(target), 100);
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
        <div className="max-w-7xl mx-auto px-5 md:px-12 lg:px-24 flex items-center justify-between h-14 md:h-20">
          {/* Name */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-heading text-lg md:text-2xl uppercase tracking-wide hover:text-accent transition-colors"
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

          {/* Mobile burger — min 44px tap target */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-11 h-11 flex items-center justify-center"
            aria-label="Menu"
          >
            <div className="flex flex-col gap-[5px] w-5">
              <span
                className={`block h-[1.5px] bg-white transition-all duration-300 origin-center ${
                  menuOpen ? "rotate-45 translate-y-[3.25px]" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] bg-white transition-all duration-300 origin-center ${
                  menuOpen ? "-rotate-45 -translate-y-[3.25px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu — fullscreen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.target}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  onClick={() => handleNav(link.target)}
                  className="font-heading text-3xl uppercase tracking-wide text-white/70 hover:text-white transition-colors min-h-[44px] flex items-center"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            {/* Social — bottom of overlay */}
            <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-8">
              <a
                href="https://www.instagram.com/cpt.guy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary hover:text-white transition-colors min-h-[44px] flex items-center"
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@slavikmartyniuk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary hover:text-white transition-colors min-h-[44px] flex items-center"
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
