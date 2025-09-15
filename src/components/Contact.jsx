import React from "react";

const Contact = () => (
  <section id="contact" className="py-16 bg-gray-900">
    <div className="max-w-lg mx-auto px-4">
      <h2 className="text-3xl font-bold text-pink-400 mb-6 text-center">Contact Us</h2>
      <form className="bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="px-4 py-2 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="px-4 py-2 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="px-4 py-2 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <button
          type="submit"
          className="bg-pink-500 text-white font-semibold py-2 rounded hover:bg-pink-600 transition"
        >
          Request Demo
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
