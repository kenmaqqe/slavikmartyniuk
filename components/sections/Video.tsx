"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Video() {
  const [main, ...rest] = projects;

  return (
    <section id="video" className="py-24 md:py-40 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight mb-16 md:mb-24">
            Відео
          </h2>
        </motion.div>

        {/* Main video — large */}
        {main && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="mb-2"
          >
            <ProjectCard project={main} large />
          </motion.div>
        )}

        {/* Smaller videos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {rest.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
