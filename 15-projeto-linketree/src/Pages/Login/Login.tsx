import { Link } from "react-router-dom";
import { Input } from "../../components/Input/Input";

export function Login(){
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen">
            <Link to="/">
                <h1 className="mt-11 text-white mb-7 font-bold text-5xl">
                    <span>
                        Dev
                    </span>
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">
                        Link
                    </span>
                </h1>
            </Link>
            <form className="w-full max-w-xl flex flex-col p-3">
                <Input />
                <button type="submit" className="h-9 bg-blue-600 rounded border-0 text-lg font-medium text-white">
                    Acessar
                </button>
            </form>
        </div>
    )
}