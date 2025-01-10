import React from "react";
import Hero from "./components/Hero";
import SkyDive from "./components/SkyDive";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Footer from "./components/Footer";

const page = () => {
  return (
    <div className="body">
      <Hero />
      <SkyDive />
      <Carousel />
      <About />
      <Footer />
    </div>
  );
};

export default page;
