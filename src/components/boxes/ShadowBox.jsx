"use client";

import React from "react";
import { useRouter } from "next/navigation";

const ShadowBox = ({ children }) => {
  const router = useRouter();
  return (
    <div className="bg-white shadow p-5 rounded-md border my-4">{children}</div>
  );
};

export default ShadowBox;
