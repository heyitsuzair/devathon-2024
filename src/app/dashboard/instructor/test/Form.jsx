"use client";

import React from "react";
import { generateGridForm, generateUUID } from "@/utils";
import { getIn, useFormik } from "formik";
import { InstructorSignupSchema, TestsSchema } from "@/validationSchema";
import { createInstructor, createTest } from "@/actions";
import { useToast } from "@/hooks";
import {
  ButtonIconned,
  ButtonPlain,
  Flex,
  Grid,
  InputPlain,
  ShadowBox,
  TextXl,
} from "@/components";
import { questionsCategories } from "@/config";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

const TestForm = ({
  setIsLoginModalOpen = null,
  setIsSignupModalOpen = null,
}) => {
  const initialValues = {
    test_name: "",
    category: "",
    image: "",
    price: "",
    questions: [
      {
        id: generateUUID(),
        options: [""],
        correct_option: "",
        question: "",
      },
    ],
  };

  const { showErrorMessage, showSuccessMessage } = useToast();

  const onSubmit = async (values, { resetForm }) => {
    // const questionsMapped = questions.map((question) => {
    //   return {
    //     options: question.options,
    //     correct_option: question.correct_option,
    //     question: question.question,
    //   };
    // });
    const obj = {
      tests: {
        test_name: values.test_name,
        category: values.category,
        image: values.image,
        price: values.price,
      },
      questions: values.questions,
    };
    const { data, success } = await createTest(obj);

    if (!success) return showErrorMessage(data);
    else {
      showSuccessMessage(data);
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
    setFieldValue,
    setFieldTouched,
  } = useFormik({
    initialValues,
    validationSchema: TestsSchema,
    onSubmit,
  });

  // Add a new question
  const addQuestion = () => {
    setFieldValue("questions", [
      ...values.questions,
      {
        id: generateUUID(),
        options: [""],
        correct_option: "",
        question: "",
      },
    ]);
  };

  // Remove a question by index
  const removeQuestion = (index) => {
    const updatedQuestions = [...values.questions];
    updatedQuestions.splice(index, 1);
    setFieldValue("questions", updatedQuestions);
  };

  // Add option to a specific question
  const addOption = (questionIndex) => {
    const updatedQuestions = [...values.questions];
    updatedQuestions[questionIndex].options.push("");
    setFieldValue("questions", updatedQuestions);
  };

  // Remove option from a specific question
  const removeOption = (questionIndex, optionIndex) => {
    const updatedQuestions = [...values.questions];
    updatedQuestions[questionIndex].options.splice(optionIndex, 1);
    setFieldValue("questions", updatedQuestions);
  };

  // Handle option value change
  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...values.questions];
    updatedQuestions[questionIndex].options[optionIndex] = value;
    setFieldValue("questions", updatedQuestions);
  };

  // Select correct option for a specific question
  const selectCorrectOption = (questionIndex, option) => {
    const updatedQuestions = [...values.questions];
    updatedQuestions[questionIndex].correct_option = option;
    setFieldValue("questions", updatedQuestions);
  };

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
    {
      placeholder: "Price",
      isRequired: true,
      type: "number",
    },
    {
      placeholder: "Image",
      isRequired: true,
      type: "file",
    },
  ];

  return (
    <ShadowBox>
      <TextXl text="Create Test" classes="font-semibold mb-5" />
      {/* Personal Info Fields */}
      {generateGridForm(
        formFields,
        handleChange,
        handleBlur,
        errors,
        touched,
        values,
        "gap-4 mt-5",
        setFieldValue,
        setFieldTouched
      )}

      {/* Questions Management */}
      {values.questions.map((question, questionIndex) => (
        <div key={question.id} className="mt-5 border p-4 rounded bg-gray-50">
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-semibold">
              Question {questionIndex + 1}
            </h4>
            {values.questions.length > 1 && (
              <button
                type="button"
                className="text-red-500"
                onClick={() => removeQuestion(questionIndex)}
              >
                Remove
              </button>
            )}
          </div>

          <InputPlain
            name={`questions[${questionIndex}].question`}
            value={question.question}
            placeholder="Enter your question"
            onChange={handleChange}
            onBlur={handleBlur}
            isRequired={true}
            error={
              getIn(touched, `questions[${questionIndex}].question`) &&
              getIn(errors, `questions[${questionIndex}].question`)
            }
            errorText={getIn(errors, `questions[${questionIndex}].question`)}
          />

          {/* Options */}
          {question.options.map((option, optionIndex) => (
            <Grid key={optionIndex} classes="mt-2">
              <div className="col-span-12 lg:col-span-10">
                <InputPlain
                  value={option}
                  placeholder={`Option ${optionIndex + 1}`}
                  onChange={(e) =>
                    handleOptionChange(
                      questionIndex,
                      optionIndex,
                      e.target.value
                    )
                  }
                  error={
                    getIn(
                      touched,
                      `questions[${questionIndex}].options[${optionIndex}]`
                    ) &&
                    getIn(
                      errors,
                      `questions[${questionIndex}].options[${optionIndex}]`
                    )
                  }
                  errorText={getIn(
                    errors,
                    `questions[${questionIndex}].options[${optionIndex}]`
                  )}
                />
              </div>
              <div className="col-span-3 lg:col-span-1">
                <button
                  type="button"
                  className="text-green-500 ml-2"
                  onClick={() => selectCorrectOption(questionIndex, option)}
                >
                  {question.correct_option === option ? "Correct" : "Select"}
                </button>
              </div>
              <div className="col-span-3 lg:col-span-1">
                {question.options.length > 1 && (
                  <button
                    type="button"
                    className="text-red-500 ml-2"
                    onClick={() => removeOption(questionIndex, optionIndex)}
                  >
                    Remove
                  </button>
                )}
              </div>
            </Grid>
          ))}

          <ButtonPlain
            text={"Add Option"}
            borderRadius="rounded-lg"
            classes="mt-4"
            onClick={() => addOption(questionIndex)}
          />
        </div>
      ))}

      <ButtonIconned
        icon={faAdd}
        iconColor="text-white"
        text={"Add Question"}
        borderRadius="rounded-lg"
        width="w-40"
        classes="mt-4"
        onClick={addQuestion}
      />

      {/* Form Actions */}
      <ButtonPlain
        text="Submit"
        onClick={handleSubmit}
        isLoading={isSubmitting}
        classes="mt-4"
        isRounded
      />
    </ShadowBox>
  );
};

export default TestForm;
