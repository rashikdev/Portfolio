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
    { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  ],
  Tools: [
    { name: "GitHub", icon: <FaGithub className="text-black" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    { name: "Vite", icon: <SiVite className="text-purple-500" /> },
  ],
};

const Skills = () => {
  return (
    <div className="md:h-[50vh]">
      <div className="md:text-left text-center mb-20 lg:-ml-18">
        <h2 className="text-4xl font-bold text-primary">Skills</h2>
        <p className="text-secondary mt-2">Technologies I work with</p>
      </div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="grid grid-cols-2 gap-8">
              {items.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-white p-4 rounded shadow hover:shadow-md transition"
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-black font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
