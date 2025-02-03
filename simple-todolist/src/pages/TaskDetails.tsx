import { useNavigate, useParams } from 'react-router-dom'
import { CheckCircle, ChevronLeft, Edit, XCircle } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'react-toastify'

interface Task {
  id: number
  title: string
  description: string
  isCompleted: boolean
}

const TaskDetails = () => {
  const { taskId } = useParams()
  const navigate = useNavigate()
  const parsedTaskId = taskId ? parseInt(taskId, 10) : null

  const localTask = localStorage.getItem('tasks')
  const tasks: Task[] = localTask ? JSON.parse(localTask) : []
  const task = tasks.find(t => t.id === parsedTaskId)

  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(task?.title || '')
  const [editedDescription, setEditedDescription] = useState(
    task?.description || ''
  )
  const [editedIsCompleted, setEditedIsCompleted] = useState(
    task?.isCompleted || false
  )

  const handleSave = () => {
    if (!editedTitle.trim() || !editedDescription.trim()) {
      toast.error('Please fill in all fields', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      })
      return
    }

    const updatedTasks = tasks.map(t =>
      t.id === task?.id
        ? {
            ...t,
            title: editedTitle,
            description: editedDescription,
            isCompleted: editedIsCompleted
          }
        : t
    )

    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
    setIsEditing(false)

    toast.success('Changes saved successfully!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    })
  }

  if (!task) {
    return <div className='text-center text-red-500'>Task not found!</div>
  }

  return (
    <div className='w-screen h-screen bg-slate-500 flex justify-center items-center'>
      <div className='w-[500px] p-6 bg-slate-200 rounded-md shadow-lg space-y-4'>
        <div className='flex items-center justify-between'>
          <button
            className='bg-slate-400 rounded-md p-2 hover:bg-slate-600'
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className='text-white' size={20} />
          </button>
          <h1 className='text-2xl font-bold text-center text-slate-800'>
            Task Details
          </h1>
          <button
            className='bg-slate-400 rounded-md p-2 hover:bg-slate-600 text-white hover:cursor-pointer'
            onClick={() => setIsEditing(!isEditing)}
          >
            <Edit size={20} />
          </button>
        </div>
        <div className='flex items-center gap-2'>
          <p className='font-medium text-slate-700'>Title:</p>
          {isEditing ? (
            <input
              type='text'
              value={editedTitle}
              onChange={e => setEditedTitle(e.target.value)}
              className='border focus:outline-none focus:ring-2 focus:ring-slate-500 transition-all border-slate-400 px-2 py-1 rounded-md w-full'
            />
          ) : (
            <p className='text-slate-600'>{task.title}</p>
          )}
        </div>
        <div className='flex items-center gap-2'>
          <p className='font-medium text-slate-700'>Description:</p>
          {isEditing ? (
            <input
              value={editedDescription}
              onChange={e => setEditedDescription(e.target.value)}
              className='border focus:outline-none focus:ring-2 focus:ring-slate-500 transition-all border-slate-400 px-2 py-1 rounded-md w-full resize-none'
            />
          ) : (
            <p className='text-slate-600'>{task.description}</p>
          )}
        </div>
        <div className='flex items-center gap-2'>
          <p className='font-medium text-slate-700'>Status:</p>
          {isEditing ? (
            <label className='flex items-center gap-2'>
              <input
                type='checkbox'
                checked={editedIsCompleted}
                onChange={e => setEditedIsCompleted(e.target.checked)}
                className='rounded-md'
              />
              <span>{editedIsCompleted ? 'Completed' : 'Not Completed'}</span>
            </label>
          ) : (
            <>
              {task.isCompleted ? (
                <>
                  <CheckCircle className='text-green-600' size={20} />
                  <p className='text-green-600'>Completed</p>
                </>
              ) : (
                <>
                  <XCircle className='text-red-600' size={20} />
                  <p className='text-red-600'>Not Completed</p>
                </>
              )}
            </>
          )}
        </div>

        {isEditing && (
          <button
            className='bg-slate-500 text-white px-4 py-2 rounded-md hover:bg-slate-600 w-full'
            onClick={handleSave}
          >
            Save Changes
          </button>
        )}
      </div>
    </div>
  )
}

export default TaskDetails
