"use client";

import { Instagram, Send, Youtube } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/cpt.guy/", label: "Instagram" },
  { icon: Send, href: "https://t.me/slavikmartyniuk", label: "Telegram" },
  { icon: Youtube, href: "https://www.youtube.com/@slavikmartyniuk", label: "YouTube" },
] as const;

export default function Footer() {
  return (
    <footer id="footer" className="py-16 md:py-24 px-5 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto text-center md:text-left md:flex md:flex-row md:items-end md:justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-5">
          <p className="font-heading text-2xl md:text-3xl uppercase tracking-wide">
            Славік Мартинюк
          </p>
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-text-secondary hover:text-white transition-colors duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <p className="text-text-secondary/30 text-xs mt-8 md:mt-0">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
