import React from "react";
import { motion } from "motion/react";
// import "./banner.css";
const Banner = () => {
  return (
    <div className="banner bg-[url('./assets/hero.jpg')] bg-cover h-screen relative">
      <div className="absolute top-1/2 transform -translate-y-1/2 left-40 space-y-8">
        <p className="text-lg">Web Developer</p>
        <h1 className="text-4xl md:text-7xl font-bold">Rashik <span className="text-primary">.</span></h1>
        <h3 className="max-w-lg text-secondary">
          I'm a passionate frontend developer focused on <br /> building clean,
          interactive, and responsive web interfaces. <br /> I love turning
          ideas into user-friendly digital experiences.
        </h3>
        <div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="px-6 py-[6px] bg-primary hover:bg-transparent border-1 border-primary cursor-pointer"
          >
            Resume
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
