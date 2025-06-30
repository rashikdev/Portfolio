import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { motion } from "motion/react";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdAlternateEmail, MdOutlineLocationOn } from "react-icons/md";
const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    const form = e.target;
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Email has been sent!");
        e.target.reset();
      })
      .catch((error) => {
        toast.error("Failed to send email.");
        console.error(error);
      });
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: 100 },
    show: { x: 0, transition: { duration: 1 } },
  };

  return (
    <div className="lg:min-h-screen md:h-[60vh] flex items-center justify-center text-white md:mb-70 mb-10 lg:mb-0">
      <div className="w-11/12 max-w-6xl grid md:grid-cols-2 gap-20 py-20 px-4 md:px-0">
        {/* Left Side - Info */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-primary">Contact</h2>
          <p className="text-gray-300 mb-8">
            Got a question or an idea? Let’s connect and make it happen.
          </p>
          <div className="space-y-4">
            <p className="text-xl font-semibold flex gap-2">
              <span className="pt-1 -ml-1">
                <MdOutlineLocationOn size={28} color="gray" />
              </span>
              Rangpur, Dhaka
              <br />
              Bangladesh
            </p>
            <p className="text-xl font-semibold flex items-center gap-2">
              <span>
                <FaWhatsapp color="gray" />
              </span>
              +880 1974-707143{" "}
            </p>
            <p className="text-gray-500 flex items-center gap-2">
              <span>
                <MdAlternateEmail size={20} color="gray" />
              </span>{" "}
              rashik.webdev@gmail.com{" "}
            </p>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-6">
            Let’s connect and start a meaningful <br /> conversation{" "}
            <span className="text-red-600">chat with me.</span>
          </h3>
          <motion.form
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            className="space-y-6"
            onSubmit={sendEmail}
          >
            <motion.div variants={itemVariants}>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full bg-transparent border-b border-gray-400 py-2 px-1 focus:outline-none text-white placeholder-gray-400"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full bg-transparent border-b border-gray-400 py-2 px-1 focus:outline-none text-white placeholder-gray-400"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <textarea
                name="message"
                placeholder="Message"
                rows="3"
                required
                className="w-full bg-transparent border-b border-gray-400 py-2 px-1 focus:outline-none text-white placeholder-gray-400"
              ></textarea>
            </motion.div>
            <motion.button
              variants={itemVariants}
              whileTap={{ scale: 0.9 }}
              type="submit"
              className="bg-red-600 px-6 py-2 text-white font-semibold  hover:bg-transparent border border-red-600 cursor-pointer"
            >
              Send Email
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
