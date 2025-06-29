import React from "react";
import { motion } from "motion/react";
import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import heroMd from "../assets/heromd.webp";
import heroLg from "../assets/herolg.webp";
const Banner = () => {
  return (
    <div className="banner h-screen relative">
      {/* for lg */}
      <motion.img
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="w-screen h-[700px] lg:h-full object-cover absolute top-20 -right-10 lg:left-1/5 lg:top-0 mx-10 md:hidden hidden lg:block"
        src={heroLg}
        alt=""
      />
      {/* for md */}
      <motion.img
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="w-screen h-full object-cover absolute md:top-20 md:-right-10 lg:hidden"
        src={heroMd}
        alt=""
      />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="absolute lg:bottom-1/7 md:bottom-120 md:space-y-5 -bottom-24 lg:transform -translate-y-1/2 lg:left-40 lg:space-y-8 space-y-3 pl-3 text-white"
      >
        <p className="text-lg">Frontend Developer</p>
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
            className="px-4 py-[6px] bg-primary hover:bg-transparent border-1 border-primary cursor-pointer"
          >
            Let's Connect
          </motion.button>
        </div>
        <div className="fixed flex-col gap-10 top-84 left-5 items-center hidden lg:hidden md:flex">
          <div className="bg-secondary h-40 w-[1px]"></div>
          <div className="flex flex-col gap-8 text-2xl">
            <a href="https://github.com/rashikdev" target="_blank">
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.facebook.com/share/16Fjh4kbAR/"
              target="_blank"
            >
              <FaFacebookF size={30} />
            </a>
            <a href="https://x.com/RashikKhan513" target="_blank">
              <FaTwitter size={30} />
            </a>
          </div>
          <div className="bg-secondary h-40 w-[1px]"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
