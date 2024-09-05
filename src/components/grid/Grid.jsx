import React from "react";

const Grid = ({
  justifyContent = "justify-center",
  alignItems = "items-center",
  gap = "gap-4",
  classes = "",
  children,
}) => {
  return (
    <div
      className={`grid grid-cols-12 ${gap} ${justifyContent} ${alignItems} ${classes}`}
    >
      {children}
    </div>
  );
};

export default Grid;
