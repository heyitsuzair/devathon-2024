import React from "react";
import { TextXl } from ".";

const TextNotFound = ({
  text = "Sorry! We Cannot Find What You Are Looking For",
  classes = "font-bold",
}) => {
  return <TextXl text={text} classes={classes} />;
};

export default TextNotFound;
