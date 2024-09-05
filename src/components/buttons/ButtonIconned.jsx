import React from "react";
import { SpinnerSmall, TextMd } from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ButtonIconned = ({
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
  icon = null,
  iconColor = "text-black",
  iconSize = "text-md",
}) => {
  return (
    <button
      type={type}
      onClick={onClick || null}
      className={`${width} ${height} ${padding} ${color} ${classes} ${
        isBordered ? "border" : ""
      } ${
        isRounded ? "rounded-full" : ""
      } ${hover} disabled:opacity-50 flex gap-2 font-medium items-center ${justify} ${borderRadius}`}
      disabled={isDisabled || isLoading}
    >
      {isLoading ? (
        <SpinnerSmall />
      ) : (
        <>
          <TextMd text={text} color={colorText} />
          {icon && (
            <FontAwesomeIcon
              icon={icon}
              className={`${iconColor} ${iconSize}`}
            />
          )}
        </>
      )}
    </button>
  );
};

export default ButtonIconned;
