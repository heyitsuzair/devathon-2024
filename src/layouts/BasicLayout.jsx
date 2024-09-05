"use client";

import { Footer, Navbar } from "@/components";
import React from "react";

const BasicLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default BasicLayout;
