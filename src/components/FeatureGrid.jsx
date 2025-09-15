import React from "react";

const features = [
  {
    title: "AI-Powered Race Predictions",
    desc: "Leverage advanced machine learning to forecast race outcomes, pit strategies, and driver performance.",
    img: "/assets/sideviewneonglowingsport260nw1387460150.jpg",
  },
  {
    title: "Real-Time Telemetry",
    desc: "Monitor live car data, lap times, and position gaps with instant AI-driven insights and alerts.",
    img: "/assets/modernsportscardrivinghighspeedmotionblurvibrantcolorsextremeeffectpinkpurpleblueorangecreating352309384.jpg",
  },
  {
    title: "Performance Heatmaps",
    desc: "Visualize driver and team performance with dynamic, interactive heatmaps and analytics dashboards.",
    img: "/assets/futuristicracecaracceleratesneontrackgeneratingvibrantglowingtrailsagainstdarknightbackgroundillustratinghigh376449914.jpg",
  },
];

const FeatureGrid = () => (
  <section id="features" className="py-16 bg-gray-900">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-pink-400">
        Key Features
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition"
          >
            <img
              src={f.img}
              alt={f.title}
              className="h-32 w-full object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-pink-300 mb-2">{f.title}</h3>
            <p className="text-gray-200 text-center">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureGrid;
