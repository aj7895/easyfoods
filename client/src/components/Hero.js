import React from "react";
import { Carousel } from "antd";

const Hero = () => {
  return (
    <div className="">
      <Carousel autoplay>
        <img className="h-[65vh] object-cover" src="/hero.png" alt="" />
        <img className="h-[65vh] object-cover" src="/hero-1.png" alt="" />
        <img className="h-[65vh] object-cover" src="/hero-2.png" alt="" />
      </Carousel>
    </div>
  );
};

export default Hero;
