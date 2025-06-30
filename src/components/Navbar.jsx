import React, { useState } from "react";
import { motion } from "motion/react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  return (
    <div className="fixed z-50 w-full">
      <nav className="w-11/12 mx-auto flex justify-between gap-6 py-10">
        <h2 className="text-3xl font-bold lg:hidden text-white">
          <a href="#">
            Portfolio<span className="text-primary">.</span>
          </a>
        </h2>
        <ul className="items-center gap-12 hidden lg:flex">
          <li className="text-3xl font-bold">
            <a href="#" onClick={() => setActiveLink("home")}>
              Portfolio<span className="text-primary"> .</span>
            </a>
          </li>
          <li>
            <a
              href="#home"
              onClick={() => setActiveLink("home")}
              className={`${
                activeLink === "home" ? "text-red-500" : ""
              } hover:text-red-500`}
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setActiveLink("about")}
              className={`${
                activeLink === "about" ? "text-red-500" : ""
              } hover:text-red-500`}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => setActiveLink("skills")}
              className={`${
                activeLink === "skills" ? "text-red-500" : ""
              } hover:text-red-500`}
            >
              SKILLS
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => setActiveLink("projects")}
              className={`${
                activeLink === "projects" ? "text-red-500" : ""
              } hover:text-red-500`}
            >
              PROJECTS
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setActiveLink("contact")}
              className={`${
                activeLink === "contact" ? "text-red-500" : ""
              } hover:text-red-500`}
            >
              CONTACT
            </a>
          </li>
        </ul>

        <motion.button
          whileTap={{ scale: 0.9 }}
          className="px-6 py-[6px] bg-primary hover:bg-transparent border-1 border-primary cursor-pointer hidden lg:block"
        >
          Resume
        </motion.button>
        <button
          onClick={() => setOpen(true)}
          className="px-3 bg-primary hover:bg-transparent border-1 border-primary cursor-pointer lg:hidden"
        >
          Menu
        </button>
      </nav>
      {open && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-10 right-0 bg-white/20 backdrop-blur-[5px] text-black w-60 h-screen"
        >
          <button
            onClick={() => setOpen(false)}
            className="px-3 py-1 rounded-xl absolute top-2 right-3 bg-transparent border-primary border-2 text-white font-bold"
          >
            X
          </button>
          <ul
            onClick={(e) => {
              setOpen(false);
              const targetId = e.target.getAttribute("data-target");
              if (targetId) {
                setActiveLink(targetId);
                const section = document.getElementById(targetId);
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }
            }}
            className="flex flex-col gap-6 p-10 text-white cursor-pointer"
          >
            <li className="hover:text-primary" data-target="home">
              HOME
            </li>
            <li className="hover:text-primary" data-target="about">
              ABOUT
            </li>
            <li className="hover:text-primary" data-target="skills">
              SKILLS
            </li>
            <li className="hover:text-primary" data-target="projects">
              PROJECTS
            </li>
            <li className="hover:text-primary" data-target="contact">
              CONTACT
            </li>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="w-22 py-[4px] text-lg bg-primary hover:bg-black border-1 border-primary cursor-pointer"
            >
              Resume
            </motion.button>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
