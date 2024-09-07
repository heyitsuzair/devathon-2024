"use client"
import { ButtonIconned } from '@/components'
import AddQuestions from '@/components/instructor/AddQuestions'
import AddTest from '@/components/instructor/AddTest'
import { routes } from '@/config'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  const router = useRouter();
  return (
    <div>
        <ButtonIconned classes='rounded-lg' text={"Add test"} onClick={router.push(routes.dashboard.instructor.addtest)}/>
    </div>
  )
}

export default page