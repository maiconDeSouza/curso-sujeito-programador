import { useContext } from "react"
import { ProductsContexts, iProductsProps} from "../../contexts/ProductsContext"
import { useNavigate } from "react-router-dom"

export function CardProduct(products: iProductsProps){
    const { formatPrice, addProduct } = useContext(ProductsContexts)
    const navigate = useNavigate() 
    return (
        <article 
            className="bg-white w-64 h-96 rounded-3xl p-5 flex flex-col items-center justify-between cursor-pointer"
            >
            <img 
                src={products.cover}
                alt="Ração Premier Fórmula para Cães Sênior" 
                className="w-40"
                onClick={() => navigate(`/details/${products.id}`)}
            />
            <h2 className="font-bold" onClick={() => navigate(`/details/${products.id}`)}>{products.title}</h2>
            <span className="font-semibold text-purple-900">{formatPrice(products.price)}</span>
            <button 
                type="button" 
                className="border border-slate-700 w-full py-3  border-none rounded-xl bg-slate-300 text-purple-900 hover:border-purple-900 hover:bg-transparent transition-all duration-300"
                onClick={() => addProduct({id: products.id, amount: 1, price: products.price, title: products.title, cover: products.cover})}
            >
                Adicionar
            </button>
        </article>
    )
}