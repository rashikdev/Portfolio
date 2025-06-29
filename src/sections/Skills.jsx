import { motion } from "motion/react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiVite,
  SiFigma,
} from "react-icons/si";

const skills = {
  Frontend: [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  ],
  Tools: [
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    { name: "Vite", icon: <SiVite className="text-purple-500" /> },
  ],
};

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Skills = () => {
  return (
    <div className=" md:py-60">
      <div className="md:text-left text-center mb-20 lg:-ml-18">
        <h2 className="text-4xl font-bold text-primary">Skills</h2>
        <p className="text-secondary mt-2">Technologies I work with</p>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6"
      >
        {Object.entries(skills).map(([category, items]) => (
          <motion.div key={category} variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <motion.div className="grid grid-cols-2 gap-8">
              {items.map((skill, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-center gap-3 p-4 rounded bg-zinc-700 shadow hover:shadow-md border-b-2 border-primary"
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-white font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
