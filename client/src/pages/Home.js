import React from "react";

// components
import Hero from "../components/Hero.js";
import Highlight from "../components/Highlight.js";
import OurPartner from "../components/OurPartner.js";
import Products from "../components/Products.js";
import SubMenu from "../components/SubMenu.js";
import Testimonial from "../components/Testimonial.js";

const Home = () => {
  return (
    <div className="bg-gray-50 mt-2 mx-10">
      <Hero />
      <SubMenu />
      <Products />
      <OurPartner />
      <Testimonial />
      <Highlight />
    </div>
  );
};

export default Home;
