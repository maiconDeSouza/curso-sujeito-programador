import { Outlet } from "react-router-dom"
import { Header } from "../Components/Header/Header"

export function Layout(){
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}