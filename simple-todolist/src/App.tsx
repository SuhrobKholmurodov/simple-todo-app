import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home'
import TaskDetails from './pages/TaskDetails'
import NotFound from './pages/NotFound'

const App = () => {
  const router = createBrowserRouter([
    {
      index: true,
      element: <Home />
    },
    {
      path: '/tasks/:taskId',
      element: <TaskDetails />
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
