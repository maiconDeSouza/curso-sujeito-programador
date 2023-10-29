import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "../Header"
import { Home } from "../../pages/Home"
import { Favorites } from "../../pages/Favorites"
import { TVseries } from "../../pages/TVseries"
import { Page404 } from "../../pages/404"
import { useState } from "react"
import { toast } from "react-toastify"


export function RouteApp(){
    const [ favoriteTVSeriesList, setFavoriteTVSeriesList ] = useState([])
    function handleAddFavoriteTVseries(name, id){
        const newFavoriteTVseries = {
            name,
            id
        }
        const isFavoriteTVSeries = favoriteTVSeriesList.some(tv => tv.id === id)

        if(isFavoriteTVSeries){
            toast.warn('Retirando Serie dos favoritos')
            const newList = favoriteTVSeriesList.filter(tv => tv.id !== id)
            setFavoriteTVSeriesList(newList)
        }

        if(!isFavoriteTVSeries){
            toast.success('Add favoritos')
            setFavoriteTVSeriesList([...favoriteTVSeriesList, newFavoriteTVseries])
        }
    }

    function handleDelFavoriteTVseries(id){
        const newList = favoriteTVSeriesList.filter(tv => tv.id !== id)
        toast.warn('Retirando Serie dos favoritos')
        setFavoriteTVSeriesList(newList)
    }
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/favorites" element={<Favorites favoriteTVSeriesList={favoriteTVSeriesList} handleDelFavoriteTVseries={handleDelFavoriteTVseries} />} />
                <Route path="/tv/:id" element={<TVseries handleAddFavoriteTVseries={handleAddFavoriteTVseries} favoriteTVSeriesList={favoriteTVSeriesList} />}/>
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    )
}