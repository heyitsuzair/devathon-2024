import { images } from "@/config";
import Image from "next/image";
import React from "react";

const Logo = ({ width = 150, height = 150, classes = "" }) => {
  return (
    <Image
      src={images.logo}
      width={width}
      height={height}
      className={classes}
      alt="logo"
    />
  );
};

export default Logo;
