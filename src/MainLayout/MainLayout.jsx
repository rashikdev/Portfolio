import React from "react";
import Navbar from "../components/Navbar";
import Home from "../sections/Home";
import { FaGithub, FaFacebookF, FaTwitter } from "react-icons/fa";

const MainLayout = () => {
  return (
    <div className="overflow-x-hidden selection:bg-primary selection:text-white">
      <Navbar />
      <section id="home">
        <Home />
      </section>
      {/* social links */}
      <div className="fixed lg:top-1/7 lg:left-10 flex-col md:top-1/2 md:left-10 gap-10 items-center hidden lg:flex">
        <div className="bg-secondary h-50 w-[1px]"></div>
        <div className="flex flex-col gap-8 text-2xl">
          <a href="https://github.com/rashikdev" target="_blank">
            <FaGithub size={30} />
          </a>
          <a href="https://facebook.com/" target="_blank">
            <FaFacebookF size={30} />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <FaTwitter size={30} />
          </a>
        </div>
        <div className="bg-secondary h-50 w-[1px]"></div>
      </div>
      <section id="about" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">About Me</h1>
      </section>
      <section
        id="skills"
        className="h-screen flex items-center justify-center"
      >
        <h1 className="text-4xl font-bold">Skills</h1>
      </section>
      <section
        id="projects"
        className="h-screen flex items-center justify-center"
      >
        <h1 className="text-4xl font-bold">Projects</h1>
      </section>
      <section
        id="contact"
        className="h-screen flex items-center justify-center"
      >
        <h1 className="text-4xl font-bold">Contact</h1>
      </section>
    </div>
  );
};

export default MainLayout;
