"use client";

import React, { useState } from "react";
import { TextError } from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const SelectPlain = ({
  id,
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
  borderColor = "border-solid-gray",
  labelColor = "text-heading",
  padding = "px-4",
  options = [],
}) => {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className={`block text-black mb-2 text-[18px] font-medium ${labelColor}`}
        >
          {label} {isRequired && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="flex w-full items-center relative">
        <select
          ref={reference}
          max={max}
          name={name}
          onBlur={onBlur}
          id={id}
          required={isRequired}
          disabled={isDisabled}
          maxLength={maxLength}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`appearance-none ${textColor} border ${borderColor} focus:ring-0 outline-none h-12 w-full disabled:opacity-50 ${background} ${borderRadius} ${padding}`}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-gray-700">
          <FontAwesomeIcon className={textColor} icon={faChevronDown} />
        </div>

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
            } absolute right-3 cursor-pointer`}
          />
        )}
      </div>
      {error && <TextError classes="mt-2" text={errorText} />}
    </div>
  );
};

export default SelectPlain;
