import { useEffect, useState } from "react"
import styles from "./Film.module.css"
import { useParams } from "react-router-dom"
import { api } from "../../components/api/api"
import { Heart, Star } from "lucide-react"

const fullMark = 10

export function Film() {
    const { id } = useParams()
    const [ movie, setMovie ] = useState({})
    const [ favorites, setFavorites ] = useState(false)
    const [ classCss, setClassCss ] = useState('heart')
    useEffect(() => {
        async function loadMovie() {
            const response = await api.get(`/${id}`, {
                params: {
                    api_key: 'f71564626f999dac3f2c47ee7cdaed48',
                    language: 'pt-BR'
                }
            })
            const result = response.data
            console.log(result)
            setMovie(result)
        }
        loadMovie()
    }, [id])

    function handleFavorites(){
        setFavorites(!favorites)
        
        if(favorites){
            setClassCss('heartTwo')
        } else {
            setClassCss('heart')
        }
    }
    return (
        <div className={styles.container}>
            <main>
                <h1>{movie.name}</h1>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                <div>
                    <Star size={18} className={styles.star} />
                    <span>{movie.vote_average} / {fullMark}</span>
                    <button onClick={handleFavorites}>
                        <Heart size={18} className={styles[classCss]} />
                    </button>
                </div>
                <p>{movie.overview}</p>
            </main>
        </div>
    )
}