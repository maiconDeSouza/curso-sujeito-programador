import { useState } from "react"

export function Nome(){
    const [nome, setNome] = useState('Jorge do Batuque')
    function handleChangeName(){
        setNome('Pedro Lorenço de Arruda Almeida Baltazar Casanova')
    }
    return (
        <>
            <p>{nome}</p>
            <button onClick={handleChangeName}>Mudar Nome</button>
        </>
    )
}