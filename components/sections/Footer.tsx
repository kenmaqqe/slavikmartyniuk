"use client";

import { Instagram, Send, Youtube } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/cpt.guy/", label: "Instagram" },
  { icon: Send, href: "https://t.me/slavikmartyniuk", label: "Telegram" },
  { icon: Youtube, href: "https://www.youtube.com/@slavikmartyniuk", label: "YouTube" },
] as const;

export default function Footer() {
  return (
    <footer id="footer" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
        <div>
          <p className="font-heading text-2xl md:text-3xl uppercase tracking-wide mb-5">
            Славік Мартинюк
          </p>
          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-text-secondary hover:text-white transition-colors duration-300"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <p className="text-text-secondary/30 text-xs">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
