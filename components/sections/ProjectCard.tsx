"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.a
      href={project.youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block relative overflow-hidden aspect-[16/9]"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.3 }}
    >
      {project.thumbnail && (
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}

      {/* Minimal overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />

      {/* Title — bottom left, appears on hover */}
      <div className="absolute bottom-0 left-0 p-6 md:p-8 z-10">
        <h3 className="font-heading text-2xl md:text-3xl uppercase tracking-wide text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
          {project.title}
        </h3>
      </div>
    </motion.a>
  );
}
