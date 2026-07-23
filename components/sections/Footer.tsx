"use client";

import { Instagram, Send, Youtube } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/cpt.guy/", label: "Instagram" },
  { icon: Send, href: "https://t.me/slavikmartyniuk", label: "Telegram" },
  { icon: Youtube, href: "https://www.youtube.com/@slavikmartyniuk", label: "YouTube" },
] as const;

export default function Footer() {
  return (
    <footer id="footer" className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <div>
            <p className="font-heading text-3xl md:text-4xl uppercase tracking-wide mb-6">
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
                  className="text-text-secondary hover:text-white transition-colors duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <p className="text-text-secondary/40 text-xs">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
