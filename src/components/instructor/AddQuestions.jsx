import React, { useState } from 'react';
import Input from './Input';
import Choice from './Choice';

const AddQuestions = () => {
  const [question, setQuestion] = useState(''); // Store the current question text
  const [questions, setQuestions] = useState([]); // Store all questions
  const [choices, setChoices] = useState([]); // Store the choices for the current question
  const [correctChoiceIndex, setCorrectChoiceIndex] = useState(null); // Store the index of the correct choice

  // Handle the input for the question text
  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  // Add the current question with its choices and correct answer to the questions array
  const addQuestion = () => {
    if (question.trim() && choices.length > 0 && correctChoiceIndex !== null) {
      setQuestions([...questions, { questionText: question, choices, correctChoice: correctChoiceIndex }]);
      setQuestion(''); 
      setChoices([]); 
      setCorrectChoiceIndex(null);
    }
  };

  return (
    <div>
      <Input
        placeholder="Enter your question"
        value={question}
        onChange={handleInputChange}
        label="Question"
      />

      
      <Choice choices={choices} setChoices={setChoices} correctChoiceIndex={correctChoiceIndex} setCorrectChoiceIndex={setCorrectChoiceIndex} />

      
      <button onClick={addQuestion}>Add Question</button>

      
      <ul>
        {questions.map((q, index) => (
          <li key={index}>
            <strong>{q.questionText}</strong>
            <ul>
              {q.choices.map((choice, idx) => (
                <li key={idx}>
                  {choice} {q.correctChoice === idx ? '(Correct Answer)' : ''}
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
