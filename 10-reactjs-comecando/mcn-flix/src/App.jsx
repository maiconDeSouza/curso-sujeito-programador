import { ToastContainer } from "react-toastify";
import { RouteApp } from "./components/RouteApp";
import 'react-toastify/dist/ReactToastify.css'

export function App() {
  return (
    <>
    <ToastContainer autoClose={3000}/>
      <RouteApp />
    </>
  )
}


