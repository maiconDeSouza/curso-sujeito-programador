import { useEffect, useState } from "react"
import styles from "./Film.module.css"
import { useParams } from "react-router-dom"
import { api } from "../../components/api/api"

const fullMark = 10

export function Film() {
    const { id } = useParams()
    const [ movie, setMovie ] = useState({})
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
    return (
        <div className={styles.container}>
            <main>
                <h1>{movie.name}</h1>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                <span>{movie.vote_average} / {fullMark}</span>
                <p>{movie.overview}</p>
            </main>
        </div>
    )
}