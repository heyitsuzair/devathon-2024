import React from "react";

const Section = ({ children, classes = "" }) => {
  return <div className={`p-10 md:px-28 md:py-16 ${classes}`}>{children}</div>;
};

export default Section;
