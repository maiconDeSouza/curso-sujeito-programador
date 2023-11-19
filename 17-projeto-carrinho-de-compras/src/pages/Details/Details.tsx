import { useContext, useEffect, useState } from "react"
import {  useParams } from "react-router-dom"
import { ProductsContexts, ProductsListProps } from "../../contexts/productsContexts"

export function Details(){
    const [ product, setProduct ] = useState<ProductsListProps>({
        title: "",
        cover: "",
        description: "",
        id: 0,
        price: 0
    })
    const {id} = useParams()
    const { productsList } = useContext(ProductsContexts)
    

    useEffect(() => {
        productsList.forEach(product => {
            if(product.id === Number(id))setProduct(product)

        })
    },[id, productsList])

    function formatPrice(price: number):string{
        const formatPrice = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        return formatPrice.format(price)
    }

    return (
        <main className="w-full mt-8">
            {
                product.title && (
                    <article className="w-full max-w-7xl px-4 mx-auto flex flex-col gap-1 justify-center items-center">
                        <h1 className="font-bold text-3xl text-center">{product.title}</h1>
                        <img 
                            src={product.cover} 
                            alt={product.title}
                            className="w-full rounded-lg max-w-3xl" 
                        />
                        <p className="text-center">
                            {product.description}
                        </p>
                        <p className="font-semibold text-2xl">
                            {formatPrice(product.price)}
                        </p>
                    </article>
                )
                
            }
            {
                !product.title && <p>Produto Não encontrado</p>
            }
        </main>
    )
}