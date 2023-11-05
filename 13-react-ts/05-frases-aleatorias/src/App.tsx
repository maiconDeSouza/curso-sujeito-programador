import styles from "./App.module.css"
import logo from "./assets/logo.png"
import {Frases, frases} from "./arrayDeFrases"
import { useEffect, useState } from "react"

export function App() {
  const [ listaDeFrases, setListaDeFrases ] = useState<Frases>([])
  const [ frasesCategoria, setFrasesCategoria ] = useState<string[]>([])
  const [ generateFrase, setGenerateFrase ] = useState("") 

  useEffect(() => {
    setListaDeFrases(frases)
  }, [])

  function handleSelected(id: number){
    const newList = listaDeFrases.map(categoria => {
      if(categoria.id === id){
        categoria.selected = !categoria.selected
        return categoria
      }
      categoria.selected = false
      return categoria
    })
    setListaDeFrases(newList)
    const frasesId = listaDeFrases.filter(categoria => categoria.id === id)
    const arrayFrases = frasesId[0].frases
    setFrasesCategoria(arrayFrases)
  }

  function handleGenerateFrase(){
    const indiceAleatorio = Math.floor(Math.random() * frasesCategoria.length)
    setGenerateFrase(frasesCategoria[indiceAleatorio])
  }

  return (
    <>
     <div className={styles.container}>
        <header>
          <img src={logo}alt="Logo Frases" />
        </header>
        <main>
          <section className={styles.title}>
            <h1>Categorias</h1>
          </section>
          <section className={styles.button}>
            {
              listaDeFrases.map(categoria => {
                return (
                  <button 
                    type="button" 
                    key={categoria.id} 
                    className={styles[`${categoria.selected ? "selected" : ""}`]}
                    onClick={() => handleSelected(categoria.id)}
                  >
                      {categoria.categoria}
                  </button>
                )
              })
            }
          </section>
          <section className={styles.generate}>
            <button type="button" onClick={handleGenerateFrase}>Gerar Frase</button>
          </section>
        </main>
        <footer>
            {
              generateFrase && (
                <p>
                  <em>
                    {generateFrase}
                  </em>
                </p>
              )
            }
        </footer>
     </div>
    </>
  )
}

