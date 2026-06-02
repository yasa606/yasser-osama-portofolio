import React from "react";
import dubai from "./page3.webp";
import splitrust from "./page2.webp";
import movie from "./page.webp";

const Projects = () => {
  const projects = [
    {
      image: dubai,
      title: "Khalid Al Mansouri | Dubai’s Premier Luxury Real Estate Advisor",
      description:
        "Bridging the gap between discerning global investors and Dubai’s most exclusive off-market properties. Delivering white-glove service, sales excellence, and strategic investment insights since 2012.",
      link: "https://dubai-real-sate.vercel.app/",
    },
    {
      image: splitrust,
      title: "Splitrust",
      description:
        "A secure, collateralized trading platform designed for high-throughput digital asset transactions with robust risk management features.",
      link: "https://splitrust.netlify.app/",
    },
    {
      image: movie,
      title: "YOMovieApp",
      description:
        "A comprehensive movie discovery platform featuring real-time trailer integration, detailed film metadata, and intuitive search functionality for cinephiles.",
      link: "https://yo-movie-app.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-5xl md:text-6xl font-bold text-white mb-16">
          <span className="text-cyan-400">PROJECTS</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-black/50 border border-white/10 backdrop-blur-lg hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col h-[300px]">
                <h2 className="text-xl font-bold text-white mb-3 min-h-[60px]">
                  {project.title}
                </h2>
                <p className="text-gray-400 leading-relaxed flex-grow">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 px-5 py-3 rounded-full bg-cyan-400 text-black font-semibold text-center hover:scale-105 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
