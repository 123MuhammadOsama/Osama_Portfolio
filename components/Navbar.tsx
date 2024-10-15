'use client';
import React, { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly'>
            <a href='#home' className='bg-gradient-to-r from-red-600 to-indigo-600 bg-clip-text text-transparent
             opacity-100 text-3xl font-semibold font-great transition-all duration-300 hover:opacity-80'>
                Osama
            </a>

            <ul className='hidden md:flex gap-10'>
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

            <ul className='hidden md:flex gap-5'>
                <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-green-500 hover:bg-opacity-100'>
                    <BsWhatsapp />
                </li>
                <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-gray-400 hover:bg-opacity-100'>
                    <BsGithub />
                </li>
                <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:bg-opacity-100'>
                    <BsLinkedin />
                </li>
            </ul>

            {/* Hide the menu icons on md and larger screens */}
            <div className='md:hidden'>
                {isOpen ? (
                    <BiX onClick={menuOpen} />
                ) : (
                    <BiMenu onClick={menuOpen} />
                )}
            </div>

            {isOpen && (
                <div className={`fixed right-0 top-[100px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-800 bg-black/90 p-12 ${isOpen ? 'block' : 'hidden'}`}>
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

                    <ul className='flex flex-wrap gap-5'>
                        <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-green-500 hover:bg-opacity-100'>
                            <BsWhatsapp />
                        </li>
                        <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-purple-500 hover:bg-opacity-100'>
                            <BsGithub />
                        </li>
                        <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:bg-opacity-100'>
                            <BsLinkedin />
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
