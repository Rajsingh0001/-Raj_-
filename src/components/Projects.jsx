import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio built using Vite, React, Tailwind CSS, Framer Motion and smooth scroll.",
    technologies: ["React", "Tailwind", "Framer Motion", "Vite"],
    link: "#",
  },
  {
    title: "Chatting Application",
    description:
      "Built using Java and XML in Android Studio, this app allows real-time chatting between users with clean UI design.",
    technologies: ["Java", "XML", "Android Studio"],
    link: "#",
  },
  {
    title: "Health Resource System",
    description:
      "Developed using .NET and SQL, this system helps in managing and monitoring health-related resources efficiently.",
    technologies: [".NET", "SQL Server", "C#"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Updated Tech-Themed Heading */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-block px-6 py-3 border border-cyan-400 rounded-lg bg-[#0d1117]">
            <h2 className="text-4xl font-bold text-cyan-300 tracking-wider flex items-center justify-center gap-3">
              {/* SVG icon for computer screen */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-cyan-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25h6M3.75 6.75h16.5v9.75H3.75V6.75z"
                />
              </svg>
              Projects
            </h2>
          </div>
          <p className="text-gray-400 text-sm md:text-base mt-4">
            Some of the technical works I’ve crafted
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-[#1e293b] to-[#111827] p-6 rounded-2xl shadow-lg border border-violet-700 hover:scale-[1.03] transition-transform duration-300 group overflow-hidden"
            >
              {/* Optional soft hover effect */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-violet-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-violet-700 text-white px-2 py-1 text-xs rounded-full shadow-sm hover:bg-pink-500 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-violet-300 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
