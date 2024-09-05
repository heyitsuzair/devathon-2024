"use client";

import { useEffect } from "react";
import Hero from "./Hero";
import { createForm } from "@/actions";
import { FancyBox, FancyImage, Flex, Grid, TextMd } from "@/components";

export default function Home() {
  useEffect(() => {
    const insertData = async () => {
      console.log("Creating....");
      createForm();
    };

    insertData();
  }, []); // Empty dependency array to run only once on mount

  return (
    <>
      <Hero />
      <FancyBox>
        <Grid>
          <div className="col-span-3">
            <FancyImage image={"https://placehold.co/210x216"} />
          </div>
          <div className="col-span-3">
            <FancyImage image={"https://placehold.co/210x216"} />
          </div>
          <div className="col-span-3">
            <FancyImage image={"https://placehold.co/210x216"} />
          </div>
          <div className="col-span-3">
            <FancyImage image={"https://placehold.co/210x216"} />
          </div>
          <div className="col-span-3">
            <FancyImage image={"https://placehold.co/210x216"} />
          </div>
          <div className="col-span-3">
            <FancyImage image={"https://placehold.co/210x216"} />
          </div>
        </Grid>
      </FancyBox>
      <Flex>
        <TextMd />
      </Flex>
    </>
  );
}
