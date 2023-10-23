import { Link } from "react-router-dom";
import styles from './Header.module.css'

export function Header(){
    return (
        <header className={styles.header}>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/sobre'>Sobre</Link>
            </nav>
        </header>
    )
}