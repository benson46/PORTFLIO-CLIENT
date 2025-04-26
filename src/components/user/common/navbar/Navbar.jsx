import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About Me", path: "/about" },
    { name: "Get In Touch", path: "/contact" },
  ];

  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-blue-400 border-b-2 border-blue-400"
      : "text-gray-300 hover:text-blue-400 transition-colors";

  return (
    <nav className="bg-zinc-900 p-4">
      <div className="flex justify-between items-center">
        {/* Brand */}
        <div className="text-blue-400 font-medium">BENSON B VAROOR</div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-blue-400">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Links for larger screens */}
        <ul className="hidden md:flex justify-center space-x-8">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink to={link.path} className={linkClasses}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 flex flex-col gap-4 md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={linkClasses}
              onClick={() => setIsOpen(false)} // Close the menu after clicking
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
