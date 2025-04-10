import React from "react";
import HeroSection from "./HeroSection";
import ipone from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/mac-system-cut.jfif";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection title="But IPhone 14 Pro" subtitle="Experience the power of the latest iPhone 14 with our most Pro camera ever." link="/" image={ipone} />
      {/* Featured Products */}
      {/* Hero Section */}
      <HeroSection title="Build the ultimate setup" subtitle="You can add Studio Display and color-matched Magic accessories to your bag after configure your Mac mini." link="/" image={mac} />
    </div>
  );
};

export default HomePage;
