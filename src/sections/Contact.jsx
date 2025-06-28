const Contact = () => {
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
          <h3 className="text-2xl md:text-2xl font-semibold mb-6">
            Let's grab a coffee and jump on <br /> conversation{" "}
            <span className="text-red-600">chat with me.</span>
          </h3>
          <form className="space-y-6">
            <div>
              <input
                type="email"
                required
                placeholder="Your Email"
                className="w-full bg-transparent border-b border-gray-400 py-2 px-1 focus:outline-none text-white placeholder-gray-400"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows="3"
                required
                className="w-full bg-transparent border-b border-gray-400 py-2 px-1 focus:outline-none text-white placeholder-gray-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-red-600 px-6 py-2 text-white font-semibold  hover:bg-transparent border border-red-600 cursor-pointer"
            >
              Send Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
