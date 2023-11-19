import { useContext} from "react"
import { ProductsContexts } from "../../contexts/productsContexts"
import { useNavigate } from "react-router-dom"

export function Cart(){
    const { cardList, addProducts, removeProducts, totalCard } = useContext(ProductsContexts)
    const navidate = useNavigate()
    
    
    function formatPrice(price: number):string{
        const formatPrice = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        return formatPrice.format(price)
    }

    function handleDetails(id: number){
        navidate(`/details/${id}`)
    }

    return (
        <div className="w-full max-w-7xl mx-auto">
            <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>

            <ul>
                {
                    cardList.length <= 0 && <li><p className="font-bolt mt-4 text-center">Ops seu carrinho está vazio</p></li>
                }
                {
                    cardList.map(card => {
                         return (
                            <li key={card.id}>
                                <article className="flex items-center justify-between border-b-2 border-gray-300">
                                    <img 
                                        src={card.cover} 
                                        alt="Produto"
                                        className="w-28 hover:scale-110 transition-all duration-300 cursor-pointer"
                                        onClick={() => handleDetails(card.id)}
                                    />
                                    <strong onClick={() => handleDetails(card.id)} className="text-zinc-700/90 text-center cursor-pointer">
                                        {card.title}
                                    </strong>
                                    <div className="flex items-center justify-center gap-3">
                                        <button 
                                            type="button" 
                                            className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center"
                                            onClick={() => removeProducts(card.id)}
                                        >
                                            -
                                        </button>
                                        <span>{card.amount}</span>
                                        <button 
                                            type="button" 
                                            className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center"
                                            onClick={() => addProducts({id: card.id, amount: 1, cover: card.cover, price: card.price, title: card.title, description: card.description})}
                                        >
                                            +
                                        </button>
                                    </div>
                                        <strong className="float-right">
                                            {formatPrice(card.price * card.amount)}
                                        </strong>
                                </article>
                </li>
                        )
                    })
                }
            </ul>
            {
                cardList.length > 0 && <p className="font-bolt mt-4">{formatPrice(totalCard)}</p>
            }
        </div>
    )
}