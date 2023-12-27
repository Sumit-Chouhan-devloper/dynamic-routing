import React from "react";
import BrandPage from "./Brand";
import Nav from "./Nav";

const About = () => {
  return (
    <div className="h-screen">
      <Nav />
      <div className="h-full bg-green-400 flex-col gap-8 flex justify-center items-center text-white font-medium text-xl">
        <BrandPage />
      </div>
    </div>
  );
};

export default About;
