import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-black text-white p-10 min-h-screen flex items-center justify-center"
    >
      <div className="fade-in-up w-full max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl backdrop-blur-sm">
        <p className="mb-4 uppercase tracking-widest text-blue-400">Hello, I am</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Usama Saeed</h1>
        <h2 className="mb-4 text-xl text-gray-200 md:text-2xl">AI &amp; Web Developer</h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-300">
          Computer Science Student focused on Web Development and AI/ML.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="projects"
            smooth
            duration={500}
            offset={-80}
            className="cursor-pointer bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
          >
            View Projects
          </Link>
          <Link
            to="contact"
            smooth
            duration={500}
            offset={-80}
            className="cursor-pointer bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
