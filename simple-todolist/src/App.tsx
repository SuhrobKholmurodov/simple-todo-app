import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import TaskPages from './pages/TaskPages'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const App = () => {
  const router = createBrowserRouter([
    {
      index: true,
      element: <Home />
    },
    {
      path: '/tasks',
      element: <TaskPages />
    }, 
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
