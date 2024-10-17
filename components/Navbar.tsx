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
        <nav className='flex w-full items-center justify-between border-b border-b-gray-700 bg-black/100 px-6 md:px-16 py-3 text-white backdrop-blur-md z-50'>
            {/* Logo Section */}
            <div>
                <a href='#home' className='bg-gradient-to-r from-red-600 to-indigo-500 bg-clip-text text-transparent text-3xl md:text-5xl font-semibold font-great transition-all duration-300 hover:opacity-80'>
                    Osama
                </a>
            </div>

            {/* Social Icons for larger screens */}
            <div>
                <ul className='hidden md:flex gap-6 md:gap-10'>
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
            <div className='md:hidden'>
                <BiMenu onClick={menuOpen} size={30} />
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <>
                    {/* Overlay behind the menu */}
                    <div className="fixed inset-0 bg-black/50 z-40" onClick={menuOpen}></div>

                    {/* Sliding Menu */}
                    <div className={`fixed right-0 top-0 z-50 h-screen w-2/3 bg-transparent p-6 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                        <div className='flex justify-end'>
                            <BiX onClick={menuOpen} size={30} className='text-transparent'/>
                        </div>
                        <ul className='flex gap-6 mt-8 fixed items-center justify-center'>
                            <a href="https://wa.me/qr/I4ECVOTNQ5H2P1" target='_blank' className='cursor-pointer bg-green-500 hover:bg-green-700 rounded-xl text-3xl p-1'>
                                <TbBrandWhatsapp />
                            </a>
                            <a href="https://github.com/123MuhammadOsama" target='_blank' className='cursor-pointer bg-black hover:opacity-70 rounded-xl text-3xl p-1'>
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/muhammad-osama-834a04238/" target='_blank' className='cursor-pointer bg-blue-700 hover:border-l-blue-900 rounded-xl text-3xl p-1'>
                                <RiLinkedinFill />
                            </a>
                        </ul>
                    </div>
                </>
            )}
        </nav>
    );
};

export default Navbar;
