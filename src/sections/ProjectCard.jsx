import React, { useState } from "react";

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
  } = project;

  return (
    <div className="min-h-[400px] lg:w-[78vw] p-5 flex flex-col lg:flex-row justify-between items-center gap-5 shadow-2xl rounded-xl">
      <div className="flex-1 rounded border-l-2 border-primary p-3">
        <img
          src="https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322"
          alt=""
          className="pl-3 h-full lg:h-[300px] md:h-[400px] w-full object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between px-3 md:px-7 space-y-6">
        <h2 className="text-2xl font-bold ">{title}</h2>
        <p className="text-secondary">{description_small}</p>
        <ul>
          {features.map((feature, idx) => (
            <li key={idx} className="font-semibold">
              {feature}
            </li>
          ))}
        </ul>
        <div>
          {stack.map((item, idx) => (
            <span
              key={idx}
              className="mr-2 bg-green-400 text-black py-1 px-2 font-semibold"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <button className="px-6 btn">Live Demo</button>
          <div className="dropdown dropdown-center">
            <div tabIndex={0} role="button" className="btn">
              Github
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm mt-5"
            >
              <li>
                <a>Client Side</a>
              </li>
              <li>
                <a>Server Side</a>
              </li>
            </ul>
          </div>
          <button onClick={() => setOpen(true)} className="px-6 btn">
            Details
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-black p-6 rounded-xl w-full max-w-5xl h-[70vh] shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-lg font-bold cursor-pointer"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-secondary mb-2">{project.description_large}</p>
            <h4 className="font-semibold mt-4">Tech Stack:</h4>
            <p>{project.stack.join(", ")}</p>
            <h4 className="font-semibold mt-4">Challenges:</h4>
            <p className="text-sm text-secondary">Coming soon...</p>
            <h4 className="font-semibold mt-4">Improvements:</h4>
            <p className="text-sm text-secondary">Coming soon...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
