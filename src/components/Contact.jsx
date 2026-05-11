const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white p-10">
      <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">
        <h2 className="mb-8 text-3xl font-bold">Contact</h2>
        <form className="mb-8 grid gap-4 md:grid-cols-2">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-3 md:col-span-1"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-3 md:col-span-1"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-3 md:col-span-2"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded md:col-span-2"
          >
            Send Message
          </button>
        </form>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
          <a href="mailto:usamasaeed0322077@gmail.com" className="hover:text-white">
            usamasaeed0322077@gmail.com
          </a>
          <span className="text-gray-400">+92 322 0779242</span>
          <span className="text-gray-400">Islamabad, Pakistan</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
