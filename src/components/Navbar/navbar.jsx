import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { name: "Home", id: "home", path: "/" },
    { name: "Projects", id: "projects", path: "/" },
    { name: "Skills", id: "skills", path: "/" },
    { name: "Knowledge Base", id: null, path: "/knowledge-base" },
    { name: "Contact Me", id: "contact", path: "/" },
  ];

  // 1. ScrollSpy: Track which section is visible
  useEffect(() => {
    // Only track scroll if we are on the homepage
    if (location.pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const foundLink = links.find((link) => link.id === entry.target.id);
            if (foundLink) setActive(foundLink.name);
          }
        });
      },
      { threshold: 0.6 }, // Active when 60% of the section is visible
    );

    // Observe all sections that have an ID
    links.forEach((link) => {
      if (link.id) {
        const element = document.getElementById(link.id);
        if (element) observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  // 2. Hide/Show Navbar on scroll
  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShow(currentScroll <= lastScroll || currentScroll <= 50);
      lastScroll = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (link) => {
    setActive(link.name);
    if (location.pathname !== link.path) {
      navigate(link.path);
    }
    if (link.id) {
      setTimeout(() => {
        document
          .getElementById(link.id)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
      }`}
    >
      <div className="flex items-center gap-8 md:gap-12 px-8 py-5 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        {links.map((link) => (
          <button
            key={link.name}
            onClick={() => handleNavigation(link)}
            className={`relative uppercase text-sm font-semibold tracking-wider transition-all duration-300 ${
              active === link.name
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {link.name}
            {active === link.name && (
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-8 h-1 rounded-full bg-cyan-400 shadow-[0_0_10px_#00d9ff,0_0_20px_#00d9ff]" />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
