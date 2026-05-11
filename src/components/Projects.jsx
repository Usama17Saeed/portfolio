const projectItems = [
  {
    title: "Hosteloo-Online Hostel Management System",
    description:
      "A comprehensive hostel management system with features for student registration, room allocation, fee management, and staff administration.",
    stack: ["HTML","CSS","JavaScript", "Flask", "Python", "MONGODB"],
    github: "https://github.com/Usama17Saeed/Hosteloo-Online-Hostel-Booking-System",
    demo: "",
  },
  {
    title: "Flight Reservation System",
    description: "A modern website with responsive sections and smooth navigation.",
    stack: ["HTML","CSS","JavaScript", "PHP", "MySQL"],
    github: "https://github.com/Usama17Saeed/Online-flight-Reservation-System",
    demo: ""
      ,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white p-10">
      <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">
        <h2 className="mb-10 text-3xl font-bold">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectItems.map((project) => (
            <article
              key={project.title}
              className="rounded-xl border border-white/10 bg-gray-900/70 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-blue-500/60"
            >
              <div className="mb-4 h-40 rounded-lg border border-white/10 bg-gradient-to-br from-gray-800 to-gray-700" />
              <h2 className="text-xl font-semibold mb-3">{project.title}</h2>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <div className="mb-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full bg-blue-500/15 px-3 py-1 text-xs text-blue-300">
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
                >
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
