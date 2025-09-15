import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const LiveAnalytics = () => {
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    fetch('/data/analytics.json')
      .then(res => res.json())
      .then(data => setMetrics(data));
  }, []);

  if (!metrics) return <div>Loading...</div>;

  // Example chart data (replace with real or demo data as needed)
  const chartData = [
    { lap: 1, time: 92.3 },
    { lap: 2, time: 91.8 },
    { lap: 3, time: 92.1 },
    { lap: 4, time: 91.5 },
    { lap: 5, time: 91.9 }
  ];

  return (
    <section id="analytics" className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-pink-400 mb-8">
          Live Analytics
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex-1 flex flex-col items-center space-y-4">
            {/* ...metrics display as before... */}
          </div>
          <div className="flex-1 flex flex-col items-center space-y-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <XAxis dataKey="lap" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="time" fill="#ec4899" />
              </BarChart>
            </ResponsiveContainer>
            <div className="text-gray-300 text-sm text-center">
              Example: Lap Times Bar Chart
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveAnalytics;
