"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Video() {
  const [main, ...rest] = projects;

  return (
    <section id="video" className="py-20 md:py-36 px-5 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="font-heading uppercase tracking-tight mb-12 md:mb-20"
          style={{ fontSize: "clamp(2.8rem, 8vw, 5rem)" }}
        >
          Останній виступ
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
            className="group block relative aspect-video w-full mb-3 overflow-hidden"
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
            {/* Play icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-0 h-0 border-l-[18px] border-l-white border-t-[11px] border-t-transparent border-b-[11px] border-b-transparent ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 p-4 md:p-10">
              <h3 className="font-heading text-2xl md:text-4xl lg:text-5xl uppercase tracking-wide text-white line-clamp-2">
                {main.title}
              </h3>
            </div>
          </motion.a>
        )}

        {/* Smaller videos */}
        {rest.length > 0 && (
          <div className="flex flex-col md:flex-row gap-3">
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
                className="group relative aspect-video w-full md:w-1/3 overflow-hidden"
              >
                {project.thumbnail && (
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 p-3 md:p-5">
                  <h4 className="font-heading text-lg md:text-xl uppercase tracking-wide text-white line-clamp-2">
                    {project.title}
                  </h4>
                </div>
              </motion.a>
            ))}
          </div>
        )}

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
            Усі відео →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
