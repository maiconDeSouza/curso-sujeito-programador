import { Search } from "lucide-react"
import styles from "./Home.module.css"
import { Link, useNavigate } from "react-router-dom"
import { FormEvent, useEffect, useState } from "react"
//https://coinlib.io/api/v1/coinlist?key=682c3a9cd6ebad15&pref=BRL

interface CoinsProps {
    delta_24h: string;
    market_cap: string;
    name: string;
    price: string;
    rank: number;
    show_symbol: null | string;
    symbol: string;
    volume_24h: string;
  }


export function Home(){
    const [ coins, setCoins ] = useState<CoinsProps[]>([])
    const [ inputValue, setInputValue ] = useState("")
    const navidate = useNavigate()

    const price = Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    })

    function handleSearch(e:FormEvent){
        e.preventDefault()
        if(!inputValue)return

        navidate(`/detail/${inputValue}`)
    }

    useEffect(() => {
        async function loadCoins() {
            const response = await fetch("https://sujeitoprogramador.com/api-cripto/?key=682c3a9cd6ebad15")
            const responseJson = await response.json()
            const coinsData: CoinsProps[] = responseJson.coins.slice(0, 15)
            const coinsDataFormat = coinsData.map(coins => {
                coins.price = price.format(Number(coins.price))
                coins.market_cap = price.format(Number(coins.market_cap))
                coins.delta_24h = coins.delta_24h.replace(",", ".")
                return coins
            })
            setCoins(coinsDataFormat)
        }
        loadCoins()
    },[])


    return (
        <main className={styles.container}>
            <form onSubmit={handleSearch}>
                <input 
                    type="text"
                    placeholder="Digite o simbole da moeda: BTC..."
                    onChange={(e) => setInputValue(e.target.value)} 
                    value={inputValue}
                />
                <button type="submit" title="Search">
                    <Search size={30} color="#fff" />
                </button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Moeda</th>
                        <th scope="col">Valor mercado</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Volume</th>
                    </tr>
                </thead>
                <tbody className={styles.tbody}>
                    {
                        coins.map(coin => {
                            return (
                                <tr className={styles.tr} key={coin.symbol}>
                                    <td className={styles.tdlabel} data-label="Moeda">
                                        <Link to={`/detail/${coin.symbol}`}>
                                            {coin.name} <span>| {coin.symbol}</span> 
                                        </Link>
                                    </td>
                                    <td className={styles.tdlabel} data-label="Mercado">
                                        {coin.market_cap}
                                    </td>
                                    <td className={styles.tdlabel} data-label="Preço">
                                       {coin.price}
                                    </td>
                                    <td className={Number(coin.delta_24h) >= 0 ? styles.tdprofit : styles.tdloss} data-label="Volume">
                                        <span>{coin.delta_24h}</span>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </main>
    )
}