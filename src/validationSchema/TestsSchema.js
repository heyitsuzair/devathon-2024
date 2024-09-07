import * as Yup from "yup";

// Define the validation schema using Yup
export default Yup.object().shape({
  test_name: Yup.string().required("Test name is required"),
  category: Yup.string().required("Category is required"),
  price: Yup.number()
    .min(1, "Please enter valid price")
    .required("Price is required"),
  image: Yup.mixed().required("Image is required"),
  questions: Yup.array()
    .of(
      Yup.object().shape({
        id: Yup.string().required(),
        question: Yup.string().required("Question is required"),
        options: Yup.array(),
        correct_option: Yup.string().required("Correct option is required"),
      })
    )
    .min(1, "At least one question is required"),
});
