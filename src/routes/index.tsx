


import Login from "../pages/Login/index"
import NewsSandBox from "../pages/NewsSandBox/index"
import { Navigate } from 'react-router-dom'

let routes = [
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/newssandbox",
        element: <NewsSandBox />,
    },
    {
        path: "/",
        element: <Navigate to="/login" />
    }
]

export default routes