import { signOut } from "firebase/auth";
import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { auth } from "../../services/firebaseConnection";

export function Header(){
    async function handleLogOut(){
        await signOut(auth)
    }
    return (
        <header className="w-full max-w-2xl mt-4 px-1">
            <nav className="w-full bg-white h-12 flex items-center justify-between px-3 rounded-md">
                <ul className="flex gap-4">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/admin">Links</Link>
                    </li>
                    <li>
                        <Link to="/admin/networks">Redes Sociais</Link>
                    </li>
                </ul>
                <button type="button" title="LogOut" onClick={handleLogOut}>
                    <LogOut size={28} color="#db2629" />
                </button>
            </nav>
        </header>
    )
}