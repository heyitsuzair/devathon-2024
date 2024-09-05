import React from "react";
import { SpinnerSmall, TextMd } from "../index";
const ButtonOutlined = ({
  width = "w-28",
  height = "h-12",
  padding = "p-3",
  text,
  color = "bg-inherit",
  colorText = "text-black",
  onClick = null,
  classes = "",
  isBordered = false,
  isRounded = false,
  borderRadius = "rounded-lg",
  isDisabled = false,
  isLoading = false,
  type = "button",
  hover = "",
  justify = "justify-center",
}) => {
  return (
    <button
      type={type}
      onClick={onClick || null}
      className={`${width} ${height} ${padding} ${color} ${classes} ${
        isBordered ? "border" : ""
      } ${
        isRounded ? "rounded-full" : ""
      } ${hover} disabled:opacity-50 flex gap-2 font-medium items-center ${justify} ${borderRadius} border-2 hover:border-theme-500 `}
      disabled={isDisabled || isLoading}
    >
      {isLoading ? <SpinnerSmall /> : <TextMd text={text} color={colorText} />}
    </button>
  );
};

export default ButtonOutlined;
