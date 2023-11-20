import { useContext } from "react";
import { ProductsContexts, iCartProductsprops } from "../../contexts/ProductsContext";

export function CardProductCart(product: iCartProductsprops){
    const { formatPrice, plusProduct, lessProduct } = useContext(ProductsContexts)
    return (
        <article className="p-1 flex flex-col md:flex-row items-center bg-white rounded">
            <img 
                src={product.cover}
                alt={product.title}
                className="w-16 md:w-24" 
            />
            <p className="w-80 text-center md:text-start">
                {product.title}
            </p>
            <div className="w-72 flex gap-4 justify-center items-center">
                <button onClick={() => lessProduct(product.id)} className="text-purple-900 text-5xl border-none" type="button">-</button>
                <span className="text-xl">{product.amount}</span>
                <button onClick={() => plusProduct(product.id)} className=" text-purple-900 text-3xl border-none" type="button">+</button>
            </div>
            <p className="text-purple-900 text-xl">
                {formatPrice(product.price)}
            </p>

        </article>
    )
}