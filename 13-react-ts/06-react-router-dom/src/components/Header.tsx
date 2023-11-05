import styles from "./Header.module.css"
import { Link } from "react-router-dom";

export function Header(){
    return (
        <header className={styles.container}>
            <nav>
                <h2>MCN</h2>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/produtos/nintendo-switch">Para Você</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}