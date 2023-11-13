import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input/Input";
import {   FormEvent, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";

export function Login(){
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const navigate = useNavigate()

    async function handleLogin(e: FormEvent){
        e.preventDefault()

        if(!email || !password){
            alert("preencha todos os campos")
            return
        }
        
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/admin", {replace: true})
        } catch (error) {
            console.log(error)
        } finally {
            setEmail("")
            setPassword("")
        }
    }

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
                <Input 
                    placeholder="digite seu e-mail..."
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <Input 
                    placeholder="digite sua senha"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}

                />
                <button 
                    type="submit" 
                    className="h-9 bg-blue-600 rounded border-0 text-lg font-medium text-white"
                    onClick={handleLogin}
                >
                    Acessar
                </button>
            </form>
        </div>
    )
}