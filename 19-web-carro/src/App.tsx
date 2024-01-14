import { RouterProvider } from 'react-router-dom'
import { router } from './router/routes'
import { AuthProvider } from './contexts/AuthContext'

export function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}
