import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllServices from "../Pages/AllServices/AllServices";
import Home from "../Pages/Home/Home/Home";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import AddService from "../Pages/AddService/AddService"
import Login from "../Pages/LoginRegister/Login";
import Registration from "../Pages/LoginRegister/Registration";
import Blogs from "../Pages/Blogs/Blogs";
import PrivateRoute from "./PrivateRoute";
import Secondary from "../Layout/Secondary";
import MyReviews from "../Pages/MyReviews/MyReviews";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/allServices",
                element: <AllServices></AllServices>,
                loader: () => {
                    return fetch("https://the-foodie-express-server.vercel.app/allServices")
                }
            },
            {
                path: "/serviceDetails/:id",
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => {
                    return fetch(`https://the-foodie-express-server.vercel.app/serviceDetails/${params.id}`)
                }
            },
            {
                path: "/addService",
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/myReviews",
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            }
        ]
    },
    {
        path: "/",
        element: <Secondary></Secondary>,
        children: [
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Registration></Registration>
            }
        ]
    }
])