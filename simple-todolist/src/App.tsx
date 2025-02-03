import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import TaskPages from './pages/TaskPages'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const router = createBrowserRouter([
    {
      index: true,
      element: <Home />
    },
    {
      path: '/tasks/:taskId',
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
      <ToastContainer />
    </div>
  )
}

export default App
