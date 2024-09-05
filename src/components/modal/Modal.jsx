"use client";

import { useEffect } from "react";
import { Flex } from "../flex";
import { ButtonPlain } from "../buttons";

const Modal = ({
  isOpen,
  onClose,
  children,
  showCancel = false,
  showSubmit = false,
  onSubmit = null,
  submitText = "Submit",
  isSubmitting = false,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div
      className={`${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-all ease-in-out fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-scroll`}
      onClick={() => onClose(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative p-4 w-11/12 lg:w-1/2 xl:w-1/3 bg-white rounded-lg shadow-lg pt-16 overflow-y-auto max-h-[41rem]"
      >
        <button
          onClick={() => onClose(false)}
          className="absolute top-2 right-2 bg-theme-500 hover:bg-theme-600 text-white w-7 h-7 lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-2xl lg:text-4xl"
        >
          &times;
        </button>
        {children}

        {(showCancel || showSubmit) && (
          <Flex classes="my-4">
            {showCancel && (
              <ButtonPlain
                text={"Cancel"}
                borderRadius="rounded-lg"
                width="w-full"
                color="bg-gray-100 hover:bg-gray-200"
                colorText="text-black"
                onClick={() => onClose(false)}
              />
            )}
            {showSubmit && (
              <ButtonPlain
                text={submitText}
                borderRadius="rounded-lg"
                width="w-full"
                onClick={onSubmit}
                isLoading={isSubmitting}
              />
            )}
          </Flex>
        )}
      </div>
    </div>
  );
};

export default Modal;
