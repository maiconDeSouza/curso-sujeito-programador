
import { ShoppingCart } from "lucide-react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { ProductsContexts } from "../contexts/productsContexts"


export function Header(){
    const { cardList } = useContext(ProductsContexts)
    return (
        <header className="w-full px-1 bg-slate-200">
            <nav className="w-ful max-w-7xl h-14 flex items-center justify-between p-5 mx-auto">
                <Link 
                    to="/"
                    className="font-bold text-2xl"
                >
                    DevShop
                </Link>
                <ul>
                    <li>
                        
                        <Link 
                            to="/cart"
                            className="relative"
                        >
                            <ShoppingCart size={24} color="#121212" />
                            {
                                cardList.length > 0 && (
                                    <span 
                                        className="absolute -top-3 -right-3 px-2.5 bg-sky-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs"
                                    >
                                        {
                                            cardList.length
                                        }
                                    </span>
                                )
                            }
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}