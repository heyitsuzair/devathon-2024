import React from "react";
import { ButtonPlain } from "../buttons";
import { TextXl } from "../text";
import { generateGridForm, generateUUID } from "@/utils";
import Flex from "../flex/Flex";
import { useFormik } from "formik";
import { InstructorSignupSchema } from "@/validationSchema";
import { createInstructor, registerInstructor } from "@/actions";
import { useToast } from "@/hooks";

const InstructorSignup = ({
  setIsLoginModalOpen = null,
  setIsSignupModalOpen = null,
}) => {
  const initialValues = {
    first_name: "",
    last_name: "",
    email_address: "",
    password: "",
    phone_number: "",
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
      placeholder: "First Name",
      isRequired: true,
    },
    {
      placeholder: "Last Name",
      isRequired: true,
    },
    {
      placeholder: "Email Address",
      isRequired: true,
    },
    {
      placeholder: "Password",
      isRequired: true,
      type: "password",
    },
    {
      placeholder: "Phone No (With WhatsApp)",
      isRequired: true,
      name: "phone_number",
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
    <div>
      <TextXl text="Instructor Registration" classes="font-semibold my-5" />
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
    </div>
  );
};

export default InstructorSignup;
