import { Cardcar } from '../../components/CardCar'
import { Container } from '../../components/Container'

export function Home() {
  return (
    <Container>
      <section className="bg-white p-4 rounded-lg w-full max-w-3xl mx-auto flex justify-center items-center gap-2">
        <input
          type="text"
          placeholder="Digite o nome do Carro"
          className="w-full border-2 rounded-lg h-9 px-3 outline-none"
        />
        <button
          type="button"
          className="bg-red-500 h-9 px-8 rounded-lg text-white font-medium text-lg"
        >
          Buscar
        </button>
      </section>
      <h1 className="text-center font-bold text-2xl mt-6 mb-4">
        Carros novos e usados em todo o Brasil
      </h1>
      <main>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <li>
            <Cardcar />
          </li>
          <li>
            <Cardcar />
          </li>
          <li>
            <Cardcar />
          </li>
          <li>
            <Cardcar />
          </li>
        </ul>
      </main>
    </Container>
  )
}
