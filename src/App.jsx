import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import Projects from "./pages/PROJECTS/project";
import Skills from "./pages/skills/skill";
import Contact from "./pages/contact me/contact_me";
import KnowledgeBase from "./pages/knowladge base/knowladge_base";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* The Home Route: Combines all your sections */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Projects />
              <Skills />
              <Contact />
            </>
          }
        />
        {/* The Dedicated Knowledge Base Route */}
        <Route path="/knowledge-base" element={<KnowledgeBase />} />
      </Routes>
      <footer className="border-t border-white/10 bg-[#050505]">
         <div className="max-w-7xl mx-auto px-6 py-6 text-center text-gray-400 text-sm">
           © {new Date().getFullYear()} Yasser Osama. All Rights Reserved.
         </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
