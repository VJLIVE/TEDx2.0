import React, { useState, useEffect } from "react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 50);

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);  

  return (
    <nav className={`fixed w-full px-8 py-8 transition-all duration-300 ${fadeIn ? 'fade-in' : ''} ${isOpen ? 'bg-transparent' : (scrolled ? 'bg-glass' : 'bg-transparent')}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-red-600 text-5xl relative">
            <b>TEDx</b>
            <span className="text-white text-5xl"> VJIT</span>
          </h1>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {["Home", "Team", "Speakers", "About Us", "Contact Us"].map((item) => (
            <div className="relative group" key={item}>
              <a
                href="#"
                className="text-gray-300 text-lg transition-colors duration-300 group-hover:text-red-600 nav-text"
              >
                {item}
              </a>
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </div>
          ))}
        </div>

        <div className="hidden md:block">
          <button
            onClick={() => window.location.href = "https://your-tickets-url.com"}
            className="btn relative rounded-full px-6 py-2 font-bold transition-all duration-300 shadow flex items-center"
          >
            <FaArrowRight className="mr-2" />
            Get Tickets
          </button>
        </div>

        <button
          onClick={toggleNav}
          className="block md:hidden text-white focus:outline-none"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`${isOpen ? "translate-x-0" : "-translate-x-full"} fixed top-0 left-0 h-screen w-full bg-black transform transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex justify-end p-6">
          <button onClick={toggleNav} className="text-white">
            <FaTimes size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-8 p-8">
          {["Home", "Team", "Speakers", "About Us", "Contact Us"].map((item) => (
            <div className="relative group" key={item}>
              <a
                href="#"
                className="text-gray-300 text-lg transition-colors duration-300 group-hover:text-red-600"
              >
                {item}
              </a>
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </div>
          ))}
          <button
            onClick={() => window.location.href = "https://your-tickets-url.com"}
            className="btn relative rounded-full px-6 py-2 font-bold transition-all duration-300 shadow flex items-center"
          >
            <FaArrowRight className="mr-2" />
            Get Tickets
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
