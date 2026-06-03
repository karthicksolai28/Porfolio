import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false); // Close menu after clicking a link (on mobile)
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white dark:bg-gray-900 shadow-md text-gray-800 dark:text-white'
          : 'bg-gradient-to-r from-indigo-600 via-violet-400 to-purple-400 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Brand */}
        <h3 className="font-bold text-xl sm:text-2xl ml-2">M KARTHICK SOLAI</h3>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 font-semibold text-base items-center">
          {["home", "about", "certification", "education", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="hover:text-blue-500 transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
          {/* Theme Toggle in Desktop */}
          <li>
            {/* <ThemeToggle /> */}
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        {/* <div className="md:hidden flex items-center gap-3 pr-2">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div> */}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 font-medium text-base text-gray-800 dark:text-white bg-white dark:bg-gray-900">
          {["home", "about", "certification", "education", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={handleLinkClick}
              className="block hover:text-blue-500 transition-colors"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
