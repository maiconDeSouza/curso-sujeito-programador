import { ReactNode, createContext, useEffect, useMemo, useState } from "react"
import { products } from "../../backend/products"
import toast from "react-hot-toast"

export interface iProductsProps {
    id: number
    title: string
    description: string
    price: number
    cover: string
}

export interface iCartProductsprops {
    id: number
    title: string
    amount: number
    price: number
    cover: string
}

interface iProductsProviderProps  {
    children: ReactNode
}

interface iProductsContextProps {
    productList: iProductsProps[]
    cartProductList: iCartProductsprops[]
    totalProductsInCart: number
    totalPurchase: number
    totalProductsPurchased: number
    formatPrice: (price: number) => string
    addProduct: (product: iCartProductsprops) => void
    plusProduct: (id:number) => void
    lessProduct: (id:number) => void
}


export const ProductsContexts = createContext({} as iProductsContextProps)

export function ProductsProvider({children}:iProductsProviderProps){
    const [ productList, setProductList ] = useState<iProductsProps[]>([])
    const [ cartProductList, setCartProductList ] = useState<iCartProductsprops[]>([])
    const totalProductsInCart = useMemo(() => {
        return cartProductList.length
    },[cartProductList])
    const totalPurchase = useMemo(() => {
        const total = cartProductList.reduce((acc, current) => {
            return acc += current.amount * current.price
        },0)
        return total
    },[cartProductList])
    const totalProductsPurchased = useMemo(() => {
        const total = cartProductList.reduce((acc, current) => {
            return acc += current.amount
        },0)
        return total
    },[cartProductList])

    function addProduct(product: iCartProductsprops){
        const isThereAproduct = cartProductList.some(prod => prod.id === product.id)

        if(isThereAproduct){
            toast("Produto já está no Carrinho", {
                style: {
                    color: "#ffa500",
                    fontWeight: 700
                }
            })
            return
        }

        setCartProductList(cartProductList => [...cartProductList, product])
        toast.success("Adicionado ao Carrinho")
    }

    function plusProduct(id: number){
        const newCartProductList = cartProductList.map(product => {
            if(product.id === id){
                product.amount++
                return product
            }
            return product
        })

        setCartProductList(newCartProductList)
    }

    function lessProduct(id: number){
        const newCartProductList = cartProductList.filter(product => {
            if(product.id === id){
                if(product.amount > 1){
                    product.amount--
                    return product
                }
                return
            }
            return product
        })
        setCartProductList(newCartProductList)
    }

    function formatPrice(price: number):string{
        const formatPrice = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        return formatPrice.format(price)
    }

    useEffect(() => {
        setProductList(products)    
    },[])

    return (
        <ProductsContexts.Provider value={
            {
                productList, 
                cartProductList, 
                totalProductsInCart,
                totalPurchase,
                totalProductsPurchased, 
                formatPrice, 
                addProduct,
                plusProduct,
                lessProduct 
            }
        }>
            {children}
        </ProductsContexts.Provider>
    )
}