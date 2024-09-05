import * as Yup from "yup";

// Define the validation schema using Yup
export default Yup.object().shape({
  name: Yup.string()
    .min(1, "Name is required")
    .max(100, "Name can't be longer than 100 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  subject: Yup.string()
    .min(1, "Subject is required")
    .max(100, "Subject can't be longer than 100 characters")
    .required("Subject is required"),
  message: Yup.string()
    .min(1, "Message is required")
    .max(500, "Message can't be longer than 500 characters")
    .required("Message is required"),
});
