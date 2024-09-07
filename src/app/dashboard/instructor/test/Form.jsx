"use client";

import React from "react";
import { generateGridForm } from "@/utils";
import { useFormik } from "formik";
import { InstructorSignupSchema } from "@/validationSchema";
import { createInstructor } from "@/actions";
import { useToast } from "@/hooks";
import { ButtonPlain, Flex, FormBox, ShadowBox, TextXl } from "@/components";
import { questionsCategories } from "@/config";

const TestForm = ({
  setIsLoginModalOpen = null,
  setIsSignupModalOpen = null,
}) => {
  const initialValues = {
    first_name: "",
    last_name: "",
    email_address: "",
    password: "",
    phone_number: "",
    questions: [{}],
  };

  const { showErrorMessage, showSuccessMessage } = useToast();

  const onSubmit = async (values, { resetForm }) => {
    const { data, success } = await createInstructor(values);

    if (!success) return showErrorMessage(data);
    else {
      showSuccessMessage(data);
      resetForm();
      setIsSignupModalOpen(false);
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
      placeholder: "Test Name",
      isRequired: true,
    },
    {
      placeholder: "Category",
      isRequired: true,
      options: questionsCategories,
    },
  ];

  const handleClickLogin = () => {
    if (setIsLoginModalOpen) {
      setIsLoginModalOpen(true);
    }
    if (setIsLoginModalOpen) {
      setIsSignupModalOpen(false);
    }
  };

  return (
    <ShadowBox>
      <TextXl text="Create Test" classes="font-semibold mb-5" />
      {generateGridForm(
        formFields,
        handleChange,
        handleBlur,
        errors,
        touched,
        values
      )}

      <Flex
        flexDirection="flex-col md:flex-row"
        gap="md:gap-2"
        justify="justify-start"
        alignItems="items-start"
      >
        <ButtonPlain
          text="Register"
          onClick={handleSubmit}
          isLoading={isSubmitting}
          classes="mt-4"
          isRounded
        />

        <ButtonPlain
          text="Already Have An Account? Login"
          color="bg-inherit"
          width="w-68"
          justify="justify-start"
          colorText="text-black"
          onClick={handleClickLogin}
          padding="p-0"
          classes="md:mt-4"
        />
      </Flex>
    </ShadowBox>
  );
};

export default TestForm;
