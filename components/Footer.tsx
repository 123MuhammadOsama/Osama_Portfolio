import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { MdMarkEmailRead } from 'react-icons/md'
import { RiLinkedinFill } from 'react-icons/ri'
import { TbBrandWhatsapp } from 'react-icons/tb'

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-2 pb-40'>
            <a href="mailto:connect.uleo3110@gmail.com?subject=Hello%20Osama&body=Hire%20me">
                <div className='flex text-2xl gap-1'>
                    <MdMarkEmailRead className='text-pink-500'/>
                    <span className='text-white'>uleo3110@gmail.com</span>
                </div>
            </a>
            <p className='text-white'>Copyright©2023 Osama</p>
            <div className='text-white text-xl'>
            <ul className='hidden md:flex gap-10'>
                <a href="https://wa.me/qr/I4ECVOTNQ5H2P1" target='_blank' className='cursor-pointer rounded-xl p-1'>
                   <TbBrandWhatsapp/>
                </a>
                <a href="https://github.com/123MuhammadOsama" target='_blank' className='cursor-pointer hover:opacity-70 rounded-xl p-1'>
                    <FaGithub/>
                </a>
                <a href="https://www.linkedin.com/in/muhammad-osama-834a04238/" target='_blank' className='cursor-pointe rounded-xl p-1'>
                    <RiLinkedinFill/>
                </a>

            </ul>
            </div>
        
      
    </div>
  )
}

export default Footer
