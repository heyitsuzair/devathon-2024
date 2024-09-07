"use client"
import { ButtonIconned } from '@/components'
import { routes } from '@/config'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  const router = useRouter();
  return (
    <div>
        <InstructorDetails/>
        <ButtonIconned classes='rounded-lg' text={"Add test"} onClick={router.push(routes.dashboard.instructor.addtest)}/>
    </div>
  )
}

export default page