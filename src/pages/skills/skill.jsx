import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML5", level: 95 },
    { name: "CSS3 / Tailwind CSS", level: 80 },
    { name: "JavaScript", level: 75 },
    { name: "React.js", level: 75 },
    { name: "Next.js", level: 70 },
    { name: "SEO", level: 75 },
    { name: "C++", level: 45 },
    { name: "Go", level: 40 },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-5xl md:text-6xl font-bold mb-16">
          <span className="text-cyan-400">SKILLS</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-black/50 border border-white/10 backdrop-blur-lg rounded-3xl p-6 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="flex justify-between mb-3">
                <h3 className="text-white text-lg font-semibold">
                  {skill.name}
                </h3>

                <span className="text-cyan-400 font-medium">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-cyan-400 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
