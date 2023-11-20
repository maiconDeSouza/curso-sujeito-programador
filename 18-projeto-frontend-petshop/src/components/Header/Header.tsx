import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import { Home, ShoppingCart } from "lucide-react"
import { useContext } from "react"
import { ProductsContexts } from "../../contexts/ProductsContext"
export function Header(){
    const { totalProductsInCart } = useContext(ProductsContexts)
    return (
        <header className="w-full h-40 bg-slate-700">
            <nav>
                <ul className="flex items-center justify-between px-6 md:px-10">
                    <li>
                        <Link to="/">
                            <Home size={32} className="text-slate-200" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img 
                                src={logo}
                                alt="Logo Projeto Frontend PetShop"
                                className="h-36" 
                            />
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart" className="relative">
                            <ShoppingCart size={32} className="text-slate-200" />
                            <span className="absolute -top-2 -right-2 px-2.5 bg-emerald-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs">
                                {totalProductsInCart}
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}