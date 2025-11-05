"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Badges", href: "#badges" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = (href) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  // Track mouse position
  useEffect(() => {
    const moveCursor = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
        className="fixed pointer-events-none w-6 h-6 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-all duration-150 z-50"
      ></div>

      <header className="fixed z-50 w-full p-6 bg-transparent flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Home">
          <Image src="/images/smr_logo.png" alt="SMR Logo" width={80} height={80} />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center">
          {menuItems.map((item, i) => (
            <button
              key={i}
              onClick={() => handleScroll(item.href)}
              className="text-white font-medium hover:text-gray-300 cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? "\u2715" : "\u2630"}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full right-0 mt-2 w-40 bg-black bg-opacity-90 rounded-lg flex flex-col p-4 md:hidden">
            {menuItems.map((item, i) => (
              <button
                key={i}
                onClick={() => handleScroll(item.href)}
                className="text-white py-2 hover:text-gray-300 text-left cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
