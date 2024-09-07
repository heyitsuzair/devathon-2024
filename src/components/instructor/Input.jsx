import React from 'react'

const Input = ({label, onChange, placeholder}) => {
  return (
    <div className=''>
        <label htmlFor="text" className='text-black'>{label}</label>
        <input type="text" onChange={onChange} className='p-2 rounded-lg border-2' placeholder={placeholder}/>
    </div>
  )
}

export default Input