import { useNavigate, useParams } from "react-router-dom"
import styles from "./Detail.module.css"
import { useEffect, useState } from "react"
import axios from "axios"

interface CoinProp {
    symbol: string
    name: string
    price: string
    market_cap: string
    low_24h: string
    high_24h: string
    total_volume_24h: string
    delta_24h: string
    error?: string
}

export function Detail(){
    const [ detail, SetDetail ] = useState<CoinProp>()
    const [ loading, SetLoading ] = useState(true)
    const { id } = useParams()
    const navigate = useNavigate()

    const price = Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    })

    useEffect(() => {
        async function getData(){
            try {
                const response = await axios.get(`https://sujeitoprogramador.com/api-cripto/coin/?key=682c3a9cd6ebad15&symbol=${id}`)
                const data: CoinProp = await response.data
                const newData: CoinProp = data
                if(newData.error){
                    navigate("*")
                }
                newData.price = price.format(Number(newData.price))
                newData.market_cap = price.format(Number(newData.market_cap))
                newData.low_24h = price.format(Number(newData.low_24h))
                newData.high_24h = price.format(Number(newData.high_24h))
                newData.delta_24h = newData.delta_24h.replace(",", ".")
                SetDetail(newData)
                SetLoading(false)
            } catch (error) {
                navigate("*")
            }
        }
        getData()
    },[id])

    if(loading){
        return (
            <div className={styles.container}>
                <h4 className={styles.center}>Carregando Informações.</h4>
            </div>
        )
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.center}>{detail?.name}</h1>
            <p className={styles.center}>{detail?.symbol}</p>
            <section className={styles.content}>
                <p>
                    <strong>Preço:</strong> {detail?.price}
                </p>
                <p>
                    <strong>Maior preço 24h:</strong> {detail?.high_24h}
                </p>
                <p>
                    <strong>Menor preço 24h:</strong> {detail?.low_24h}
                </p>
                <p className={Number(detail?.delta_24h) >= 0 ? styles.tdprofit : styles.tdloss}>
                    <strong>Delta 24h:</strong> {detail?.delta_24h}
                </p>
                <p>
                    <strong>Valor Mercado:</strong> {detail?.market_cap}
                </p>
            </section>
        </div>
    )
}