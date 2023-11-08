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
import PrivateRoute from './PrivatRoute';
import Update from "../components/Update";
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
          path:'/update/:id',
          element:<Update></Update>,
          loader:({params})=>fetch(`https://assingment-11-three.vercel.app/update/${params.id}`)
        },
        {
          path:'/booking',
          element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
        },
        {
          path:'/rooms/:id',
          element:<Details></Details>,
          loader:({params})=>fetch(`https://assingment-11-three.vercel.app/rooms/${params.id}`)
        }
      ]
    },
  ]);
  export default router ;