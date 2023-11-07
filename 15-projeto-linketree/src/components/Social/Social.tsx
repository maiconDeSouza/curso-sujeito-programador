import { ReactNode } from "react";
import { Link } from "react-router-dom";
interface SocialPropos {
    url: string
    children: ReactNode
}

export function Social({url, children}: SocialPropos){
    return (
        <Link to={url} target="_blank" rel="noopener noreferrer">
            {children}
        </Link>
    )
}