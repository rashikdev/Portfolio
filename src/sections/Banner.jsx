import React from "react";
import { motion } from "motion/react";
import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import heroMd from "../assets/heromd.png";
import heroLg from "../assets/herolg.png";
const Banner = () => {
  return (
    <div className="banner h-screen relative">
      {/* for lg */}
      <img
        className="w-screen h-[700px] lg:h-full object-cover absolute top-20 -right-10 lg:left-1/5 lg:top-0 mx-10 md:hidden hidden lg:block"
        src={heroLg}
        alt=""
      />
      {/* for md */}
      <img
        className="w-screen h-full object-cover absolute md:top-20 md:-right-10 lg:hidden"
        src={heroMd}
        alt=""
      />

      <div className="absolute lg:bottom-1/7 md:bottom-120 md:space-y-5 -bottom-36 lg:transform -translate-y-1/2 lg:left-40 lg:space-y-8 space-y-3 pl-3 ">
        <p className="text-lg">Web Developer</p>
        <h1 className="text-4xl md:text-7xl font-bold">
          Rashik <span className="text-primary">.</span>
        </h1>
        <h3 className="max-w-lg text-secondary">
          I'm a passionate frontend developer focused on <br /> building clean,
          interactive, and responsive web interfaces.
          <span className="hidden md:block">
            I love turning ideas into user-friendly digital experiences.
          </span>
        </h3>
        <div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="px-6 py-[6px] bg-primary hover:bg-transparent border-1 border-primary cursor-pointer"
          >
            Resume
          </motion.button>
        </div>
        <div className="fixed flex-col gap-10 top-84 left-5 items-center hidden lg:hidden md:flex">
          <div className="bg-secondary h-40 w-[1px]"></div>
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
          <div className="bg-secondary h-40 w-[1px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
