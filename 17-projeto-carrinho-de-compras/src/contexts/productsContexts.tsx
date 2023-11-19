import { ReactNode, createContext, useEffect, useMemo, useState } from "react"
import { api } from "../services/axios"
import toast from "react-hot-toast"



interface ProductsContextsChildren {
    children: ReactNode
}

export interface ProductsListProps {
    id: number
    title: string
    description: string
    price: number
    cover: string

}

interface CardProps extends ProductsListProps {
    amount: number
}

interface ProductsContextProps {
    productsList: ProductsListProps[]
    cardList: CardProps[]
    totalCard: number
    addProducts: (product: CardProps) => void
    removeProducts: (id: number) => void
}



export const ProductsContexts = createContext({} as ProductsContextProps)

export function ProductsProvider({children}:ProductsContextsChildren){
    const [ productsList, setProductsList ] = useState<ProductsListProps[]>([])
    const [ cardList, setCardList ] = useState<CardProps[]>([])
    const totalCard = useMemo(() => {
        const total = cardList.reduce((acc, current) => {
            return acc += (current.amount * current.price)
        },0)
        return total
    },[cardList])
    
    

    useEffect(() => {
        async function loadindProductsList(){
            const response = await api.get("/products")
            const data = await response.data
            setProductsList(data)
        }

        loadindProductsList()
    },[])


   
    function removeProducts(id: number){

        const newCard = cardList.map(card => {
            if(card. id === id){
                card.amount = card.amount - 1
                return card
            }

            return card
        })

        setCardList(newCard)

        const removeCard = cardList.filter(card => card.amount > 0)

        setCardList(removeCard)
        toast.success("Produto removido!")
    }


    function addProducts(product: CardProps){
        const isExistsProduct = cardList.some(card => card.id === product.id)

        if(isExistsProduct){
            const newCardList = cardList.map(card => {
                if(card.id === product.id){
                    card.amount = card.amount + product.amount
                    return card
                }
                return card
            })
            setCardList(newCardList)
        }

        if(!isExistsProduct)setCardList(cardList => [...cardList, product])

        toast.success("Produto Adicionado!", {
            style: {
                borderRadius: 10,
                backgroundColor: "#121212",
                color: "#fff"
            }
        })
    }


    return (
        <ProductsContexts.Provider value={{productsList, cardList, addProducts, removeProducts, totalCard}}>
            {children}
        </ProductsContexts.Provider>
    )
}