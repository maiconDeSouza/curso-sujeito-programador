import styles from './TVseries.module.css'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../components/API"
import { Heart, Star } from 'lucide-react'

const fullMark = 10

export function TVseries({handleAddFavoriteTVseries, favoriteTVSeriesList}){
    const {id} = useParams()
    const [ tvSerie, setTvSerie ] = useState({})
    const [ classCss, setClassCss ] = useState('')
    const [ loading, setLoading ] = useState(true)
    useEffect(() => {
        async function loadTV(){
            const response = await api.get(`/${id}`, {
                params: {
                    api_key: 'f71564626f999dac3f2c47ee7cdaed48',
                    language: 'pt-BR'
                }
            })

            const result = await response.data
            
            setTvSerie(result)
            setLoading(false)
        }
        loadTV()
    },[id])

    useEffect(() => {
        const isFavoriteTVSeries = favoriteTVSeriesList.some(tv => tv.id === id)
        if(isFavoriteTVSeries){
            setClassCss('heartTwo')
        }
        if(!isFavoriteTVSeries){
            setClassCss('heart')
        }
    }, [favoriteTVSeriesList, id])
    if(loading){
        return (
            <div className={styles.container}>
                <p>Loading...</p>
            </div>
        )
    }
    return (
        <div className={styles.container}>
            <main>
                <h1>{tvSerie.name}</h1>
                <img src={`https://image.tmdb.org/t/p/w500/${tvSerie.poster_path}`} alt="" />
                <div>
                    <Star size={18} className={styles.star} />
                    <span>{tvSerie.vote_average} / {fullMark}</span>
                    <button onClick={() => handleAddFavoriteTVseries(tvSerie.name, id)}>
                        <Heart size={18} className={styles[classCss]} />
                    </button>
                </div>
                <p>{tvSerie.overview}</p>
            </main>
        </div>
    )
}