"use client";

import React, { useRef, useState } from "react";
import { TextError, TextLg, TextMd, ViewImageModal } from "../index";

const InputFile = ({
  id,
  name,
  onChange,
  label,
  value,
  onBlur,
  isRequired = false,
  isDisabled = false,
  background = "bg-gray-200",
  error = false,
  errorText = "",
  borderRadius = "rounded-lg",
  textColor = "text-black",
  labelColor = "text-heading",
  accept = "",
  multiple = false,
}) => {
  const ref = useRef();

  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const handleClick = () => {
    return ref.current.click();
  };
  return (
    <div className={`w-full`}>
      {value && accept === "image/*" && (
        <ViewImageModal
          src={value}
          isOpen={isViewModalOpen}
          setIsOpen={setIsViewModalOpen}
        />
      )}
      {label && (
        <label
          htmlFor={id}
          className={`block mb-2 text-black text-[18px] font-medium ${labelColor}`}
        >
          {label} {isRequired && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="flex w-full items-center relative">
        <div
          className={`${textColor} flex items-center justify-center h-12 w-full ${
            isDisabled
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100 cursor-pointer"
          } ${background} ${borderRadius}`}
          onClick={handleClick}
        >
          <TextLg text={value ? "Change File" : "Upload File"} />
        </div>
        <input
          ref={ref}
          type={"file"}
          name={name}
          onBlur={onBlur}
          multiple={multiple}
          id={id}
          accept={accept}
          required={isRequired}
          disabled={isDisabled}
          hidden
          // value={value}
          onChange={onChange}
        />
      </div>
      {value && (
        <div
          className="cursor-pointer"
          onClick={() => setIsViewModalOpen(true)}
        >
          <TextMd
            color="text-theme-500"
            text={"View File"}
            classes={"font-bold"}
          />
        </div>
      )}
      {error && <TextError classes="mt-2" text={errorText} />}
    </div>
  );
};

export default InputFile;
