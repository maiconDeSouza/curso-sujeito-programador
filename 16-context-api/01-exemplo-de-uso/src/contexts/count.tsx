import { ReactNode, createContext, useState } from "react"

export interface CountProps {
    count: number
    handleLess: () => void
    handlePlus: () => void
}

interface ChildrenProps {
    children: ReactNode
}



export const CountContext = createContext({} as CountProps)

export function CountProvider({children}:ChildrenProps){
    const [ count, setCount ] = useState(0)
    
    function handleLess(){
        if(count <= 0){
          return
        }
    
        setCount((count) => count - 1)
      }

      function handlePlus(){
        setCount((count) => count + 1)
      }
    

    return (
        <CountContext.Provider value={{count, handleLess, handlePlus}}>
            {children}
        </CountContext.Provider>
    )
}