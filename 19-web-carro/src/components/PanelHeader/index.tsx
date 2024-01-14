import { signOut } from 'firebase/auth'
import { Link } from 'react-router-dom'
import { auth } from '../../services'

export function PanelHeader() {
  async function handleLogout() {
    await signOut(auth)
  }
  return (
    <nav className="w-full h-10 bg-red-500 rounded-lg px-4 text-white font-medium mb-4">
      <ul className="flex items-center h-10 gap-4">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/dashboard/new">Cadastrar Carro</Link>
        </li>
        <li className="ml-auto cursor-pointer">
          <button type="button" onClick={handleLogout}>
            Sair da conta
          </button>
        </li>
      </ul>
    </nav>
  )
}
