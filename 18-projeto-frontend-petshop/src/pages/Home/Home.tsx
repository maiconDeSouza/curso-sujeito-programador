import { useContext } from "react";
import { CardProduct } from "../../components/CardProduct/CardProduct";
import { ProductsContexts } from "../../contexts/ProductsContext";

export function Home(){
    const { productList } = useContext(ProductsContexts)
    return (
        <main className="w-full p-5">
            <h1 className="text-center font-bold text-2xl md:text-6xl">Produtos em destaque</h1>
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