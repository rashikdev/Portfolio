import React from "react";
import { motion } from "motion/react";
const About = () => {
  return (
    <div className="lg:w-11/12 p-3 mx-auto h-fit md:h-[700px] flex md:flex-col-reverse md:justify-center lg:flex-row md:mt-20 -mb-30 md:mb-0 -mt-10 lg:mt-0">
      <div className="flex-1 p-20 md: hidden md:block">
        <div className="w-[66%] h-full border-t-1 border-l-1 border-b-1 flex items-center border-primary justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col items-end gap-7 md:py-8"
          >
            <h2 className="leading-none">
              <span className="text-[200px] font-bold">1</span>
              <span className="text-[200px] text-primary">.</span>
            </h2>
            <div className="text-end text-3xl mr-3">
              <p>Years</p>
              <p>Experience</p>
              <div>
                <span className="h-[2px] w-20 inline-block bg-secondary mr-14"></span>
                Coding
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex-1 md:pt-10 md:pl-10  text-center md:text-left">
        <h2 className="text-4xl font-bold text-primary">About Me</h2>
        <motion.p
          initial={{ opacity: 0, x: -800 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 hidden text-secondary lg:block leading-8 lg:leading-7"
        >
          Hi, I’m Rashik — a frontend developer who loves turning ideas into
          real, usable web experiences. My programming journey started with
          curiosity and late-night Google searches. What began as small tweaks
          to HTML and CSS quickly evolved into building full web applications
          using React, crafting dynamic user interfaces, and diving deep into
          tools like TailwindCSS, Framer Motion, and more. Every bug I’ve fixed
          and every feature I’ve shipped has made me more passionate about this
          field. What really excites me is creating intuitive and interactive
          UIs — clean design, smooth transitions, and responsive layouts that
          make users say “wow.” I enjoy projects where performance and polish
          matter just as much as functionality. I love working on portfolio
          websites, dashboards, landing pages, or anything where frontend
          creativity is key. When I’m not coding, you’ll probably find me
          enjoying some music, exploring random tech, or spending time with my
          friends. I believe taking time away from the screen keeps my ideas
          fresh and my creativity alive. I’m always learning, building, and
          looking for new ways to grow — both as a developer and as a person. If
          you’re into clean code, beautiful design, or just want to build
          something cool — let’s connect!
        </motion.p>
        <motion.p
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-6 lg:hidden text-secondary">
          Hi, I’m Rashik — a frontend developer who loves building clean,
          responsive, and interactive web interfaces. My journey started with
          curiosity and grew into a passion for crafting smooth user experiences
          using tools like React and TailwindCSS. I enjoy working on projects
          that blend design with performance, like portfolios, dashboards, and
          landing pages. Outside of coding, I’m into football, music, and
          sometimes sketching. I believe creativity off-screen fuels better
          ideas on-screen. Always learning, always building — that’s me.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
