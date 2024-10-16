'use client'
import Meta from "@/public/Meta.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  image: StaticImageData;
  title: string;
  description: string;
  technologies: string[];
}

const projectData: Project[] = [
  {
    image: Meta,
    title: 'Metaversus',
    description: "This is a stunning web UI built with Next.js, styled using Tailwind CSS, and enhanced with dynamic animations powered by Framer Motion. Experience seamless performance and sleek design in one package.",
    technologies: ["Next.JS", "TypeScript", "Tailwind CSS", "Framer Motion"]
  }
];

interface ProjectCardProps {
  project: Project;
}



interface ScrollRevealProps {
  children: React.ReactNode;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};


const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
      <Link href="https://metaversus-eta-hazel.vercel.app/?vercelToolbarCode=a8gkIklzMcX0xph" target='_blank'>
      <Image
        src={project.image}
        alt="image"
        width={500}
        height={500}
        className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w[300px]"
      />
      </Link>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="text-2xl font-semibold">{project.title}</div>
          <p className="text-gray-400">{project.description}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-5">
        {project.technologies.map((tech: string, index: number) => (
          <span key={index} className="rounded-lg bg-black p-3">
            {tech}
          </span>
        ))}
      </div>
    </div>
    </ScrollReveal>
    
  );
};

const Project: React.FC = () => {
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
      <ScrollReveal>
      <h1 className="text-4xl font-light text-white md:text-6xl">
        My Projects
      </h1>
      </ScrollReveal>
      
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
