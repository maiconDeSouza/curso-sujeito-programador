import { createBrowserRouter } from "react-router-dom"
import { Home } from "../Pages/Home/Home"
import { Login } from "../Pages/Login/Login"
import { Admin } from "../Pages/Admin/Admin"
import { Networks } from "../Pages/Networks/Networks"
import { Private } from "./Private"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/admin",
        element: <Private><Admin /></Private>
    },
    {
        path: "/admin/networks",
        element: <Private><Networks /></Private>
    }
])