import { motion } from "motion/react";
import React from "react";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
    >
      <footer className="w-full backdrop-blur-sm md:border-b md:pb-4 rounded-2xl border-primary lg:py-8 mt-16 ">
        <div className="lg:w-11/12 mx-auto text-center">
          <h3 className="md:text-lg font-semibold tracking-wide lg:mb-2 mb-3 border-l-2 border-r-2 border-primary md:mx-14 mx-5">
            <span className="text-primary font-bold underline underline-offset-3">
              Let’s
            </span>{" "}
            build something great together{" "}
            <span className="text-primary text-4xl leading-0 animate-pulse">
              .
            </span>
          </h3>
          <p className="md:text-sm text-[12px] text-secondary">
            &copy; {new Date().getFullYear()} Rashik. Crafted with care —
            powered by React & Tailwind.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Footer;
