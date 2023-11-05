import { createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/Home"
import { Sobre } from "./pages/Sobre"
import { Layout } from "./layout/Layout"
import { Produtos } from "./pages/Produtos"

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/sobre",
                element: <Sobre />
            },
            {
                path: "/produtos/:id",
                element: <Produtos />
            }
        ]
    }
])