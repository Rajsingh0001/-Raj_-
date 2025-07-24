import { useState } from "react";
import Rlogo from "../assets/Rlogo.jpg"; // Make sure image exists in src/assets

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-violet-700/30 backdrop-blur-md border-b border-white/10 shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={Rlogo}
            alt="Raj Dadda Logo"
            className="w-10 h-10 rounded-full border-2 border-orange-400 p-[2px] animate-pulse"
          />
          <h1 className="text-2xl font-bold text-orange-400">Raj Dadda</h1>
        </div>

        <div className="hidden md:flex gap-8 text-white font-medium">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="hover:text-orange-400 transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-white text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-violet-900/80 text-white px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="block hover:text-orange-400 transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
