import { useEffect, useState } from 'react'
import { AddTask, Tasks } from '../components'

interface Task {
  id: number
  title: string
  description: string
  isCompleted: boolean
}

function Home () {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem('tasks')
    return storedTasks ? JSON.parse(storedTasks) : []
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function onTaskClick (taskId: number) {
    const newTasks = tasks.map(task =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    )
    setTasks(newTasks)
  }

  function onDeleteTaskClick (taskId: number) {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }

  function onAddTaskSubmit (title: string, description: string) {
    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      isCompleted: false
    }
    setTasks([...tasks, newTask])
  }

  return (
    <div className='flex justify-center p-6'>
      <div className='w-[500px] space-y-4'>
        <p className='text-3xl text-slate-500 font-bold text-center'>
          Simple Todo App
        </p>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  )
}

export default Home
