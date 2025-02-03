import { useState } from 'react'
import { Input } from './Input'

interface AddTaskProps {
  onAddTaskSubmit: (title: string, description: string) => void
}

export const AddTask = ({ onAddTaskSubmit }: AddTaskProps) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  return (
    <div className='space-y-4 bg-gradient-to-br from-slate-200 to-slate-300 rounded-md shadow-lg p-6 flex flex-col gap-4'>
      <Input
        type='text'
        placeholder='Enter task title...'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <Input
        type='text'
        placeholder='Enter task description...'
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button
        className='bg-gradient-to-r from-slate-600 to-slate-700 text-white px-6 py-2 rounded-md font-medium hover:from-slate-700 hover:to-slate-800 transition-all duration-300'
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            alert('Please fill in all fields')
            return
          }
          onAddTaskSubmit(title, description)
          setTitle('')
          setDescription('')
        }}
      >
        Add Task
      </button>
    </div>
  )
}
