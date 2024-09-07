"use client";

import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import { FullPageLoader, Grid } from "@/components";
import Details from "./Details";
import BuyTest from "./BuyTest";
import { useParams } from "next/navigation";
import { readForPublic } from "@/actions";

const page = () => {
  const [test, setTest] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const getTest = async () => {
    setIsLoading(true);
    const { success, data } = await readForPublic(id);
    setIsLoading(false);
    if (success) {
      setTest(data);
    }
  };

  useEffect(() => {
    getTest();
  }, [id]);

  if (isLoading) {
    return <FullPageLoader isVisible={isLoading} />;
  }

  return (
    <div>
      <Hero test={test} />
      <Grid classes="mb-20">
        <div className="col-span-12 lg:col-span-9">
          <Details />
        </div>
        <div className="col-span-12 lg:col-span-3 m-10 lg:-mt-44">
          <BuyTest />
        </div>
      </Grid>
    </div>
  );
};

export default page;
