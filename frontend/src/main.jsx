import Cookies from 'js-cookie'
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

const userid = Cookies.get('token');



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

const routerNoUser = createBrowserRouter([
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

if(userid == undefined){
  
    createRoot(document.getElementById('root')).render(
      <StrictMode>
        <RouterProvider router={routerNoUser}/>
      </StrictMode>,
  )}else{
    createRoot(document.getElementById('root')).render(
      <StrictMode>
        <RouterProvider router={router}/>
      </StrictMode>,
    )
  
}

