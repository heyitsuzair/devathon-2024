import React from "react";
import { TextLg } from "../text";

const TabsUnderlined = ({ tabs = [], onTabClick = null, activeTab = null }) => {
  return (
    <div className="flex items-center justify-between">
      {tabs.map((tab, i) => (
        <div
          key={tab}
          className={`w-full text-center cursor-pointer pb-2 ${
            activeTab === i ? "border-b-4 border-yellow-400 font-bold" : ""
          }`}
          onClick={() => onTabClick(i)}
        >
          <TextLg classes="" text={tab} />
        </div>
      ))}
    </div>
  );
};

export default TabsUnderlined;
