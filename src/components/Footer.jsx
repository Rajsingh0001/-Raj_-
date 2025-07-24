import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a1227] text-gray-400 pt-10 pb-6 px-4 mt-10">
      {/* Horizontal line */}
      <hr className="border-t border-violet-500 mb-6" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Line 1: Text */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Raj Dadda. All rights reserved.
        </p>

        {/* Line 2: Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/Rajsingh0001"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/raj-singh-96b024260"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
