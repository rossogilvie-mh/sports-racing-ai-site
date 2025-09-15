import React from "react";

const Hero = () => (
  <section
    className="relative h-[60vh] flex items-center justify-center text-center"
    style={{
      backgroundImage:
        "url('/assets/futuristicracetrackfeaturingsportscarwithneontrailsmotionblur111095888448.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-pink-900/40 to-black/80" />
    <div className="relative z-10 max-w-2xl mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
        The Future of Sports & Racing Analytics
      </h1>
      <p className="text-lg md:text-xl text-pink-200 mb-6">
        Real-time AI insights. Lightning-fast performance. Unmatched precision.
      </p>
      <a
        href="#features"
        className="inline-block px-6 py-3 bg-pink-500 text-white rounded-lg font-semibold shadow hover:bg-pink-600 transition"
      >
        Explore Features
      </a>
    </div>
  </section>
);

export default Hero;
