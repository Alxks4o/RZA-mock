import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import Register from './routes/register'
import Login from './routes/login'
import Homepage from './routes/homepage'
import Logout from './routes/logout'
import BookingsZoo from './routes/bookingsZoo'
import BookingsHotel from './routes/bookingsHotel'
import Bookings from './routes/bookings'
import About from './routes/about'


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
  },
  {
    path: '/logout',
    element: <Logout/>
  },
  {
    path:'/bookingszoo',
    element: <BookingsZoo/>
  },
  {
    path: '/bookingshotel',
    element: <BookingsHotel/>
  },
  {
    path:'/viewbookings',
    element: <Bookings/>
  },
  {
    path:'/aboutus',
    element: <About/>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)