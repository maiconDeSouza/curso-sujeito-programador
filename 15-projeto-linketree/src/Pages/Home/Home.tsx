import { Link } from "react-router-dom";
import { Social } from "../../components/Social/Social";
import { Youtube, Facebook, Instagram } from "lucide-react"


export function Home(){
    return (
        <div className="flex flex-col w-full py-4 items-center justify-center">
            <h1 className="md:text-4xl text-3xl font-bold text-white mt-20">Maicon Souza</h1>
            <span className="text-gray-50 mb-5 mt-3">Veja meus links 👇</span>
            <main className="flex flex-col w-11/12 max-w-xl">
                <nav >
                    <ul>
                        <li className="bg-white mb-4 w-full py-2 rounded-lg select-none flex items-center justify-center transition-transform hover:scale-105 cursor-pointer">
                            <Link to="#" className="text-base md:text-lg">Canal do Youtube</Link>
                        </li>
                    </ul>
                </nav>
                <footer className="flex justify-center">
                    <ul className="flex justify-center items-center gap-3 my-4">
                        <li>
                            <Social url="https://youtube.com.br/sujeitoprogramador">
                                <Youtube size={35} color="#fff" />
                            </Social>
                        </li>
                        <li>
                            <Social url="#">
                                <Facebook size={35} color="#fff" />
                            </Social>
                        </li>
                        <li>
                            <Social url="#">
                                <Instagram size={35} color="#fff" />
                            </Social>
                        </li>
                    </ul>
                </footer>
            </main>
        </div>
    )
}