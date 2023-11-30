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
import PrivateRoute from "./PrivateRoute";
import MakeAnnouncements from "../Pages/DashBoard/MakeAnnouncements/MakeAnnouncements";
import ManageMembers from "../Pages/DashBoard/ManageMembers/ManageMembers";
import ManageCoupons from "../Pages/DashBoard/ManageCoupons/ManageCoupons";
import AgreementRequests from "../Pages/DashBoard/AgreementRequests/AgreementRequests";


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
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: 'myProfile',
          element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
        },
        {
          path: 'announcements',
          element: <PrivateRoute><Announcements></Announcements></PrivateRoute>
        },
        {
          path: 'makeAnnouncements',
          element: <PrivateRoute><MakeAnnouncements></MakeAnnouncements></PrivateRoute>
        },
        {
          path: 'manageMembers',
          element: <PrivateRoute><ManageMembers></ManageMembers></PrivateRoute>
        },
        {
          path: 'manageCoupons',
          element: <PrivateRoute><ManageCoupons></ManageCoupons></PrivateRoute>
        },
        {
          path: 'agreementRequests',
          element: <PrivateRoute><AgreementRequests></AgreementRequests></PrivateRoute>
        },
        

      ]
    }
  ]);