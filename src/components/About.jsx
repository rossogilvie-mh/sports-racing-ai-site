import React from "react";

const About = () => (
  <section id="about" className="py-16 bg-gray-900">
    <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
      <img
        src="/assets/powerfulaccelerationgenericredformula260nw2529063703.jpg"
        alt="About the Team"
        className="w-full md:w-1/2 rounded-lg shadow-lg"
      />
      <div>
        <h2 className="text-3xl font-bold text-pink-400 mb-4">About Us</h2>
        <p className="text-gray-200 mb-2">
          We are a team of passionate engineers, data scientists, and racing enthusiasts dedicated to revolutionizing sports analytics with cutting-edge AI.
        </p>
        <p className="text-gray-400">
          Our platform delivers real-time insights, predictive analytics, and beautiful visualizations to empower teams, drivers, and fans worldwide.
        </p>
      </div>
    </div>
  </section>
);

export default About;
