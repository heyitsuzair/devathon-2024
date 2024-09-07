"use client";

import { constants } from "@/config";
import { useToast } from "@/hooks";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const questionsData = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correct: "Paris",
  },
  {
    id: 2,
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correct: "4",
  },
  {
    id: 3,
    question: "Who wrote 'Hamlet'?",
    options: ["Shakespeare", "Tolstoy", "Hemingway", "Dickens"],
    correct: "Shakespeare",
  },
];

const TestPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const searchParams = useSearchParams();

  const { showSuccessMessage, showErrorMessage } = useToast();

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [currentQuestionIndex]: answer });
  };

  const handleSubmit = () => {
    const score = questionsData.reduce((acc, question, index) => {
      return answers[index] === question.correct ? acc + 1 : acc;
    }, 0);
    setScore(score);
  };

  const handleSkip = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleJump = (index) => {
    setCurrentQuestionIndex(index);
  };

  useEffect(() => {
    if (searchParams.get("success") === "false")
      showErrorMessage(constants.ERROR.REQUEST_CANCELED);
    if (searchParams.get("success") === "true")
      showSuccessMessage(constants.SUCCESS.COURSE_BOUGHT);
  }, []);

  if (score !== null) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-theme-secondary to-theme-500 text-white">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in-down">
          Your Score
        </h1>
        <div className="text-7xl font-extrabold animate-scale-in">
          {score} / {questionsData.length}
        </div>
        <button
          onClick={() => window.location.reload()}
          className="mt-8 px-6 py-3 bg-white text-theme-500 rounded-full font-semibold hover:bg-opacity-90 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Retry Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-theme-secondary to-theme-500 text-white p-4">
      <h1 className="text-4xl font-bold mb-8 animate-fade-in-down">
        Test Questions
      </h1>
      <div className="bg-white text-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md animate-fade-in-up">
        <h2 className="text-2xl font-semibold mb-4">
          Question {currentQuestionIndex + 1}:
        </h2>
        <p className="text-lg mb-6">
          {questionsData[currentQuestionIndex].question}
        </p>
        <ul className="space-y-3">
          {questionsData[currentQuestionIndex].options.map((option, i) => (
            <li key={i}>
              <label className="flex items-center space-x-2 cursor-pointer p-2 rounded-md hover:bg-gray-100 transition duration-200">
                <input
                  type="radio"
                  name={`question-${currentQuestionIndex}`}
                  value={option}
                  checked={answers[currentQuestionIndex] === option}
                  onChange={() => handleAnswer(option)}
                  className="form-radio h-5 w-5 text-theme-500"
                />
                <span className="text-lg">{option}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex space-x-4 mt-6">
        <button
          onClick={handleSubmit}
          className="bg-theme-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-theme-600 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Submit
        </button>
        <button
          onClick={handleSkip}
          className="bg-gray-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Skip
        </button>
      </div>

      <div className="flex flex-wrap justify-center space-x-2 mt-6">
        {questionsData.map((_, index) => (
          <button
            key={index}
            onClick={() => handleJump(index)}
            className={`w-10 h-10 rounded-full font-semibold ${
              currentQuestionIndex === index
                ? "bg-theme-500 text-white"
                : "bg-white text-theme-500 hover:bg-purple-100"
            } transition duration-300 ease-in-out transform hover:scale-110`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="mt-6 text-center">
        <p className="text-lg mb-2">
          Question {currentQuestionIndex + 1} of {questionsData.length}
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          {currentQuestionIndex > 0 && (
            <button
              onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
              className="bg-theme-secondary text-white px-4 py-2 rounded-full font-semibold hover:bg-theme-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Previous
            </button>
          )}
          {currentQuestionIndex < questionsData.length - 1 && (
            <button
              onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
              className="bg-theme-secondary text-white px-4 py-2 rounded-full font-semibold hover:bg-theme-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestPage;
