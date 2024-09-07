"use client"
import React, { useState } from 'react'
import Input from './Input'
import { SelectPlain } from '../inputs';
import { questionsCategories } from '@/config';

const AddTest = () => {
    const [testName, setTestName] = useState('');
    const [question, setQuestion] = useState('');
    const [price, setPrice] = useState('');
    const [testType, setTestType] = useState('');
    const [ageLevel, setAgeLevel] = useState('');

    const handleInputChange = (e, setter) => {
        setter(e.target.value);
    }

    const handleTypeChange = (e) => {
        setTestType(e.target.value);
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto">
            <h2 className="text-xl font-bold text-yellow-600 mb-4">Create New Test</h2>

            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Select Test Type</label>
                <SelectPlain options={questionsCategories} onChange={handleTypeChange} className="border-2 border-yellow-500 rounded-md p-2 w-full"/>
            </div>

            <Input placeholder="Enter your test name" onChange={(e) => handleInputChange(e, setTestName)} label="Test Name" className="mb-4"/>
            <Input placeholder="Enter number of questions" onChange={(e) => handleInputChange(e, setQuestion)} label="Number of Questions" className="mb-4"/>
            <Input placeholder="Price of the test" onChange={(e) => handleInputChange(e, setPrice)} label="Price (in Rs)" className="mb-4"/>
            <Input placeholder="Age Level" onChange={(e) => handleInputChange(e, setAgeLevel)} label="Age Level" className="mb-4"/>

            <button className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 w-full">
                Save Test
            </button>
        </div>
    );
}

export default AddTest;
