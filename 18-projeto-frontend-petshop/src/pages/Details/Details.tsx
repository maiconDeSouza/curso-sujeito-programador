import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ProductsContexts, iProductsProps } from "../../contexts/ProductsContext"

export function Details(){
    const { id } = useParams()
    const { productList, formatPrice } = useContext(ProductsContexts)
    const [ products, setProducts ] = useState<iProductsProps>()
    const navegate = useNavigate()

    useEffect(() => {
        const prod = productList.find(prod => prod.id  === Number(id))
        if(prod === undefined){
            navegate("*")
        }
        setProducts(prod)
    },[id, productList, navegate])
    return (
        <main className="w-full p-3 md:p-5 flex justify-center  flex-col md:flex-row gap-4">
            <section className="md:flex-1">
                <img 
                    src={products?.cover} 
                    alt={products?.title}
                    className="w-full rounded object-cover" 
                />
            </section>
            <section className="w-full max-w-4xl  bg-white rounded flex gap-2 flex-col justify-between items-center p-5 text-xl">
                <h2 className="font-bold md:text-3xl text-center">{products?.title}</h2>
                <p className="text-center">
                    {products?.description}
                </p>
                <p className="font-bold text-purple-900">
                    {
                        formatPrice(products?.price as number)
                    }
                </p>
            </section>
        </main>
    )
}