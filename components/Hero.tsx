'use client'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';


import { Typewriter,  } from 'react-simple-typewriter';
const Hero = () => {

  const [scrollDirection, setScrollDirection] = useState('down');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      setScrollDirection(scrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = scrollY;
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, []);


  return (
    <div id='home' className='px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32'>
      <div className='flex flex-col items-center justify-center gap-10 text-white'>
        <motion.div
          // initial={{ y: -50, opacity: 0 }}
          animate={{
            y: scrollDirection === 'down' ? 50 : -50,  // Change y based on scroll direction
            opacity: 1
                    }}
          transition={{ duration: 0.8, delay: 0.2 }}
        
        >
          <div className="relative w-[300px] md:w-[350px] mt-10">
  <Image
    src="/myimage.jpg"
    alt="Osama"
    height={500}
    width={500}
    className="rounded-full shadow-2xl shadow-indigo-600 transition-all duration-300"
  />
  <div className="absolute inset-0 bg-red-300 rounded-full mix-blend-multiply opacity-70 pointer-events-none"></div>
</div>

        </motion.div>

        <div 
        className='flex max-w-[600px] flex-col items-center justify-center gap-3 text-center relative' >
          <motion.h3 
          initial={{x:50, opacity: 0 }}
          animate={{x:0, opacity: 1 }}
          transition={{duration:0.8, delay:0.2}}
          className='mt-10 bg-gradient-to-r from-indigo-600 to-red-600 bg-clip-text text-transparent text-2xl md:text-3xl'>
            السلام علیکم
          </motion.h3>

          
          <motion.p
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration: 1.2, delay: 0.2}}
            className='text-white pr-52 sm:pr-60 md:pr-80 lg:pr-96 xl:pr-96 text-[22px]'>
            My Self,
          </motion.p>

          <motion.h1 
          initial={{x:-50, opacity: 0 }}
          animate={{x:0, opacity: 1 }}
          transition={{duration: 1.2, delay: 0.2}}
          className='bg-gradient-to-r from-red-600 to-indigo-600 bg-clip-text text-transparent
            text-5xl font-bold md:text-7xl mb-5'>MUHAMMAD OSAMA</motion.h1>

          <motion.p
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration: 1.2, delay: 0.2}}
            className='text-white pr-52 sm:pr-60 md:pr-80 lg:pr-96 xl:pr-96 text-[22px]'>
            I am,
          </motion.p>


            <h3 className="text-white text-2xl font-bold">
                 {' '}
                <span className="bg-gradient-to-r from-indigo-600 to-red-600 p-2 rounded-xl">
                    <Typewriter
                        words={['Software Engineer','Web Developer','Data Analyst', 'Machine learning Expert']}
                        loop={Infinity}
                        cursor
                        cursorStyle="|" 
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </h3>



          <motion.div 
           initial={{y:50, opacity: 0 }}
           animate={{y:0, opacity: 1 }}
           transition={{duration:0.8, delay:0.2}}
          className='md:text-base text-pretty text-sm text-gray-400 mt-5'>
          <p >As a Software Engineer, I specialize in web development and data analysis, leveraging a robust skill set in modern technologies to deliver innovative solutions. My  expertise lies in crafting dynamic and responsive user interfaces using <span className='text-pink-600'>React.js</span> and <span className='text-pink-600'>Next.js</span>, complemented by <span className='text-pink-600'><Link href='https://tailwindcss.com/' target='_blank'>Tailwind Css</Link></span> for streamlined styling. I excel in creating  engaging animations and transitions using <span className='text-pink-600'>Framer Motion</span> and <span className='text-pink-600'>GSAP</span>, enhancing user experience through interactive design.
          </p>

          <p className='pt-2'>In addition to my front-end development skills, I possess a solid foundation in <span className='text-pink-600'>data analysis</span> and <span className='text-pink-600'>machine learning</span>. I utilize analytical techniques and machine learning   algorithms to extract insights from complex datasets, enabling data-driven decision-making. My ability to bridge the gap between software engineering and data science  allows me to contribute effectively to cross-functional teams, driving project success and fostering continuous improvement.</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
