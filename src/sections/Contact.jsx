import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { motion } from "motion/react";
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
        toast.success("Email sent successfully!");
        e.target.reset();
      })
      .catch((error) => {
        toast.error("Failed to send email.");
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center text-white">
      <div className="w-11/12 max-w-6xl grid md:grid-cols-2 gap-20 py-20 px-4 md:px-0">
        {/* Left Side - Info */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-primary">Contact</h2>
          <p className="text-gray-300 mb-8">
            Got a question or an idea? Let’s connect and make it happen.
          </p>
          <div className="space-y-4">
            <p className="text-xl font-semibold">
              Rangpur, Dhaka
              <br />
              Bangladesh
            </p>
            <p className="text-xl font-semibold">
              +880 1318-142118{" "}
              <span className="text-[10px]">( phone/whatsapp )</span>
            </p>
            <p className="text-gray-400">rashik.webdev@gmail.com</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div>
          <h3 className="text-xl font-semibold mb-6">
            Let’s connect and start a meaningful <br /> conversation{" "}
            <span className="text-red-600">chat with me.</span>
          </h3>
          <form className="space-y-6" onSubmit={sendEmail}>
            <div>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full bg-transparent border-b border-gray-400 py-2 px-1 focus:outline-none text-white placeholder-gray-400"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full bg-transparent border-b border-gray-400 py-2 px-1 focus:outline-none text-white placeholder-gray-400"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message"
                rows="3"
                required
                className="w-full bg-transparent border-b border-gray-400 py-2 px-1 focus:outline-none text-white placeholder-gray-400"
              ></textarea>
            </div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              type="submit"
              className="bg-red-600 px-6 py-2 text-white font-semibold  hover:bg-transparent border border-red-600 cursor-pointer"
            >
              Send Email
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
