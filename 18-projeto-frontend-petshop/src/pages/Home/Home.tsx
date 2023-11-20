import { useContext } from "react";
import { CardProduct } from "../../components/CardProduct/CardProduct";
import { OrderProps, ProductsContexts } from "../../contexts/ProductsContext";


export function Home(){
    const { productList, setOrderBy } = useContext(ProductsContexts)
    
    return (
        <main className="w-full p-5">
            <h1 className="text-center font-bold text-2xl md:text-6xl">Produtos em destaque</h1>
            <div className="flex justify-center gap-2">
                <span>Ordnar por:</span>
                <select 
                    title="ordenar" 
                    name="ordenar" 
                    id="ordenar" 
                    className="border-none bg-transparent text-purple-900 outline-none"
                    onChange={(e) => setOrderBy(e.target.value as OrderProps)}
                >
                    <option value="relevancia">Relevancia</option>
                    <option value="menor">Menor Preço</option>
                    <option value="maior">Maior Preço</option>
                </select>
            </div>
            <section className="mt-3 mb-3">
                <ul className="flex gap-2 md:justify-center flex-nowrap md:flex-wrap overflow-x-scroll md:overflow-hidden">
                    {
                        productList.map(product => {
                            return (
                                <li key={product.id}>
                                    <CardProduct
                                        description={product.description}
                                        cover={product.cover}
                                        id={product.id}
                                        price={product.price}
                                        title={product.title}
                                     />
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </main>
    )
}