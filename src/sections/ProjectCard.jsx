import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);

  const {
    title,
    image,
    description_large,
    description_small,
    features,
    stack,
    live,
    github,
    challenges,
    improvements,
  } = project;

  return (
    <motion.div
      initial={{ y: 150 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="min-h-[400px] lg:h-[560px] lg:w-[78vw] p-5"
    >
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        glareEnable={false}
        className="w-full shadow-2xl rounded-xl "
      >
        <div className="flex flex-col lg:flex-row justify-between items-start gap-5 p-5">
          <div className="flex-1 rounded border-l-2 border-primary p-3">
            <img
              src={image}
              alt=""
              className="pl-3 h-full lg:h-[300px] md:h-[400px] w-full object-cover rounded"
            />
          </div>

          <div className="flex-1 flex flex-col justify-between px-3 md:px-7 space-y-6">
            <h2 className="text-2xl font-bold text-primary">{title}</h2>
            <p className="text-secondary">{description_small}</p>
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li
                  key={idx}
                  className="font-semibold text-white flex gap-2 leading-5"
                >
                  <span className="text-primary">{"=>"}</span> <p>{feature}</p>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {stack.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-primary py-[2px] font-semibold text-center text-white md:text-[16px] text-[12px]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <button className="px-6 btn border hover:border-primary">
                <a href={live} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </button>
              <div className="dropdown dropdown-right">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn border hover:border-primary"
                >
                  Github
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-30 p-2 shadow-sm mt-14 space-y-2"
                >
                  <li className="bg-zinc-700 font-semibold underline-offset-4 hover:decoration-primary underline">
                    <a href={github.client} target="_blank" rel="noreferrer">
                      Client Side
                    </a>
                  </li>
                  {github.server && (
                    <li className="bg-zinc-700 font-semibold underline-offset-4 hover:decoration-primary underline">
                      <a href={github.server} target="_blank" rel="noreferrer">
                        Server Side
                      </a>
                    </li>
                  )}
                </ul>
              </div>
              <button
                onClick={() => setOpen(true)}
                className="px-6 btn border hover:border-primary"
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </Tilt>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black p-6 rounded-xl w-full max-w-4xl h-[60vh] shadow-lg relative overflow-y-auto text-white"
          >
            <button
              className="absolute top-2 right-2 text-lg font-bold cursor-pointer text-primary"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-secondary mb-2">{description_large}</p>
            <h4 className="font-semibold mt-4">Tech Stack:</h4>
            <p>{project.stack.join(", ")}</p>
            <h4 className="font-semibold mt-4">Challenges:</h4>
            <ul className="text-sm text-secondary list-disc ml-6">
              {challenges.map((challenge, idx) => (
                <li key={idx}>{challenge}</li>
              ))}
            </ul>
            <h4 className="font-semibold mt-4">Improvements:</h4>
            <ul className="text-sm text-secondary list-disc ml-6">
              {improvements.map((improvement, idx) => (
                <li key={idx}>{improvement}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
