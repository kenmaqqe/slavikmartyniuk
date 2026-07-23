"use client";

import { Instagram, Send, Youtube } from "lucide-react";

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/cpt.guy/",
    label: "Instagram",
  },
  {
    icon: Send,
    href: "https://t.me/slavikmartyniuk",
    label: "Telegram",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@slavikmartyniuk",
    label: "YouTube",
  },
] as const;

export default function Footer() {
  return (
    <footer className="py-16 md:py-24 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
        <div className="flex items-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-white/30 hover:text-white transition-colors duration-300"
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>

        <div className="text-left md:text-right">
          <p className="text-white/30 text-xs tracking-widest uppercase">
            booking@slavikmartyniuk.com
          </p>
          <p className="text-white/30 text-xs tracking-widest uppercase mt-1">
            telegram: @kiriill_rad
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-white/5">
        <p className="text-white/15 text-xs">
          © {new Date().getFullYear()} Славік Мартинюк
        </p>
      </div>
    </footer>
  );
}
