import React from "react";

const SportsNavbar = () => (
  <nav className="sticky top-0 z-50 bg-gray-950 bg-opacity-90 shadow-lg">
    <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <img
          src="/assets/speedingsportscaronneon260nw2106482042.jpg"
          alt="Sports & Racing AI Logo"
          className="h-10 w-10 rounded-full object-cover border-2 border-pink-500"
        />
        <span className="text-xl font-bold tracking-wide text-pink-400">
          Sports & Racing AI
        </span>
      </div>
      <div className="hidden md:flex space-x-8">
        <a href="#features" className="hover:text-pink-400 transition">Features</a>
        <a href="#analytics" className="hover:text-pink-400 transition">Live Analytics</a>
        <a href="#about" className="hover:text-pink-400 transition">About</a>
        <a href="#contact" className="hover:text-pink-400 transition">Contact</a>
      </div>
      <a
        href="#contact"
        className="ml-4 px-4 py-2 bg-pink-500 text-white rounded-lg font-semibold shadow hover:bg-pink-600 transition"
      >
        Get Demo
      </a>
    </div>
  </nav>
);

export default SportsNavbar;
