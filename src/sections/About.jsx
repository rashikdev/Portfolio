import React from "react";

const About = () => {
  return (
    <div className="lg:w-11/12 p-3 mx-auto h-fit  md:h-[700px] flex md:mt-20">
      <div className="flex-1 p-20 hidden lg:block">
        <div className="w-[80%] h-full border-t-2 border-l-2 border-b-2">
          <img src="" alt="" />
        </div>
      </div>
      <div className="flex-1 md:p-10">
        <h2 className="text-4xl font-bold text-primary">About Me</h2>
        <p className="mt-6 hidden text-secondary md:block leading-8 lg:leading-7">
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
          playing football, enjoying some music, or sketching whatever comes to
          mind. I believe taking time away from the screen keeps my ideas fresh
          and my creativity alive. I’m always learning, building, and looking
          for new ways to grow — both as a developer and as a person. If you’re
          into clean code, beautiful design, or just want to build something
          cool — let’s connect!
        </p>
        <p className="mt-6 md:hidden text-secondary">
          Hi, I’m Rashik — a frontend developer who loves building clean,
          responsive, and interactive web interfaces. My journey started with
          curiosity and grew into a passion for crafting smooth user experiences
          using tools like React and TailwindCSS. I enjoy working on projects
          that blend design with performance, like portfolios, dashboards, and
          landing pages. Outside of coding, I’m into football, music, and
          sometimes sketching. I believe creativity off-screen fuels better
          ideas on-screen. Always learning, always building — that’s me.
        </p>
      </div>
    </div>
  );
};

export default About;
