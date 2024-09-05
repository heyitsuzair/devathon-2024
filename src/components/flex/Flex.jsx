import React from "react";

const Flex = ({
  flexDirection = "flex-row",
  justify = "justify-center",
  alignItems = "items-center",
  gap = "gap-4",
  children,
  classes = "",
  onClick = null,
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex ${flexDirection} ${justify} ${alignItems} ${gap} ${classes}`}
    >
      {children}
    </div>
  );
};

export default Flex;
