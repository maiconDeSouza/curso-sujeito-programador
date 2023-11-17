import { useContext } from "react"
import { CountContext } from "../contexts/count"

export function Header(){
    const { count } = useContext(CountContext)
    return (
        <header className="w-full h-10 bg-orange-500 p-2 flex items-center justify-between">
            <h1 className="font-bold">mcn</h1>
            <span className="p-1 bg-white rounded-md font-bold">{count}</span>
        </header>
    )
}