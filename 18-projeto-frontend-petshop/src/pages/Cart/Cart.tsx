import { useContext } from "react";
import { CardProductCart } from "../../components/CardProductCart/CardProductCart";
import { ProductsContexts } from "../../contexts/ProductsContext";

export function Cart(){
    const { cartProductList, totalPurchase, formatPrice, totalProductsPurchased } = useContext(ProductsContexts)
    return (
        <main className="w-full p-3 md:p-5 flex justify-center items-start flex-col md:flex-row gap-4">
            <section className="md:flex-1">
                <ul className="flex flex-col gap-4">
                    {
                        cartProductList.map(product => {
                            return (
                                <li key={product.id}>
                                    <CardProductCart 
                                        title={product.title}
                                        amount={product.amount}
                                        cover={product.cover}
                                        id={product.id}
                                        price={product.price}
                                    />
                                </li>
                            )
                        })
                    }
                </ul>

            </section>
            <section className="w-full max-w-lg  bg-white rounded flex gap-2 flex-col items-center p-5 text-xl">
                <h3 className="font-bold">resumo do pedido</h3>
                <div className="w-full flex justify-between items-center">
                    <p>Produtos ({totalProductsPurchased})</p>
                    <span className="font-thin text-purple-900">{formatPrice(totalPurchase)}</span>
                </div>
                <div className="w-full flex justify-between items-center h-24">
                    <p>Total</p>
                    <span className="text-purple-900">{formatPrice(totalPurchase)}</span>
                </div>
                <button className="w-full border border-emerald-900 py-2 border-none  rounded-xl bg-emerald-500 text-slate-200" type="button">Comprar</button>
            </section>
        </main>
    )
}