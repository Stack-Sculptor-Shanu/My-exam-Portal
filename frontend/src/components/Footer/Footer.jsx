import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Importing icons from react-icons
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-10 px-5 md:px-20 min-h-[200px] flex flex-col justify-between relative">
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-red-500 to-sky-500 text-transparent bg-clip-text">
            AptiNest
          </h2>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
          © {new Date().getFullYear()} AptiNest. All rights reserved.
        </div>

        {/* Icons Section */}
        <div className="absolute bottom-4 right-5 flex space-x-4">
          {/* GitHub Icon */}
          <a href="https://github.com/Stack-Sculptor-Shanu" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white text-2xl hover:text-gray-400 transition duration-200" />
          </a>

          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com/in/shanujtpr/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-2xl hover:text-gray-400 transition duration-200" />
          </a>

          {/* Instagram Icon */}
          <a href="https://www.instagram.com/mr________sk________" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-2xl hover:text-gray-400 transition duration-200" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
