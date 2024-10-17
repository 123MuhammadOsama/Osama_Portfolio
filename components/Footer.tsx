import React from 'react'
import { MdMarkEmailRead } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-2 pb-40'>
            <a href="mailto:connect.uleo3110@gmail.com?subject=Hello%20Tehseen&body=Hire%20me">
                <div className='flex text-2xl gap-1'>
                    <MdMarkEmailRead className='text-pink-500'/>
                    <span className='text-white'>connect.uleo3110@gmail.com</span>
                </div>
            </a>
            <p className='text-white'>Copyright © 2023 Osama</p>
        
      
    </div>
  )
}

export default Footer
