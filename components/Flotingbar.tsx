'use client';


import { CgWebsite } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";

const Flotingbar = () => {
  return (
    <footer className="fixed bottom-10 left-1/2 transform -translate-x-1/2  w-auto  bg-pink-50
     backdrop-blur-md rounded-full shadow-lg px-4 py-2 text-purple-500 border-2 border-pink-400">
      <div className="flex items-center justify-center gap-10 text-4xl ">
        
        
          
      <div className="relative group">
  <a href="#home" aria-label="Home">
    <FaHome />
  </a>
  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 text-xs text-white bg-black rounded-md">
    Home
  </span>
</div>


          <div className="relative group">
          <a
            href="#tech" aria-label="Technologies"
          >
            <CgWebsite/>
          </a>
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 text-xs text-white bg-black rounded-md">
          Technologies
  </span>
          </div>

          <div className="relative group">
          <a
            href="#projects" aria-label="Projects"
          >
            <MdOutlineWork/>
          </a>
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 text-xs text-white bg-black rounded-md">
          Projects
  </span>
          </div >
          <div className="relative group">
          <a
            href="#contact" aria-label="Contact me"
          >
            <FaPhoneFlip/>
          </a>
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 text-xs text-white bg-black rounded-md">
          Contact
  </span>
          </div>
        
      </div>
    </footer>
  );
};

export default Flotingbar;
