import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import Register from './routes/register'
import Login from './routes/login'
import Homepage from './routes/homepage'



const router = createBrowserRouter([
  {
    path:'/',
    element:<Homepage/>
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path: '/login',
    element: <Login/>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
