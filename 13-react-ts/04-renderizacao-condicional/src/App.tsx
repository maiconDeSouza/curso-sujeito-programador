import { useEffect, useState } from "react"

export function App() {
  const [ signed, setSigned ] = useState(false)
  const [ name, setname ] = useState("mcn")

  useEffect(() => {
    if(!signed)setname("mcn")
    if(signed)setname("Maicon Souza")
  }, [signed])

  return (
    <div>
      <div>
      {
        signed ? (
          <h1>Você está logado</h1>
        ) : (
          <h1>Você não está logado</h1>
        )
      }
      </div>
      <button type="button" onClick={() => setSigned(!signed)}>Logar</button>
      <div>
        <h2>Segunda forma de rende</h2>
        {
          signed && (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quae ipsa praesentium, voluptate quia nulla, 
              aliquam iste officiis in, ad assumenda incidunt hic culpa? Optio tempore distinctio ad odio totam.
            </p>
          )
        }
      </div>
      <div>
        <h2>Terceira forma de renderização</h2>
        {
          name.length >= 5 && <p>{name}</p>
        }
      </div>
    </div>
    
  )
}


