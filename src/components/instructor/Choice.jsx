import React, { useState } from 'react';
import Input from './Input';

const Choice = ({ choices, setChoices, correctChoiceIndex, setCorrectChoiceIndex }) => {
  const [currentChoice, setCurrentChoice] = useState('');

  const handleChoiceChange = (e) => {
    setCurrentChoice(e.target.value);
  };

  const addChoice = () => {
    if (currentChoice.trim()) {
      setChoices([...choices, currentChoice]);
      setCurrentChoice('');
    }
  };

  return (
    <div className="mt-4">
      <Input 
        placeholder="Enter your choice" 
        value={currentChoice}
        onChange={handleChoiceChange} 
        label="Choices"
        className="mb-4"
      />

      <button onClick={addChoice} className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600">
        Add Choice
      </button>

      <div className="mt-4">
        <label className="block text-gray-700 mb-2">Select Correct Choice</label>
        <select 
          value={correctChoiceIndex} 
          onChange={(e) => setCorrectChoiceIndex(Number(e.target.value))} 
          className="border-2 border-yellow-500 rounded-md p-2 w-full"
        >
          <option value="" disabled>Select Correct Choice</option>
          {choices.map((choice, idx) => (
            <option key={idx} value={idx}>
              {choice}
            </option>
          ))}
        </select>
      </div>

      <ul className="mt-4 list-disc ml-6">
        {choices.map((choice, index) => (
          <li key={index} className={correctChoiceIndex === index ? 'text-green-600' : ''}>
            {choice} {correctChoiceIndex === index && '(Correct Answer)'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Choice;
