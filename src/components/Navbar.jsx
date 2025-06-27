import React from "react";
const Navbar = () => {
  return (
    <div className="fixed z-50 w-full">
      <nav className="w-11/12 mx-auto flex justify-between gap-6 py-10">
        <ul className="flex items-center gap-12">
          <li className="text-3xl font-bold">
            <a href="#">
              Portfolio<span className="text-primary">.</span>
            </a>
          </li>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#skills">SKILLS</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
        <button className="px-6 py-[6px] bg-primary hover:bg-transparent border-1 border-primary cursor-pointer">
          Resume
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
