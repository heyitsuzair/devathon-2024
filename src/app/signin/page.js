"use client";

import React, { useContext } from "react";
import { ButtonPlain, InputPlain } from '@/components';
import { images } from '@/config';
import Image from 'next/image';
import { useFormik } from "formik";
import { AdminLoginSchema } from "@/validationSchema"; 
import { useToast } from "@/hooks";
import { loginAdmin } from "@/actions";
import { AuthContext } from "@/context";


const AdminLogin = () => {
  const { showErrorMessage, showSuccessMessage } = useToast();
  const { setUser } = useContext(AuthContext);

  const initialValues = {
    email_adress: "",
    password: "",
  };

  const onSubmit = async (values, { resetForm }) => {
    const { data, success, payload } = await loginAdmin(values);

    if (!success) return showErrorMessage(data);
    else {
      showSuccessMessage(data);
      setUser(payload);
      resetForm();
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
    validationSchema: AdminLoginSchema,
    onSubmit,
  });

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <div className="flex justify-center mb-3">
            <Image src={images.logo} className="rounded-full" width={100} height={100} alt="Admin Logo" />
          </div>
          <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div className="px-5 py-7">
              <div className="px-3 py-2 mt-1 mb-3 text-sm w-full">
                <InputPlain
                  type="email"
                  label="Email:"
                  name="email_adress"
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && errors.email ? errors.email : null}
                />
              </div>
              <div className="px-3 py-2 mt-1 mb-5 text-sm w-full">
                <InputPlain
                  type="password"
                  label="Password:"
                  name="password"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && errors.password ? errors.password : null}
                />
              </div>
              <div className="px-3 py-2 mt-1 mb-5 text-sm w-full">
                <ButtonPlain
                  type="submit"
                  text="Sign In"
                  onClick={handleSubmit}
                  isLoading={isSubmitting}
                  classes="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
