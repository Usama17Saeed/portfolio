import { useState } from "react";

const About = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="bg-black text-white p-10">
      <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm md:grid-cols-2">
        
        {/* Image */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gray-900/70">
          {!imgError ? (
            <img
              src="/assets/profile.jpg"
              alt="profile"
              className="h-full w-full object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex h-72 items-center justify-center text-gray-400">
              Add your photo at public/assets/profile.jpg
            </div>
          )}
        </div>

        {/* Text */}
        <div>
          <h2 className="mb-6 text-3xl font-bold">About Me</h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-300">
            I am a Computer Science student with an interest in Web Development and Artificial Intelligence.
            I enjoy building creative and functional web applications that solve real-world problems.
            I am always eager to learn new technologies and improve my development skills.
          </p>

          <p className="mb-4 text-gray-300">
            I have experience in creating user-friendly web pages, designing layouts, and working with basic backend functionality. I also practice using Git and GitHub for version control and project management.
          </p>

          <p className="text-gray-300">
            I am continuously improving my skills by learning new concepts and working on real-world web development practices to become a better developer.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;