import React from "react";

const SiteFooter = () => (
  <footer className="bg-gray-950 py-6 mt-12">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-gray-400">
      <div className="mb-2 md:mb-0">
        &copy; {new Date().getFullYear()} Sports & Racing AI. All rights reserved.
      </div>
      <div className="flex space-x-4">
        <a href="#features" className="hover:text-pink-400">Features</a>
        <a href="#analytics" className="hover:text-pink-400">Analytics</a>
        <a href="#about" className="hover:text-pink-400">About</a>
        <a href="#contact" className="hover:text-pink-400">Contact</a>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
