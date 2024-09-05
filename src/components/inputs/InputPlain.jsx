"use client";

import React, { useState } from "react";
import { TextError, TextMd } from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const InputPlain = ({
  id,
  type,
  name,
  placeholder,
  onChange,
  label,
  value,
  onBlur,
  isRequired = false,
  isDisabled = false,
  reference,
  maxLength,
  max,
  background = "bg-gray-200",
  error = false,
  errorText = "",
  icon = null,
  iconProps = null,
  borderRadius = "rounded-lg",
  textColor = "text-black",
  labelColor = "text-heading",
  padding = "p-4",
  accept = "",
}) => {
  // States
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const checkType =
    type === "password" ? (isPasswordVisible ? "text" : "password") : type;

  if (!icon) {
    if (type === "password" && !isPasswordVisible) {
      icon = faEye;
    }
    if (type === "password" && isPasswordVisible) {
      icon = faEyeSlash;
    }
  }

  return (
    <div
      className={`w-full ${
        type === "hidden" || type === "file" ? "hidden" : ""
      }`}
    >
      {label && (
        <label
          htmlFor={id}
          className={`block mb-2 text-[18px] text-black font-medium ${labelColor}`}
        >
          {label} {isRequired && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="flex w-full items-center relative">
        <input
          ref={reference}
          type={checkType}
          max={max}
          name={name}
          onBlur={onBlur}
          id={id}
          accept={accept}
          required={isRequired}
          disabled={isDisabled}
          maxLength={maxLength}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${textColor} focus:ring-0  outline-0 h-12 ${padding} w-full disabled:opacity-50 ${background} ${borderRadius} placeholder:text-placeholder`}
        />
        {icon && (
          <FontAwesomeIcon
            {...iconProps}
            onClick={
              type === "password"
                ? () => setIsPasswordVisible(!isPasswordVisible)
                : null
            }
            icon={icon}
            className={`${
              iconProps?.className || ""
            } absolute right-3 cursor-pointer text-black`}
          />
        )}
      </div>
      {error && <TextError classes="mt-2" text={errorText} />}
    </div>
  );
};

export default InputPlain;
