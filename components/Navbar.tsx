'use client';
import React, { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import { RiLinkedinFill } from 'react-icons/ri';
import { TbBrandWhatsapp } from 'react-icons/tb';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='flex w-full items-center justify-between border-b border-b-gray-700 bg-black/100 px-16 py-3
         text-white backdrop-blur-md md:justify-evenly'>
            <div>
            <a href='#home' className='bg-gradient-to-r from-red-600 to-indigo-500 bg-clip-text text-transparent
            text-5xl font-semibold font-great transition-all duration-300 hover:opacity-80
             mt-4'> {/* Add margin-top */}
                Osama
</a>

            </div>
            <div>
            <ul className='hidden md:flex gap-10'>
                <a href="https://wa.me/qr/I4ECVOTNQ5H2P1" target='_blank' className='cursor-pointer bg-green-500 hover:bg-green-700 rounded-xl text-4xl p-1'>
                   <TbBrandWhatsapp/>
                </a>
                <a href="https://github.com/123MuhammadOsama" target='_blank' className='cursor-pointer bg-black hover:opacity-70 rounded-xl text-4xl p-1'>
                    <FaGithub/>
                </a>
                <a href="https://www.linkedin.com/in/muhammad-osama-834a04238/" target='_blank' className='cursor-pointer bg-blue-700 hover:border-l-blue-900 rounded-xl text-4xl p-1'>
                    <RiLinkedinFill/>
                </a>

            </ul>
            </div>

            <div className='md:hidden'>
                <BiMenu onClick={menuOpen} size={30} />
            </div>

            {isOpen && (
                <div className={`fixed right-0 top-[100px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-800 bg-black/90 p-12`}>
                    <div className='flex justify-end w-full'>
                        <BiX onClick={menuOpen} size={30} />
                    </div>
                    <ul className='flex flex-col gap-8'>
                        <a href="#home" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
                            <li>Home</li>
                        </a>
                        <a href="#tech" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
                            <li>Tech</li>
                        </a>
                        <a href="#projects" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
                            <li>Projects</li>
                        </a>
                        <a href="#contact" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
                            <li>Contact</li>
                        </a>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
