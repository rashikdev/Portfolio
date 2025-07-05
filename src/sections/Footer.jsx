import { motion } from "motion/react";
import React, { useState } from "react";

const Footer = () => {
  const mySecret = import.meta.env.VITE_MY_SECREY_KEY;
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const secret = form.secret.value;
    if (secret !== mySecret) {
      setOpen(false);
      return;
    }
    if (secret === mySecret) {
      form.reset();
      setOpen(false);
      setShow(true);
    }
  };

  const handleLog = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <footer className="w-full backdrop-blur-sm md:border-b md:pb-4 rounded-2xl border-primary lg:py-8 mt-16 ">
          <div className="lg:w-11/12 mx-auto text-center">
            <h3 className="md:text-lg font-semibold tracking-wide lg:mb-2 mb-3 border-l-2 border-r-2 border-primary md:mx-14 mx-5 text-white">
              <span className="text-primary font-bold underline underline-offset-3">
                Let’s
              </span>{" "}
              build something great together{" "}
              <span
                onDoubleClick={() => setOpen(!open)}
                className="text-primary text-4xl leading-0"
              >
                .
              </span>
            </h3>
            <p className="md:text-sm text-[12px] text-secondary">
              &copy; {new Date().getFullYear()} Rashik. Crafted with care —
              powered by React, motion & Tailwind.
            </p>
          </div>
        </footer>
      </motion.div>
      {open && (
        <div className="fixed bottom-4 right-4  border-b-2 rounded-xl border-primary">
          <form onSubmit={handleForm}>
            <input
              type="password"
              name="secret"
              placeholder=""
              className="input w-[100px] bg-transparent text-transparent border-none focus:outline-none cursor-default rounded-2xl"
            />
          </form>
        </div>
      )}

      {show && (
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed bottom-4 right-4 border-l-2 border-b-2 rounded-2xl border-primary p-4"
        >
          <span
            onDoubleClick={() => setShow(false)}
            className="absolute text-5xl leading-0 right-4 -top-1 text-primary"
          >
            .
          </span>
          <form onSubmit={handleLog} className="flex flex-col gap-4">
            <input
              type="email"
              name="email"
              required
              placeholder="email"
              className="border-l-2 py-1 px-3 focus:outline-none text-secondary"
            />
            <input
              type="password"
              name="password"
              required
              placeholder="password"
              className="border-l-2 py-1 px-3 focus:outline-none text-secondary"
            />
            <button
              type="submit"
              className="border-primary border-1 py-[3px] cursor-pointer bg-primary rounded-b-2xl"
            >
              Login
            </button>
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default Footer;
