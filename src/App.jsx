import React from "react";
import SportsNavbar from "./components/SportsNavbar";
import Hero from "./components/Hero";
import FeatureGrid from "./components/FeatureGrid";
import LiveAnalytics from "./components/LiveAnalytics";
import About from "./components/About";
import Contact from "./components/Contact";
import SiteFooter from "./components/SiteFooter";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <SportsNavbar />
      <Hero />
      <FeatureGrid />
      <LiveAnalytics />
      <About />
      <Contact />
      <SiteFooter />
    </div>
  );
}

export default App;
