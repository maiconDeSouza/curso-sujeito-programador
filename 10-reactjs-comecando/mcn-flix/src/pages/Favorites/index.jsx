import { Link } from 'react-router-dom'
import styles from './Favorites.module.css'
import { Trash } from 'lucide-react'
export function Favorites({favoriteTVSeriesList, handleDelFavoriteTVseries}){
    return (
        <div className={styles.container}>
            <ul>
                {
                    favoriteTVSeriesList.map(tv => {
                        return (
                            <li key={tv.id}>
                                <span>{tv.name}</span>
                                <Link to={`/tv/${tv.id}`}>mais detalhes</Link>
                                <Trash size={16} onClick={() => handleDelFavoriteTVseries(tv.id)}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}