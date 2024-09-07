import * as Yup from "yup";

// Define the validation schema using Yup
export default Yup.object().shape({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  email_address: Yup.string()
    .email("Please Enter Valid Email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password Must Be Atleast 6 characters")
    .required("Password is required"),
  phone_number: Yup.string().required("Phone number is required"),
});
