'use client'

import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';
import { BiLogoJavascript, BiLogoMongodb, BiLogoPostgresql, BiLogoPython, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi';

// Define the props type for ScrollReveal, allowing children
interface ScrollRevealProps {
  children: ReactNode;
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

const Tech = () => {
  return (
    <div id='tech' className='flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32'>
      <ScrollReveal>
        <h1 className='text-4xl font-light text-white md:text-6xl'>
          Technologies
        </h1>
      </ScrollReveal>

      <ScrollReveal>
        <div className='flex flex-wrap items-center justify-center gap-10 p-5'>
          <div>
            <BiLogoTypescript className='cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]'/>
          </div>
          <div>
            <BiLogoJavascript className='cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]'/>
          </div>
          <div>
            <BiLogoTailwindCss className='cursor-pointer text-[80px] text-blue-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]'/>
          </div>
          <div>
            <BiLogoPostgresql className='cursor-pointer text-[80px] text-blue-700 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]'/>
          </div>
          <div>
            <BiLogoMongodb className='cursor-pointer text-[80px] text-green-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]'/>
          </div>
          <div>
            <BiLogoPython className='cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]'/>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

export default Tech;
