import { useEffect, useState } from "react"
import styles from './App.module.css'


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
      <header className={styles.header}>
        <h1>ReactNutri</h1>
      </header>

      <main>
        <div className={styles.previewposts}>
          <ul>
            {
              nutri.map(item => {
                return (
                  <li key={item.id}>
                    <article>
                      <h1 className={styles.titlepost}>{item.titulo}</h1>
                      <img src={item.capa} alt="" />
                      <p>{item.subtitulo}</p>
                      <button>Continuar Lendo</button>
                    </article>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </main>
    </>
  )
}


