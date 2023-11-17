import { Link } from "react-router-dom";

export function NotFound(){
    return (
        <div className="flex w-full min-h-screen justify-center items-center flex-col text-white gap-4">
            <h1 className="font-bold text-4xl">404 Página não encontrada!</h1>
            <Link to="/" className="bg-gray-50/20 px-1 py-4 rounded-md">Volte para a Home</Link>
        </div>
    )
}