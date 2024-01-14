import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../layout'
import { Home } from '../pages/Home'
import { Dashboard } from '../pages/Dashboard'
import { CarDatail } from '../pages/Car'
import { NewCar } from '../pages/Dashboard/New'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { Private } from './private'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <Home />,
        path: '/',
      },
      {
        element: <CarDatail />,
        path: '/car/:id',
      },
      {
        element: (
          <Private>
            <Dashboard />
          </Private>
        ),
        path: '/dashboard',
      },
      {
        element: (
          <Private>
            <NewCar />
          </Private>
        ),
        path: '/dashboard/new',
      },
    ],
  },
  {
    element: <Login />,
    path: '/login',
  },
  {
    element: <Register />,
    path: '/register',
  },
])
