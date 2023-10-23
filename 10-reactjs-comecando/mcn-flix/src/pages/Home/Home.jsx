//api_key=f71564626f999dac3f2c47ee7cdaed48&language=pt-BR&page=1
import { useEffect, useState } from "react"
import styles from "./Home.module.css"
import { api } from "../../components/api/api"
import { Link } from "react-router-dom"



export function Home() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        async function loadTV(){
            const response = await api.get('/top_rated', {
                params:{
                    api_key: 'f71564626f999dac3f2c47ee7cdaed48',
                    language: 'pt-BR',
                    page: 1
                }
            })
            

            const results = await response.data.results
            setMovies(results)
        }
        loadTV()
    },[])
    return (
        <div className={styles.container}>
            <ul>
                {
                    movies.map(movie => {
                        return (
                            <li key={movie.id}>
                                <article>
                                    <h1>{movie.name}</h1>
                                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                                        <Link to={`/film/${movie.id}`}>Mais detalhes</Link>
                                </article>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}