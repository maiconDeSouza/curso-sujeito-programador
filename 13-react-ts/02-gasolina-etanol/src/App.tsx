import styles from "./App.module.css"
import { Logo } from "./components/Logo/Logo"
import logo from "./assets/logo.png"
import { Input } from "./components/Input/Input"
import { FormEvent, useState } from "react"
export function App() {
  const [ valueAlcool, setValueAlcool ] = useState(0)
  const [ valueGasolina, setValueGasolina ] = useState(0)
  const [ valueResult, setValueResult ] = useState("")
  const [ classResult, setClassResult ] = useState("")
  function calculate(e: FormEvent){
    e.preventDefault()
    const result = valueAlcool / valueGasolina
    if(result < 0.7){
      setValueResult(`Álcool`)
      setClassResult("v")
    }

    if(result >= 0.7){
      setValueResult(`Gasolina`)
      setClassResult("v")
    }
  }

  return (
    <div className={styles.container}>
      <header>
        <Logo url={logo} />
      </header>
      <main>
        <section className={styles.title}>
          <h1>Qual é a melhor opção?</h1>
        </section>
        <section className={styles.calculator}>
          <form onSubmit={calculate}>
            <Input nameInput="Álcool" setValue={setValueAlcool}/>
            <Input nameInput="Gasolina" setValue={setValueGasolina} />
            <input type="submit" value="Calcular" className={styles.button} />
          </form>
        </section>
      </main>
      <footer>
        <div className={`${styles[classResult]}`}>
          {valueResult}
        </div>
      </footer>
    </div>
  )
}


