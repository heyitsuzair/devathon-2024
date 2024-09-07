import React from "react";
import Hero from "./Hero";
import { Grid } from "@/components";
import Details from "./Details";
import BuyTest from "./BuyTest";

const page = () => {
  return (
    <div>
      <Hero />
      <Grid classes="mb-20">
        <div className="col-span-12 lg:col-span-9">
          <Details />
        </div>
        <div className="col-span-12 lg:col-span-3 m-10 lg:-mt-36">
          <BuyTest />
        </div>
      </Grid>
    </div>
  );
};

export default page;
