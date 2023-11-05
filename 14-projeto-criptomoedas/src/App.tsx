import { RouterProvider } from "react-router-dom"
import styles from "./App.module.css"
import { router } from "./routes/routes"
export function App() {
  return (
    <>
      <div className={styles.container}>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

