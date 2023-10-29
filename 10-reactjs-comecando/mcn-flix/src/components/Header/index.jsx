import { Link } from 'react-router-dom'
import styles from './Header.module.css'
export function Header(){
    return (
        <header className={styles.header}>
            <h1 className={styles.mcn}>MCN Flix</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Favoritos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}