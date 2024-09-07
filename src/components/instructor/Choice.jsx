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

  const handleCorrectChoiceChange = (index) => {
    setCorrectChoiceIndex(index);
  };

  return (
    <div>
      
      <Input
        placeholder="Enter your choice"
        value={currentChoice}
        onChange={handleChoiceChange}
        label="Choices"
      />

      <button onClick={addChoice}>Add Choice</button>
      <ul>
        {choices.map((choice, index) => (
          <li key={index}>
            {choice} 
            <input 
              type="radio" 
              name="correctChoice" 
              checked={correctChoiceIndex === index} 
              onChange={() => handleCorrectChoiceChange(index)} 
            /> Correct
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Choice;
