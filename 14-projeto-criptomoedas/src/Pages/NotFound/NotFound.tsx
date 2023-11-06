import styles from "./NotFound.module.css"
import { Link } from "react-router-dom"

export function NotFound(){
    return (
        <div className={styles.container}>
            <h1>
                Pagina 404 não existe...
            </h1>
            <Link to="/">Volte para Home</Link>
        </div>
    )
}