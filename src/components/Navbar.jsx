import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar fixed top-0 w-full bg-black text-white px-6 py-4 z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-teal-400 text-2xl font-bold">Portfolio</h1>
        <div className="md:hidden" onClick={toggleMenu}>
          <button className="text-teal-400">☰</button>
        </div>
        <ul
          className={`md:flex space-x-6 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <li><a href="#about" className="hover:text-teal-400">À propos</a></li>
          <li><a href="#skills" className="hover:text-teal-400">Compétences</a></li>
          <li><a href="#projects" className="hover:text-teal-400">Projets</a></li>
          <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
