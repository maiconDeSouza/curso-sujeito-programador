import { useEffect, useState } from 'react'
import styles from './Home.module.css'
import { api } from '../../components/API'
import { Link } from 'react-router-dom'

export function Home(){
    const [tvs, setTvs] = useState([])
    const [ loading, setLoading ] = useState(true)
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
            setTvs(results)
            setLoading(false)
        }
        loadTV()
    },[])
    if(loading){
        return (
            <div className={styles.container}>
                <p>Carregando...</p>
            </div>
        )
    }
    return (
        <div className={styles.container}>
            <ul>
                {
                    tvs.map( tv => {
                        return (
                            <li key={tv.id}>
                                <article>
                                    <h1>{tv.name}</h1>
                                    <img src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`} alt="" />
                                    <Link to={`/tv/${tv.id}`}>Mais detalhes</Link>
                                </article>
                            </li>
                        )
                    } )
                }
            </ul>
        </div>
    )
}