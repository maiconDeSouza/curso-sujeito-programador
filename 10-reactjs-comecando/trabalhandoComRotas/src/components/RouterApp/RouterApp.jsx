import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from '../../pages/Home/Home'
import { Sobre } from '../../pages/Sobre/Sobre'

export function RouterApp(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/sobre' element={<Sobre/>} />
            </Routes>
        </BrowserRouter>
    )
}