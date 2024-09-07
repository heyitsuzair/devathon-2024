"use client";

import { Footer, Navbar } from "@/components";
import { usePathname } from "next/navigation"; 
import { routes } from "@/config";
import React from "react";

const BasicLayout = ({ children }) => {
  const currentPath = usePathname(); 

  return (
    <>
      {!currentPath.startsWith(routes.dashboard.admin.index) && <Navbar />}
      {children}
      {!currentPath.startsWith(routes.dashboard.admin.index) && <Footer />}
    </>
  );
};

export default BasicLayout;
