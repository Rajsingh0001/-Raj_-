import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-[#111827] text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Left Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/3"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange-400 border-l-4 border-orange-500 pl-4">
            About Me
          </h2>
          <div className="mt-4 h-1 w-16 bg-orange-500 rounded"></div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-2/3 bg-[#1f2937] p-6 rounded-2xl shadow-lg space-y-5"
        >
          <p className="text-gray-300 leading-relaxed">
            👋 Hi, I'm{" "}
            <span className="text-orange-400 font-semibold">Raj Singh</span>,
            also known as <span className="italic">Raj Dadda</span>.
          </p>
          <p className="text-gray-300 leading-relaxed">
            🚀 A passionate Frontend Developer skilled in <strong>HTML</strong>,{" "}
            <strong>CSS</strong>, <strong>JavaScript</strong>,{" "}
            <strong>React</strong>, <strong>Tailwind CSS</strong>, and also
            experienced in <strong>Android Development</strong> using Java &
            XML.
          </p>
          <p className="text-gray-300 leading-relaxed">
            🧠 My mindset is simple:{" "}
            <span className="italic text-orange-400">
              "Learner! trying to understand..."
            </span>
          </p>
          <p className="text-gray-300 leading-relaxed">
            🧑‍💼 I bring leadership skills from being a{" "}
            <strong>House Captain</strong> in school and{" "}
            <strong>Kabaddi Team Captain</strong> in college, where I led my
            team to victory.
          </p>
          <p className="text-gray-300 leading-relaxed">
            💡 I'm detail-oriented, work with dedication, and always strive to
            understand before I build.
          </p>
          <p className="text-gray-300 leading-relaxed">
            💼 Projects:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>📱 Chatting Application (Android Studio – Java, XML)</li>
              <li>🏥 Hospital Management System (.NET)</li>
              <li>🌐 Personal Portfolio Website (React + Tailwind)</li>
            </ul>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
