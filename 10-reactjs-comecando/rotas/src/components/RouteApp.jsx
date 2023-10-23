import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from '../pages/Home'
import { Sobre } from '../pages/Sobre'
import { Header } from '../components/Header'
import { Error404 } from './Error404'
import { Produto } from '../pages/Produto'
export function RouteApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/sobre' element={<Sobre/>}/>
                <Route path='/produtos/:id' element={<Produto />} />
                <Route path='*' element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    )
}