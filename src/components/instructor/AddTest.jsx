"use client"
import React, { useState } from 'react'
import Input from './Input'
import { SelectPlain } from '../inputs';
import { questionsCategories } from '@/config';

const AddTest = () => {
    const [testName, setTestName] = useState();
    const [question, setquestion] = useState();
    const [price, setprice] = useState();
    const [testType, setTestType] = useState();
    const handleInputChange = (e)=>{
        setTestName(e.target.value)
        setquestion(e.target.value)
        setprice(e.target.value)
    }
    const handleTypeChange = (e) => {
        setTestType(e.target.value)
    }
    // if(testName || question || price || testType === ""){
    //     return <p>Please fill all the fields</p>
    // }
    // server Acttion to add the test withe state values

  return (
    <div>
        <div>
            Select the test type
            <SelectPlain options={questionsCategories} onChange={handleTypeChange} onClick/>
        </div>
        <Input placeholder={"Enter your test name"} onChange={handleInputChange} label={"Test Name"}/>
        <Input placeholder={"Enter number of question"} onChange={handleInputChange} label={"No of Question"}/>
        <Input placeholder={"price of the test"} onChange={handleInputChange} label={"Price In Rs"}/>
    </div>
  )
}

export default AddTest