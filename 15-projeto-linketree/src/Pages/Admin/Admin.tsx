import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";

export function Admin(){
    return (
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header />

            <form className="flex flex-col mt-8 mb-3 w-full max-w-xl">
                <label className="text-white font-medium mt-2 mb-2">Nome do Link</label>
                <Input 
                    placeholder="Digite o nome do link..."
                />
            </form>
        </div>
    )
}