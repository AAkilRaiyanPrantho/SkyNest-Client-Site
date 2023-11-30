import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layouts/Main";
import Apartments from "../Pages/Apartments/Apartments";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import ErrorPage from "../Pages/Shared/ErrorPage/Error Page";
import Dashboard from "../Layouts/Dashboard";
import MyProfile from "../Pages/DashBoard/MyProfile/MyProfile";
import Announcements from "../Pages/DashBoard/Announcements/Announcements";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/Apartments',
            element: <Apartments></Apartments>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        },
        {
          path: '/signIn',
          element: <SignIn></SignIn>
        }
      ]
    },
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: 'myProfile',
          element: <MyProfile></MyProfile>
        },
        {
          path: 'announcements',
          element: <Announcements></Announcements>
        }
        

      ]
    }
  ]);