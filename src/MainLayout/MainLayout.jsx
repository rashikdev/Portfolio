import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Home from "../sections/Home";
import { FaGithub, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import { motion } from "motion/react";
import { Toaster } from "react-hot-toast";
import { FaXTwitter } from "react-icons/fa6";
import Footer from "../sections/Footer";
const MainLayout = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  return (
    <div className="overflow-x-hidden selection:bg-primary selection:text-white">
      <Navbar />
      {loading ? (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-4xl font-bold">
            <div className="loader"></div>
          </h2>
        </div>
      ) : (
        <>
          <section id="home">
            <Home />
          </section>
          {/* social links */}
          <div className="fixed lg:top-1/7 lg:left-10 flex-col md:top-1/2 md:left-10 gap-10 items-center hidden lg:flex">
            <div className="bg-secondary h-50 w-[1px]"></div>
            <div className="flex flex-col gap-8 text-2xl">
              <motion.a
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/rashikdev"
                target="_blank"
              >
                <FaGithub size={30} />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/rashikdev"
                target="_blank"
              >
                <FaLinkedinIn size={30} />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.facebook.com/share/16Fjh4kbAR/"
                target="_blank"
              >
                <FaFacebookF size={30} />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                href="https://x.com/RashikKhan513"
                target="_blank"
              >
                <FaXTwitter size={26} />
              </motion.a>
            </div>
            <div className="bg-secondary h-50 w-[1px]"></div>
          </div>

          {/* about */}
          <section
            id="about"
            className="h-[70vh] md:h-[90vh] flex items-center justify-center"
          >
            <About />
          </section>

          {/* skills */}
          <section
            id="skills"
            className="md:h-[70vh] lg:h-[70vh] pt-20 flex items-center justify-center lg:pt-30"
          >
            <Skills />
          </section>

          {/* projects */}
          <section
            id="projects"
            className="lg:pt-35 flex items-center justify-center"
          >
            <Projects />
          </section>

          {/* contact */}
          <section id="contact" className="flex items-center justify-center">
            <Contact />
          </section>
          <section className="lg:w-6/12 w-11/12 mx-auto lg:-mt-50 -mt-30 mb-5">
            <Footer />
          </section>
        </>
      )}
      <Toaster></Toaster>
    </div>
  );
};

export default MainLayout;
