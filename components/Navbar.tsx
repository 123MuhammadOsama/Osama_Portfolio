'use client';
// import React, { useState } from 'react';
// import { BiMenu, BiX } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import { RiLinkedinFill } from 'react-icons/ri';
import { TbBrandWhatsapp } from 'react-icons/tb';

const Navbar = () => {
    // const [isOpen, setIsOpen] = useState(false);

    // const menuOpen = () => {
    //     setIsOpen(!isOpen);
    // };

    return (
        <nav className='flex w-full items-center justify-between border-b border-b-gray-700
         bg-black/100 px-6 md:px-16 py-3 text-white backdrop-blur-md z-50'>
            {/* Logo Section */}
            <div>
                <a href='#home' className='bg-gradient-to-r from-red-600 to-indigo-500 bg-clip-text text-transparent text-3xl md:text-5xl font-semibold font-great transition-all duration-300 hover:opacity-80'>
                    Osama
                </a>
            </div>

            {/* Social Icons for larger screens */}
            <div>
                <ul className='flex gap-6 md:gap-10'>
                    <a href="https://wa.me/qr/I4ECVOTNQ5H2P1" target='_blank' className='cursor-pointer bg-green-500 hover:bg-green-700 rounded-xl text-2xl md:text-4xl p-1 md:p-2'>
                        <TbBrandWhatsapp />
                    </a>
                    <a href="https://github.com/123MuhammadOsama" target='_blank' className='cursor-pointer bg-black hover:opacity-70 rounded-xl text-2xl md:text-4xl p-1 md:p-2'>
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-osama-834a04238/" target='_blank' className='cursor-pointer bg-blue-700 hover:border-l-blue-900 rounded-xl text-2xl md:text-4xl p-1 md:p-2'>
                        <RiLinkedinFill />
                    </a>
                </ul>
            </div>

            {/* Mobile Menu Icon */}
            

            {/* Mobile Menu */}
            
        </nav>
    );
};

export default Navbar;
