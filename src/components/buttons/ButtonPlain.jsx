import React from "react";
import { SpinnerSmall, TextMd } from "../index";
const ButtonPlain = ({
  width = "w-28",
  height = "h-12",
  padding = "p-3",
  text,
  color = "bg-theme-500",
  colorText = "text-white",
  onClick = null,
  classes = "",
  isBordered = false,
  isRounded = false,
  borderRadius = "",
  isDisabled = false,
  isLoading = false,
  type = "button",
  hover = "",
  justify = "justify-center",
  id = "",
}) => {
  return (
    <button
      type={type}
      id={id}
      onClick={onClick || null}
      className={`${width} ${height} ${padding} ${color} ${classes} ${
        isBordered ? "border" : ""
      } ${
        isRounded ? "rounded-full" : ""
      } ${hover} disabled:opacity-50 flex gap-2 font-medium items-center ${justify} ${borderRadius}`}
      disabled={isDisabled || isLoading}
    >
      {isLoading ? <SpinnerSmall /> : <TextMd text={text} color={colorText} />}
    </button>
  );
};

export default ButtonPlain;
