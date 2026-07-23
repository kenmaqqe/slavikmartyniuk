"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import type { Show } from "@/data/shows";
import Modal from "@/components/ui/Modal";

interface TicketCardProps {
  show: Show;
}

export default function TicketCard({ show }: TicketCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    if (show.status === "soldOut" || !show.ticketUrl || show.ticketUrl === "#") {
      setModalOpen(true);
    } else {
      window.open(show.ticketUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="group flex items-center gap-6 md:gap-10 py-6 md:py-8 border-b border-white/10 cursor-pointer hover:border-white/30 transition-colors duration-300"
      >
        {/* Date */}
        <div className="w-24 md:w-32 flex-shrink-0">
          <span className="font-heading text-2xl md:text-3xl uppercase">
            {show.date}
          </span>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <p className="text-white text-base md:text-lg font-medium">
            {show.city} · {show.venue}
          </p>
          <p className="text-white/40 text-sm mt-0.5">
            {show.showTitle}
          </p>
        </div>

        {/* CTA */}
        <div className="flex-shrink-0">
          {show.status === "available" ? (
            <span className="text-xs tracking-widest uppercase text-white/50 group-hover:text-white transition-colors duration-300">
              Квитки →
            </span>
          ) : (
            <span className="text-xs tracking-widest uppercase text-white/20">
              Sold Out
            </span>
          )}
        </div>
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Квитки"
      >
        Це демо-посилання. Реальне посилання на квитки буде тут.
      </Modal>
    </>
  );
}
