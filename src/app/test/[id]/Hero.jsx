import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      <Image
        unoptimized
        src={"https://placehold.co/210x216"}
        className="h-[80vh] w-full object-cover"
        width={20}
        height={20}
      />
    </div>
  );
};

export default Hero;
