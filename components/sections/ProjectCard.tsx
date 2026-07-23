"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  large?: boolean;
}

export default function ProjectCard({ project, large }: ProjectCardProps) {
  return (
    <a
      href={project.youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block relative overflow-hidden ${
        large ? "aspect-[16/9]" : "aspect-video"
      }`}
    >
      {project.thumbnail && (
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
        <span className="text-white text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          Дивитися →
        </span>
      </div>

      {/* Title */}
      <div className="absolute bottom-0 left-0 p-5 md:p-8">
        <h3 className={`font-heading uppercase tracking-wide text-white ${
          large ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
        }`}>
          {project.title}
        </h3>
      </div>
    </a>
  );
}
