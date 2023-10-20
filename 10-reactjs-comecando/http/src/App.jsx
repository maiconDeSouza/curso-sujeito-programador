import { useEffect, useState } from "react"


const url = 'https://sujeitoprogramador.com/rn-api/?api=posts'

export function App() {
  const [ nutri, setNutri ] = useState([])
  useEffect(() => {
    async function loadApi(){
      const response = await fetch(url)
      const data = await response.json()
      setNutri(data)
    }
  
    loadApi()
  }, [])
  
  return (
    <>
      <ul>
        {
          nutri.map(item => {
            return <li key={item.id}>{item.titulo}</li>
          })
        }
      </ul>
    </>
  )
}


