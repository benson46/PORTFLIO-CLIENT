import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export  function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Home", "Projects", "Skills", "About Me", "Get In Touch"];

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
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className={`${
                  link === "Home"
                    ? "text-blue-400 border-b border-blue-400"
                    : "text-gray-300 hover:text-blue-400 transition-colors"
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 flex flex-col gap-4 md:hidden">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-gray-300 hover:text-blue-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
