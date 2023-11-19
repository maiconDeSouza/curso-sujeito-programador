import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Layout } from "./layout/Layout"
import { Home } from "./pages/Home/Home"
import { Cart } from "./pages/Cart/Cart"
import { ProductsProvider } from "./contexts/productsContexts"
import { Toaster } from "react-hot-toast"
import { Details } from "./pages/Details/Details"

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path:"/details/:id",
        element: <Details />
      }
    ]
  }
])

export function App() {
  return (
    <>
      <ProductsProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
        <RouterProvider router={router} />
      </ProductsProvider>
    </>
  )
}


