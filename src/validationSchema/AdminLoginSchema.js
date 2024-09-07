import * as Yup from "yup";

export default Yup.object().shape({
  email_adress: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required"),
});
