import { ButtonIconned } from '@/components'
import AddTest from '@/components/instructor/AddTest'
import React from 'react'

const page = () => {
  return (
    <div>
        <ButtonIconned classes='rounded-lg' text={"Add test"}/>
        <AddTest/>
    </div>
  )
}

export default page