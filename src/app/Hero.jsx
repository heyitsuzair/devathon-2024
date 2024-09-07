import { Grid, TextMd } from "@/components";
import { questionsCategories } from "@/config";
import React, { useState } from "react";

const TestCategories = ({ activeTab, setActiveTab }) => {
  return (
    <Grid>
      {questionsCategories.map((category, i) => (
        <div
          className={`col-span-6 md:col-span-3 lg:col-span-1 rounded-xl border border-black text-center cursor-pointer ${
            activeTab === i
              ? "bg-theme-500 text-white border-theme-500"
              : "hover:bg-theme-500 hover:text-white hover:border-theme-500"
          } transition-all`}
          key={category.value}
          onClick={() => setActiveTab(i)}
        >
          <TextMd text={category.text} color="" classes={"font-semibold"} />
        </div>
      ))}
    </Grid>
  );
};
const Hero = ({ activeTab, setActiveTab }) => {
  return <TestCategories activeTab={activeTab} setActiveTab={setActiveTab} />;
};

export default Hero;
