import { CheckIcon, ChevronRightIcon, TrashIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify' 

interface Task {
  id: number
  title: string
  description: string
  isCompleted: boolean
}

interface TasksProps {
  tasks: Task[]
  onTaskClick: (taskId: number) => void
  onDeleteTaskClick: (taskId: number) => void
}

export const Tasks = ({
  tasks,
  onTaskClick,
  onDeleteTaskClick
}: TasksProps) => {
  const navigate = useNavigate()

  const onSeeDetailsClick = (taskId: number) => {
    navigate(`/tasks/${taskId}`)
  }

  const handleDeleteTask = (taskId: number) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDeleteTaskClick(taskId) 

      toast.success('Task deleted successfully!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      })
    }
  }

  return (
    <>
      {tasks.length === 0 ? null : (
        <ul className='space-y-4 p-6 bg-slate-200 rounded-md shadow'>
          {tasks.map(task => (
            <li key={task.id} className='flex gap-2'>
              <button
                onClick={() => onTaskClick(task.id)}
                className={`justify-between flex items-center gap-2 w-full text-left bg-slate-400 text-white p-2 rounded-md ${
                  task.isCompleted && 'line-through'
                }`}
              >
                {task.title}
                {task.isCompleted ? (
                  <CheckIcon className='text-green-600' />
                ) : null}
              </button>

              <button
                onClick={() => onSeeDetailsClick(task.id)}
                className='bg-slate-400 p-2 text-white rounded-md'
              >
                <ChevronRightIcon />
              </button>

              <button
                className='bg-slate-400 p-2 text-white rounded-md'
                onClick={() => handleDeleteTask(task.id)} 
              >
                <TrashIcon />
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}