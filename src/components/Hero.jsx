import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/profile.jpg";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  const fullText = "I am Raj Singh";
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 80 : 120;

    const timer = setTimeout(() => {
      const updatedText = isDeleting
        ? fullText.slice(0, index - 1)
        : fullText.slice(0, index + 1);

      setTypedText(updatedText);
      setIndex(isDeleting ? index - 1 : index + 1);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setIndex(0);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [index, isDeleting]);

  const getColoredText = () => {
    if (!typedText) return "";

    return (
      <>
        {typedText.startsWith("I") && (
          <>
            <span className="text-blue-400">{typedText.charAt(0)}</span>
            <span className="text-white">{typedText.slice(1)}</span>
          </>
        )}
      </>
    );
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row justify-between items-center px-6 md:px-20 pt-28 bg-gradient-to-br from-[#1a1a1a] to-[#2b2b2b]"
    >
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left space-y-4 md:w-1/2"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Hey ,{" "}
          <span>
            {getColoredText()}
            <span className="blinking-cursor">|</span>
          </span>
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-300">
          Frontend Developer
        </h2>
        <p className="text-gray-400">
          <b>
            Crafting modern, responsive, and animated web experiences with React
            and Tailwind CSS.
          </b>
        </p>

        <div className="flex justify-center md:justify-start gap-4 mt-4">
          <a
            href="https://github.com/Rajsingh0001"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/raj-singh-96b024260"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-500 text-white-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="/Raj_Resume.pdf"
            download
            className="bg-gradient-to-r from-gray-600 to-orange-300 text-white px-6 py-2 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 font-semibold flex items-center gap-2"
          >
            <FaDownload /> C.V.
          </a>
        </div>
      </motion.div>

      {/* Right Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 80 }}
        transition={{ duration: 1 }}
        className="mt-10 md:mt-0 md:w-1/2 flex justify-center relative"
      >
        <div className="relative w-72 h-72 rounded-full bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 p-1 animate-pulse-glow">
          <div className="w-full h-full bg-black rounded-full overflow-hidden flex items-center justify-center">
            <img
              src={profile}
              alt="Raj Dadda"
              className="w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
