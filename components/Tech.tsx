'use client'
import React from 'react'
import { BiLogoJavascript, BiLogoMongodb, BiLogoPostgresql, BiLogoPython, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi'
import { motion } from 'framer-motion';

const Tech = () => {

  const varients = {
    hidden:{oppacity:0, y:50},
    visible:{opacity:1, y:0}
  }
  return (
    <div id='tech' className='flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32'>
      <h1 className='text-4xl font-light text-white md:text-6xl'>
        Technologis
      </h1>
      <motion.div 
        variants={varients}
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.8, delay:0.2}}
        className='flex flex-wrap items-center justify-center gap-10 p-5'>
        <div >
          <BiLogoTypescript className='cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </div>
        <div >
          <BiLogoJavascript className='cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </div>
        <div >
          <BiLogoTailwindCss className='cursor-pointer text-[80px] text-blue-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </div>
        
        <div >
          <BiLogoPostgresql className='cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </div>
        <div >
          <BiLogoMongodb className='cursor-pointer text-[80px] text-green-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </div>
        <div >
          <BiLogoPython className='cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </div>
      </motion.div>
    </div>
  )
}

export default Tech
