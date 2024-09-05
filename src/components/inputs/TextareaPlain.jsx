"use client";

import React from "react";
import { TextError } from "../index";

const InputPlain = ({
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
  borderRadius = "rounded-lg",
  textColor = "text-black",
  labelColor = "text-heading",
  padding = "p-4",
  rows = 10,
}) => {
  return (
    <div className={`w-full`}>
      {label && (
        <label
          htmlFor={id}
          className={`block text-black mb-2 text-[18px] font-medium ${labelColor}`}
        >
          {label} {isRequired && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="flex w-full items-center relative">
        <textarea
          ref={reference}
          max={max}
          name={name}
          onBlur={onBlur}
          id={id}
          rows={rows}
          required={isRequired}
          disabled={isDisabled}
          maxLength={maxLength}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${textColor} focus:ring-0  outline-0 ${padding} w-full disabled:opacity-50 ${background} ${borderRadius} placeholder:text-placeholder`}
        />
      </div>
      {error && <TextError classes="mt-2" text={errorText} />}
    </div>
  );
};

export default InputPlain;
