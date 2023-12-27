import React from "react";

import { CardData } from "./common/Helper";
import DataCards from "./DataCards";

const Hero = () => {
  return (
    <>
      {CardData.map((brand, index) => (
        <DataCards {...brand} key={index} />
      ))}
    </>
  );
};

export default Hero;
