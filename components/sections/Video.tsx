"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Video() {
  const [main, ...rest] = projects;

  return (
    <section id="video" className="py-24 md:py-36 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="font-heading text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight mb-16 md:mb-20"
        >
          Відео
        </motion.h2>

        {/* Main video */}
        {main && (
          <motion.a
            href={main.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="group block relative aspect-[16/9] w-full mb-3 overflow-hidden"
          >
            {main.thumbnail && (
              <Image
                src={main.thumbnail}
                alt={main.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            )}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 p-6 md:p-10">
              <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide text-white">
                {main.title}
              </h3>
            </div>
          </motion.a>
        )}

        {/* Smaller videos row */}
        {rest.length > 0 && (
          <div className="flex items-center gap-3">
            {rest.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative aspect-video w-1/3 overflow-hidden"
              >
                {project.thumbnail && (
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="30vw"
                  />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
              </motion.a>
            ))}
          </div>
        )}

        {/* Link to more */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-6"
        >
          <a
            href="https://www.youtube.com/@slavikmartyniuk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-secondary hover:text-white transition-colors duration-300"
          >
            Інші відео →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
