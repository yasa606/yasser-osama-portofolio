import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [show, setShow] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { name: "Home", id: "home", path: "/" },
    { name: "Projects", id: "projects", path: "/" },
    { name: "Skills", id: "skills", path: "/" },
    { name: "Knowledge Base", id: null, path: "/knowledge-base" },
    { name: "Contact Me", id: "contact", path: "/" },
  ];

  useEffect(() => {
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
      { threshold: 0.6 }
    );
    links.forEach((link) => {
      if (link.id) {
        const element = document.getElementById(link.id);
        if (element) observer.observe(element);
      }
    });
    return () => observer.disconnect();
  }, [location.pathname]);

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
    setIsOpen(false);
    if (location.pathname !== link.path) navigate(link.path);
    if (link.id) {
      setTimeout(() => {
        document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[90%] md:w-auto ${
        show ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
      }`}
    >
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-12 px-8 py-5 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        {links.map((link) => (
          <button
            key={link.name}
            onClick={() => handleNavigation(link)}
            className={`relative uppercase text-sm font-semibold tracking-wider transition-all duration-300 ${
              active === link.name ? "text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            {link.name}
            {active === link.name && (
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-8 h-1 rounded-full bg-cyan-400 shadow-[0_0_10px_#00d9ff,0_0_20px_#00d9ff]" />
            )}
          </button>
        ))}
      </div>

      {/* Mobile Navigation Trigger */}
      <div className="md:hidden flex items-center justify-between px-6 py-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        <span className="text-white font-bold tracking-widest">YASSER</span>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center gap-6 p-8 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 shadow-2xl">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavigation(link)}
              className="text-white text-lg uppercase font-semibold hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
