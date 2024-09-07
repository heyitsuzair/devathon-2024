import Image from "next/image";
import React from "react";

const Hero = ({ test }) => {
  return (
    <div>
      <Image
        unoptimized
        src={test.image}
        className="h-[80vh] w-full object-cover"
        width={20}
        height={20}
      />
    </div>
  );
};

export default Hero;
