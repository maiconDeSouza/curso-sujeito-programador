import { useState } from "react"

export function Formulario(){
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [email, setEmail] = useState('')
    const [user, setUser] = useState({})

    function handleRegister(e){
        e.preventDefault()
        setUser({
            nome, 
            idade,
            email
        })
    }

    return (
        <>
            <form onSubmit={handleRegister}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input 
                        type="text" 
                        placeholder="Digite seu nome" 
                        name="nome" 
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="idade">Idade:</label>
                    <input 
                        type="number" 
                        placeholder="Digite sua idade" 
                        name="idade" 
                        id="idade"
                        value={idade}
                        onChange={(e) => setIdade(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        placeholder="Digite seu email" 
                        name="email" 
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit">Registrar</button>
            </form>
            <div>
                <p>Bem vindo: {user.nome}</p>
                <p>sua idade é {user.idade}</p>
                <p>seu e-mail: {user.email}</p>
            </div>
        </>
    )
}