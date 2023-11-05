import { useParams } from "react-router-dom"

export function Produtos() {
    const {id} = useParams()
    return (
        <>
            <h1>Produtos em promoção</h1>
            <p>
                este Produto é especial para você {id}
            </p>
        </>
    )
        
}