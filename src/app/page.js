"use client";

import { useEffect } from "react";
import Hero from "./Hero";
import { createForm } from "@/actions";
import { FancyBox, FancyImage, Flex, Grid, TextMd } from "@/components";
import Tests from "./Tests";

export default function Home() {
  return (
    <div className="m-10">
      <Hero />
      <div className="mt-10">
        <Tests />
      </div>
    </div>
  );
}
