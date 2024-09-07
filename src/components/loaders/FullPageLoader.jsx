import React from "react";
import { Flex } from "../flex";
import Logo from "../logo";

const FullPageLoader = ({ isVisible }) => {
  return (
    <Flex
      classes={`w-full h-screen bg-white fixed left-0 right-0 top-0 z-10 ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-all duration-100`}
    >
      <Logo width={250} height={250} classes="animate-pulse rounded-full" />
    </Flex>
  );
};

export default FullPageLoader;
