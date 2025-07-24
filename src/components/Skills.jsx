import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiVite } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Vite", icon: <SiVite className="text-purple-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#0d1117] px-6 md:px-20 py-20 text-white relative overflow-hidden"
    >
      {/* 🔵 Background Grid Dots */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:20px_20px] opacity-30 z-0" />

      <div className="relative z-10 text-center mb-14">
        {/* 🔶 Fancy Heading Box */}
        <div className="inline-block px-6 py-3 border border-orange-500 rounded-lg shadow-md shadow-orange-400/20 relative">
          <h2 className="text-4xl font-bold text-orange-400 tracking-wider relative z-10">
            <span className="before:absolute before:w-2 before:h-2 before:rounded-full before:bg-orange-400 before:-left-4 before:top-1/2 before:-translate-y-1/2 after:absolute after:w-2 after:h-2 after:rounded-full after:bg-orange-400 after:-right-4 after:top-1/2 after:-translate-y-1/2">
              Skills
            </span>
          </h2>
          <div className="absolute inset-0 border-t border-dotted border-orange-400 opacity-30 pointer-events-none"></div>
        </div>

        <p className="text-gray-400 text-sm md:text-base mt-4">
          Technologies I specialize in
        </p>
      </div>

      {/* 🔧 Skill Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto relative z-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#161b22] rounded-lg p-6 text-center shadow-lg hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 transform"
          >
            <div className="text-5xl mb-4 flex justify-center">
              {skill.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-200">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
