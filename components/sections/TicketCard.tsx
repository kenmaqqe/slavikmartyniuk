"use client";

import type { Show } from "@/data/shows";

interface TicketCardProps {
  show: Show;
}

export default function TicketCard({ show }: TicketCardProps) {
  const handleClick = () => {
    if (show.status === "soldOut" || !show.ticketUrl || show.ticketUrl === "#") {
      return;
    }
    window.open(show.ticketUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onClick={handleClick}
      className={`group flex flex-col md:flex-row md:items-center gap-2 md:gap-0 py-5 md:py-6 border-b border-white/10 transition-colors duration-300 ${
        show.status === "available" ? "cursor-pointer hover:bg-white/[0.02]" : "opacity-40 cursor-default"
      }`}
    >
      {/* City */}
      <div className="md:w-1/4">
        <span className="font-heading text-2xl md:text-3xl uppercase">
          {show.city}
        </span>
      </div>

      {/* Date + Venue */}
      <div className="md:w-1/3">
        <p className="text-text-secondary text-sm">
          {show.date}
        </p>
        <p className="text-text-secondary text-sm">
          {show.venue}
        </p>
      </div>

      {/* Show title */}
      <div className="md:w-1/4">
        <p className="text-text-secondary text-sm">
          {show.showTitle}
        </p>
      </div>

      {/* CTA */}
      <div className="md:w-auto md:ml-auto">
        {show.status === "available" ? (
          <span className="text-xs tracking-widest uppercase text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Купити →
          </span>
        ) : (
          <span className="text-xs tracking-widest uppercase text-text-secondary/40">
            Sold Out
          </span>
        )}
      </div>
    </div>
  );
}
