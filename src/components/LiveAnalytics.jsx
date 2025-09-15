import React, { useEffect, useState } from "react";

const LiveAnalytics = () => {
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    fetch('/data/analytics.json')
      .then(res => res.json())
      .then(data => setMetrics(data));
  }, []);

  if (!metrics) return <div>Loading...</div>;

  return (
    <section id="analytics" className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-pink-400 mb-8">
          Live Analytics
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex-1 flex flex-col items-center space-y-4">
            <div className="bg-gray-800 rounded-lg px-8 py-4 shadow text-center">
              <div className="text-2xl font-bold text-pink-300">{metrics.currentLap}</div>
              <div className="text-gray-200">Current Lap</div>
            </div>
            <div className="bg-gray-800 rounded-lg px-8 py-4 shadow text-center">
              <div className="text-2xl font-bold text-pink-300">{metrics.position}</div>
              <div className="text-gray-200">Position</div>
            </div>
            <div className="bg-gray-800 rounded-lg px-8 py-4 shadow text-center">
              <div className="text-2xl font-bold text-pink-300">{metrics.gapToLeader}</div>
              <div className="text-gray-200">Gap to Leader</div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center space-y-6">
            <img
              src="/assets/powerfulaccelerationgenericredformula260nw2529063703.jpg"
              alt="Analytics Chart"
              className="rounded-lg shadow-lg w-full max-w-xs"
            />
            <div className="text-gray-300 text-sm text-center">
              Example: Pace Model & Heatmap Visualization
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveAnalytics;
