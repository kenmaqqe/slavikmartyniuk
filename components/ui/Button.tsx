"use client";

import { motion } from "framer-motion";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 text-sm tracking-widest uppercase text-white/70 hover:text-white transition-colors duration-300";

  const combined = `${base} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ x: 2 }}
        className={combined}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ x: 2 }}
      className={combined}
    >
      {children}
    </motion.button>
  );
}
