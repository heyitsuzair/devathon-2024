import { Grid, TextMd } from "@/components";
import { questionsCategories } from "@/config";
import React, { useState } from "react";

const TestCategories = ({ activeTab, setActiveTab }) => {
  return (
    <Grid>
      {questionsCategories.map((category, i) => (
        <div
          className={`col-span-1 rounded-xl border border-black text-center cursor-pointer ${
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
const Hero = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="m-10">
      <TestCategories activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default Hero;
