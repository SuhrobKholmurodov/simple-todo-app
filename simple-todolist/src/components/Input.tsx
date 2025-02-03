import React from 'react'

interface InputProps {
  type: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ type, placeholder, value, onChange }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className='w-full px-4 py-2 border border-slate-400 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 transition-all'
    />
  )
}
