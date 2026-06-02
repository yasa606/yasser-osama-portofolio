import React from "react";
import profile from "./yasser-profile-photo.webp";

const Hero = () => {
  // Helper to handle scrolling
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="min-h-[85vh] flex items-center bg-[#0a0a0a] text-white flex"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          {/* Left Side */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm mb-6">
              Available For Freelance Work
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Full-Stack
              <span className="text-cyan-400"> Developer</span>
              <br />& SEO Specialist
            </h1>

            <p className="mt-8 text-lg text-gray-400 max-w-xl leading-relaxed">
              Building fast, searchable, and user-focused web experiences for
              the modern market. I combine powerful development skills with
              strategic SEO to create websites that look exceptional, perform
              flawlessly, and drive measurable results.
            </p>

            <div className="mt-10 flex gap-4">
              {/* Button: Scrolls to Contact */}
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition"
              >
                Let's Work Together
              </button>

              {/* Button: Scrolls to Projects */}
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-4 rounded-full border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                View Projects
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative flex justify-center">
            <div className="absolute w-80 h-80 bg-cyan-500/20 rounded-full blur-[120px]"></div>
            <img
              src={profile}
              alt="Yasser"
              width="348" // Match the actual displayed width to prevent layout shift
              height="700" // Match the actual displayed height
              fetchpriority="high" // Tell the browser this is the LCP element
              className="relative z-10 h-[700px] object-contain" // Use brackets for arbitrary values
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
