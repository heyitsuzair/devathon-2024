import React from "react";
import { ButtonPlain } from "../buttons";
import { TextXl } from "../text";
import { generateGridForm } from "@/utils";
import Flex from "../flex/Flex";
import { useFormik } from "formik";
import { StudentSignupSchema } from "@/validationSchema";
import { createStudent } from "@/actions";
import { useToast } from "@/hooks";

const initialValues = {
  first_name: "",
  last_name: "",
  email_address: "",
  password: "",
  phone_number: "",
};

const StudentSignup = ({
  setIsLoginModalOpen = null,
  setIsSignupModalOpen = null,
}) => {
  const { showErrorMessage, showSuccessMessage } = useToast();

  const onSubmit = async (values, { resetForm }) => {
    const { data, success } = await createStudent(values);

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
  } = useFormik({
    initialValues,
    validationSchema: StudentSignupSchema,
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
      placeholder: "Phone Number",
      isRequired: true,
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
      <TextXl text="Student Registration" classes="font-semibold my-5" />
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

export default StudentSignup;
