import styles from "./Logo.module.css"

interface LogoProps {
    url: string
}

export function Logo({url}:LogoProps){
    return (
        <img src={url} alt="" className={styles.img} />
    )
}