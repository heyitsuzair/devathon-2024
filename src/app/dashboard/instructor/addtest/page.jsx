"use client"
import { ButtonIconned } from '@/components'
import AddQuestions from '@/components/instructor/AddQuestions'
import AddTest from '@/components/instructor/AddTest'
import React, { useState } from 'react'

const page = () => {
    const [showQuestionPortsl, setQuestitonPortal] = useState(false)
  return (
    <div>
        <AddTest/>
        <ButtonIconned classes='rounded-lg' text={"Add test"} onClick={()=>setQuestitonPortal(true)}/>
        {showQuestionPortsl ? <AddQuestions/>: ""}
    </div>
  )
}

export default page