import React from "react";
import { ButtonPlain } from "../buttons";
import { TextXl } from "../text";
import { generateGridForm } from "@/utils";
import { useFormik } from "formik";
import { InstructorSignupSchema } from "@/validationSchema";
import { registerInstructor } from "@/actions";
import { useToast } from "@/hooks";

const MFAModal = ({ setIsMFAModalOpen = null }) => {
  const initialValues = {
    otp: "",
  };

  const { showErrorMessage, showSuccessMessage } = useToast();

  const onSubmit = async (values, { resetForm }) => {
    const { data, success } = await registerInstructor(values);

    if (!success) return showErrorMessage(data);
    else {
      showSuccessMessage(data);
      resetForm();
      setIsMFAModalOpen(false);
    }
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: InstructorSignupSchema,
    onSubmit,
  });

  const formFields = [
    {
      placeholder: "OTP",
      isRequired: true,
      span: "col-span-12",
    },
  ];

  return (
    <div>
      <TextXl text="MFA" classes="font-semibold mb-5" />
      {generateGridForm(
        formFields,
        handleChange,
        handleBlur,
        errors,
        touched,
        values
      )}

      <ButtonPlain
        text="Submit"
        onClick={handleSubmit}
        isLoading={isSubmitting}
        classes="mt-4"
        isRounded
      />
    </div>
  );
};

export default MFAModal;
