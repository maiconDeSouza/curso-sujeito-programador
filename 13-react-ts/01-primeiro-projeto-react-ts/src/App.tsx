import  React, { useState } from "react"
import { Aluno } from "./components/Aluno/Aluno"

interface InfoAlunoProps {
  nome: string
  idade: number
}

type ArrayDeAluno = InfoAlunoProps[]

export function App() {
 const [idade, setIdade ] = useState<number>(0)
 const [ nome, setNome ] = useState("")
 const [ infoAlunos, setInfoAlunos ] = useState<ArrayDeAluno>()
 const [ contador, setContador ] = useState(0)

 function handleAddAluno(){
  const newAluno = {
    nome,
    idade
  }
  if(Array.isArray(infoAlunos)){
    setInfoAlunos([...infoAlunos, newAluno])
  } else {
    setInfoAlunos([newAluno])
  }
  setIdade(0)
  setNome("")
 }

 function contar(e: React.MouseEvent<HTMLButtonElement>){
  const retorno = (e.currentTarget as HTMLButtonElement).innerText

  if(retorno === "+"){
    setContador(current => current + 1)
    return
  }
  
  if(retorno === "-"){
    if(contador === 0)return
    setContador(current => current - 1)
  }
 }

  return (
    <>
      <h1>Alunos</h1>
      <div>
        <input type="text" placeholder="add aluno" value={nome} onChange={(e) => setNome(e.target.value)}/>
        <input type="number" placeholder="add idade" value={idade} onChange={(e) => setIdade(Number(e.target.value))}/>
        <button type="button" onClick={handleAddAluno}>Add Alunos</button>
      </div>
      <div>
        <ul>
          {
            infoAlunos?.map(aluno => {
              return (
                <li key={`${aluno.nome}${aluno.idade}`}>
                  <Aluno nomeAluno={aluno.nome} idadeAluno={aluno.idade}/>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div>
        <button onClick={contar} name="+" type="button">+</button>
        <span>{contador}</span>
        <button onClick={contar} name="-" type="button">-</button>
      </div>
    </>
  )
}


