"use client"
import React, { useState } from 'react'
import Input from './Input'
import { SelectPlain } from '../inputs';

const AddTest = () => {
    const [testName, setTestName] = useState();
    const [question, setquestion] = useState();
    const [price, setprice] = useState();
    const options = [{
        value: "NTS",
        text: "Multiple Choice"
    },
    {
        value: "multiple-choice",
        text: "Multiple Choice"
    },
    {
        value: "multiple-choice",
        text: "Multiple Choice"
    },];
    const handleInputChange = (e)=>{
        setTestName(e.target.value)
    }
  return (
    <div>
        <div>
            Select the test type
            <SelectPlain options={options}/>
        </div>
        <Input placeholder={"Enter your test name"} onChange={handleInputChange} label={"Test Name"}/>
        <Input placeholder={"Enter number of question"} onChange={handleInputChange} label={"No of Question"}/>
        <Input placeholder={"price of the test"} onChange={handleInputChange} label={"Price In Rs"}/>

    
    </div>
  )
}

export default AddTest