import React from "react";

import Image from "next/image";

const FancyImage = ({ image, width = 60, height = 60, classes = "" }) => {
  return (
    <a data-fancybox="gallery" href={image}>
      <Image
        src={image}
        unoptimized
        width={width}
        height={height}
        className={classes}
      />
    </a>
  );
};

export default FancyImage;
