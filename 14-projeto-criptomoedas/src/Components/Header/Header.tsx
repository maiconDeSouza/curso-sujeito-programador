import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import logo from "../../assets/logo.svg"
export function Header(){
    return (
        <header className={styles.header}>
            <Link to="/">
                <img src={logo} alt="Logo CriptoMoedas" />
            </Link>
        </header>
    )
}