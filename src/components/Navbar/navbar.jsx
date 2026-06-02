import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // npm install lucide-react

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [show, setShow] = useState(true);
  const [isOpen, setIsOpen] = useState(false); // New state for mobile menu
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { name: "Home", id: "home", path: "/" },
    { name: "Projects", id: "projects", path: "/" },
    { name: "Skills", id: "skills", path: "/" },
    { name: "Knowledge Base", id: null, path: "/knowledge-base" },
    { name: "Contact Me", id: "contact", path: "/" },
  ];

  // ... (Keep your existing useEffect ScrollSpy and Hide/Show logic here)

  const handleNavigation = (link) => {
    setActive(link.name);
    setIsOpen(false); // Close menu on click
    if (location.pathname !== link.path) navigate(link.path);
    if (link.id) {
      setTimeout(() => {
        document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[90%] md:w-auto ${show ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}`}>
      {/* Desktop View */}
      <div className="hidden md:flex items-center gap-12 px-8 py-5 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 shadow-lg">
        {links.map((link) => (
          <button key={link.name} onClick={() => handleNavigation(link)} className={`uppercase text-sm font-semibold ${active === link.name ? "text-white" : "text-gray-400"}`}>
            {link.name}
          </button>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex items-center justify-between px-6 py-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10">
        <span className="text-white font-bold">Yasser</span>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
          {links.map((link) => (
            <button key={link.name} onClick={() => handleNavigation(link)} className="text-white text-lg py-2">
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
