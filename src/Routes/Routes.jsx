import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Dashboard from "../Page/DashBoard/Dashboard";
import CreateTask from "../Page/CreateTask/CreateTask";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout></Layout>,
      children:([
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
          path:'/dashboard',
          element:<Dashboard></Dashboard>
        },
        {
          path:'/addtask',
          element:<CreateTask></CreateTask>
        }
      ])
    },
  ]);
  

export default router