import { createBrowserRouter } from "react-router-dom"
import { Layout } from "../Layout/Layout"
import { Home } from "../Pages/Home/Home"
import { Detail } from "../Pages/Detail/Detail"
import { NotFound } from "../Pages/NotFound/NotFound"


export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/detail/:id",
                element: <Detail />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
])