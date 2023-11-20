import { createBrowserRouter } from "react-router-dom"
import { Layout } from "../Layout/Layout"
import { Home } from "../pages/Home/Home"
import { Cart } from "../pages/Cart/Cart"
import { Details } from "../pages/Details/Details"
import { NotFound } from "../pages/404/NotFound"


export const router = createBrowserRouter([{
    element: <Layout />,
    children: [
        {
            element: <Home />,
            path: "/"
        },
        {
            element: <Cart />,
            path: "/cart"
        },
        {
            element: <Details />,
            path: "/datils/:id"
        },
        {
            element: <NotFound />,
            path: "*"
        }
    ]
}])
    