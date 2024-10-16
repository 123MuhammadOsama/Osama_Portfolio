'use client';

import { BsWhatsapp, BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="fixed bottom-10  w-full bg-transparent text-white">
      <div className="flex items-center justify-center gap-10 text-3xl">
        
        
          {/* WhatsApp */}
          <a
            href="https://wa.me/qr/I4ECVOTNQ5H2P1 "
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="bg-green-500 p-2 rounded-xl"
          >
            <BsWhatsapp />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/123MuhammadOsama"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="bg-black p-2 rounded-xl"
          >
            <BsGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/muhammad-osama-834a04238/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="bg-blue-500 p-2 rounded-xl"
          >
            <BsLinkedin />
          </a>
        
      </div>
    </footer>
  );
};

export default Footer;
