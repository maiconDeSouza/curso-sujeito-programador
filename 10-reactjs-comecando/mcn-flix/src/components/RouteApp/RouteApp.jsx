import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../../pages/Home/Home"
import { Film } from "../../pages/Film/Film"
import { Favorites } from "../../pages/Favorites/Favorites"
import { Page404 } from "../../pages/404/Page404"
import { Header } from "../Header/Header"
export function RouteApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/film/:id" element={<Film />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    )
}