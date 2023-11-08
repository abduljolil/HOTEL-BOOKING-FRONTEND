import {
    createBrowserRouter   
  } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Login from "../Pages/Authenticaion/Login";
import Registration from "../Pages/Authenticaion/Registration";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Rooms from "../Pages/Rooms/Rooms";
import MyBookings from "../Pages/MyBookings/MyBookings";
import Home from "../Pages/Home/Home";
import Details from "../Pages/Rooms/Details";
  const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Registration></Registration>
        },
        {
          path:'/rooms',
          element:<Rooms></Rooms>,
           
        },
        {
          path:'/booking',
          element:<MyBookings></MyBookings>
        },
        {
          path:'/rooms/:id',
          element:<Details></Details>,
          loader:({params})=>fetch(`assingment-11-backend.vercel.app/rooms/${params.id}`)
        }
      ]
    },
  ]);
  export default router ;