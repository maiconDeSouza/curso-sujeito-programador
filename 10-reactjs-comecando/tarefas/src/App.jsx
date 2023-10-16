import { useState } from "react"

export function App() {
  const [tarefa, setTarefa] = useState('')
  const [lista, setLista] = useState([])

  function handleRegister(){
    setLista([...lista, tarefa])
    setTarefa('')
  }
  return (
    <>
      <div>
        <input type="text" placeholder="add tarefas" value={tarefa} onChange={(e) => setTarefa(e.target.value)}/>
        <button onClick={handleRegister}>Registrar</button>
      </div>
      <ul>
        {
          lista.map(tarefa => {
            return <li key={tarefa}>{tarefa}</li>
          })
        }
      </ul>
    </>
  )
}

