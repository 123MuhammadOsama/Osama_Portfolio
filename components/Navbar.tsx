'use client';
import React, { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-3 text-white backdrop-blur-md md:justify-evenly'>
            <div>
            <a href='#home' className='bg-gradient-to-r from-red-600 to-indigo-500 bg-clip-text text-transparent
             opacity-100 text-5xl font-semibold font-great transition-all duration-300 hover:opacity-80'>
                Osama
            </a>
            </div>
            <div>
            <ul className='hidden md:flex gap-10'>
                <a href="#home" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
                    <li>About me</li>
                </a>
                <a href="#tech" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
                    <li>Tech</li>
                </a>
                <a href="#projects" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
                    <li>Projects</li>
                </a>
                <a href="#contact" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
                    <li>Contact me</li>
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
