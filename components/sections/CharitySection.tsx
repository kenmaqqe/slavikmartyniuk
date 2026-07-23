"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Button from "@/components/ui/Button";

function AnimatedCounter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-heading text-5xl md:text-6xl lg:text-7xl uppercase">
      {count.toLocaleString("uk-UA")}+
    </span>
  );
}

export default function CharitySection() {
  return (
    <section id="charity" className="py-24 md:py-40 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight mb-8">
            ЗСУ
          </h2>

          <p className="text-white/50 text-base md:text-lg max-w-lg leading-relaxed mb-12">
            Частину прибутку від кожного шоу Славік перераховує на підтримку
            Збройних Сил України.
          </p>

          <div className="mb-12">
            <AnimatedCounter target={800000} />
            <p className="text-white/30 text-sm mt-2">грн зібрано</p>
          </div>

          <Button href="https://base.monobank.ua/266fbkhtqpLWST">
            Підтримати →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
