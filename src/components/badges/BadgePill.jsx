import React from "react";
import { TextSm } from "../text";

const BadgePill = ({
  bgColor = "bg-green-200",
  textColor = "text-green-500",
  classes = "",
  text,
}) => {
  return (
    <div className={`${bgColor} ${classes} py-0.5 px-3 rounded-full`}>
      <TextSm color={textColor} text={text} />
    </div>
  );
};

export default BadgePill;
