import React, { useContext, useState } from "react";
import { InputPlain } from "../inputs";
import { ButtonPlain } from "../buttons";
import { TextXl } from "../text";
import Flex from "../flex/Flex";
import { useFormik } from "formik";
import { InstructorLoginSchema } from "@/validationSchema";
import { loginInstructor } from "@/actions";
import { useToast } from "@/hooks";
import { AuthContext } from "@/context";
import MFAModal from "./MFAModal";

const initialValues = {
  email_address: "",
  password: "",
};

const InstructorLogin = ({
  setIsLoginModalOpen = null,
  setIsSignupModalOpen = null,
  setIsMFAModalOpen,
}) => {
  const { setUser } = useContext(AuthContext);
  const { showErrorMessage, showSuccessMessage } = useToast();

  const handleClickCreateAccount = () => {
    if (setIsLoginModalOpen) {
      setIsLoginModalOpen(false);
    }
    if (setIsLoginModalOpen) {
      setIsSignupModalOpen(true);
    }
  };

  const onSubmit = async (values, { resetForm }) => {
    const { data, success, payload } = await loginInstructor(values);

    if (!success) return showErrorMessage(data);
    else {
      showSuccessMessage(data);
      setUser(payload);
      resetForm();
      setIsLoginModalOpen(false);
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
    validationSchema: InstructorLoginSchema,
    onSubmit,
  });

  return (
    <div>
      <TextXl text="Instructor Login" classes="font-semibold my-5" />
      <div className="flex flex-col gap-4">
        <InputPlain
          label="Email Address"
          value={values.email_address}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email_address && errors.email_address}
          errorText={errors.email_address}
          placeholder="abc@xyz.com"
          name="email_address"
          isRequired={true}
        />
        <InputPlain
          label="Password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && errors.password}
          errorText={errors.password}
          name="password"
          placeholder="*******"
          isRequired={true}
        />

        <Flex
          flexDirection="flex-col md:flex-row"
          gap="md:gap-2"
          justify="justify-start"
          alignItems="items-start"
        >
          <ButtonPlain
            text="Login"
            isLoading={isSubmitting}
            onClick={handleSubmit}
            isRounded
          />

          <ButtonPlain
            text="Create An Account"
            color="bg-inherit"
            width="w-40"
            colorText="text-black"
            onClick={handleClickCreateAccount}
          />
        </Flex>
      </div>
    </div>
  );
};

export default InstructorLogin;
