"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title = "Демо-посилання",
  children,
}: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm"
          >
            <button
              onClick={onClose}
              aria-label="Закрити"
              className="absolute -top-8 right-0 text-white/40 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
            <h3 className="font-heading text-2xl uppercase tracking-wide mb-3">
              {title}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              {children}
            </p>
            <button
              onClick={onClose}
              className="text-xs tracking-widest uppercase text-white/40 hover:text-white transition-colors"
            >
              Закрити
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
