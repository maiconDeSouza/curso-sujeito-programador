import { BadgePlus } from "lucide-react"
import { useContext } from "react"
import { ProductsContexts } from "../../contexts/productsContexts"
import { useNavigate } from "react-router-dom"

export function Home(){
    const { productsList, addProducts } = useContext(ProductsContexts)
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
        <div>
            <main className="w-full max-w-7xl px-4 mx-auto">
                <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Produtos em alta</h1>
            </main>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5 p-5">
                {
                    productsList.map(product => {
                        return (
                            <article key={product.id} className="w-ful">
                                <img 
                                    src={product.cover} 
                                    alt={product.title}
                                    className="w-full rounded-lg max-h-70 mb-2 hover:scale-110 transition-all duration-300 cursor-pointer"
                                    onClick={() => handleDetails(product.id)} 
                                />
                                <h2 onClick={() => handleDetails(product.id)} className="font-medium mt-1 mb-2 text-center cursor-pointer">{product.title}</h2>
                                <div className="flex gap-3 items-center justify-center">
                                    <strong className="text-zinc-700/90 text-center">
                                        {
                                            formatPrice(product.price)
                                        }
                                    </strong>
                                    <button 
                                        type="button" 
                                        title="adicionar" 
                                        className="bg-zinc-900 p-1 rounded"
                                        onClick={() => addProducts({id: product.id, title: product.title, price: product.price, amount: 1, cover: product.cover, description: product.description})}
                                    >
                                        <BadgePlus size={20} color="#fff"/>
                                    </button>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </div>
    )
}