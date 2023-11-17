import { Header } from "./components/Header"
import {  CountContext, CountProvider  } from "./contexts/count"
import { useContext } from "react"

export function App() {
  return (
      <CountProvider>
        <AppContent />
      </CountProvider>
  )
}

function AppContent(){
  const { count, handlePlus, handleLess } = useContext(CountContext)
  return (
    <>
      <Header />
        <main className="w-full min-h-screen flex flex-col justify-center items-center">
          <div className="w-96 h-96 bg-orange-500 rounded-t-md flex justify-center items-center">
            <div className="w-40 h-40 bg-white rounded-md font-semibold text-5xl flex justify-center items-center">
              {count}
            </div>
          </div>
          <div className="w-96 flex justify-center gap-5 bg-blue-500 rounded-b-md">
            <button onClick={handleLess} className="bg-slate-300 w-10 font-bold active:scale-110 transition-all">-</button>
            <button onClick={handlePlus} className="bg-slate-300 w-10 font-bold active:scale-110 transition-all">+</button>
          </div>
        </main>
    </>
  )
}
