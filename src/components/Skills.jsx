const skillItems = [
  { icon: "🐍", name: "HTML", level: "92%" },
  { icon: "🎨", name: "CSS", level: "88%" },
  { icon: "💻", name: "JavaScript", level: "70%" },
  { icon: "⚛️", name: "React", level: "80%" },
  { icon: "🧪", name: "Flask", level: "84%" },
  { icon: "📊", name: "SQL", level: "95%" },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-black text-white p-10">
      <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">
        <h2 className="mb-8 text-3xl font-bold">Skills</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillItems.map((skill) => (
            <div
              key={skill.name}
              className="rounded-xl border border-white/10 bg-gray-900/70 p-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-blue-500/60"
            >
              <div className="mb-2 text-2xl">{skill.icon}</div>
              <h3 className="mb-3 text-lg font-semibold">{skill.name}</h3>
              <div className="h-2 w-full rounded-full bg-gray-700">
                <div className="h-2 rounded-full bg-blue-500" style={{ width: skill.level }} />
              </div>
              <p className="mt-2 text-sm text-gray-300">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
