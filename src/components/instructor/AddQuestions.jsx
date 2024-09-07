"use client"
import React, { useState } from 'react';
import Input from './Input';
import Choice from './Choice';

const AddQuestions = () => {
  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState([]);
  const [choices, setChoices] = useState([]);
  const [correctChoiceIndex, setCorrectChoiceIndex] = useState(null);

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const addQuestion = () => {
    if (question.trim() && choices.length > 0 && correctChoiceIndex !== null) {
      setQuestions([...questions, { questionText: question, choices, correctChoice: correctChoiceIndex }]);
      setQuestion(''); 
      setChoices([]); 
      setCorrectChoiceIndex(null);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto mt-6">
      <h2 className="text-xl font-bold text-yellow-600 mb-4">Add Question</h2>

      <Input 
        placeholder="Enter your question"
        value={question}
        onChange={handleInputChange}
        label="Question"
        className="mb-4"
      />

      <Choice 
        choices={choices} 
        setChoices={setChoices} 
        correctChoiceIndex={correctChoiceIndex} 
        setCorrectChoiceIndex={setCorrectChoiceIndex} 
      />

      <button onClick={addQuestion} className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 w-full mt-4">
        Add Question
      </button>

      <ul className="mt-6">
        {questions.map((q, index) => (
          <li key={index} className="mb-4">
            <strong className="text-yellow-600">{q.questionText}</strong>
            <ul className="list-disc ml-6">
              {q.choices.map((choice, idx) => (
                <li key={idx} className={q.correctChoice === idx ? 'text-green-600' : ''}>
                  {choice} {q.correctChoice === idx && '(Correct Answer)'}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddQuestions;
