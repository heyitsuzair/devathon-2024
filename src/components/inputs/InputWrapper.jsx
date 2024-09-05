import React from "react";
import { InputPlain, TextareaPlain } from ".";
import { getNameByPlaceholder } from "@/utils";

const InputWrapper = ({
  onChange,
  onBlur,
  placeholder,
  label,
  name,
  id,
  value,
  type,
  isRequired,
  isDisabled,
  errors,
  touched,
  values,
}) => {
  if (!name) {
    name = getNameByPlaceholder(placeholder);
  }
  if (!label) {
    label = placeholder;
  }
  if (!id) {
    id = name;
  }
  if (type === "textarea") {
    return (
      <TextareaPlain
        placeholder={placeholder}
        label={label}
        name={name}
        id={name}
        isDisabled={isDisabled}
        isRequired={isRequired}
        value={values[name]}
        onChange={onChange}
        onBlur={onBlur}
        error={touched[name] && errors[name]}
        errorText={errors[name]}
      />
    );
  } else {
    return (
      <InputPlain
        placeholder={placeholder}
        label={label}
        name={name}
        id={name}
        isDisabled={isDisabled}
        isRequired={isRequired}
        value={values[name]}
        onChange={onChange}
        onBlur={onBlur}
        error={touched[name] && errors[name]}
        errorText={errors[name]}
      />
    );
  }
};

export default InputWrapper;
