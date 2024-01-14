import { Link } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import { FiLogIn, FiUser } from 'react-icons/fi'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
export function Header() {
  const { signed, loadingAuth } = useContext(AuthContext)

  return (
    <header className="w-full h-16 mb-4 bg-white drop-shadow">
      <div className="w-full max-w-7xl h-16 p-4 mx-auto flex items-center justify-between">
        <Link to="/">
          <img src={logoImg} alt="" />
        </Link>
        {!loadingAuth && signed && (
          <Link to="/dashboard">
            <div className="border-2 border-gray-900 rounded-full p-1">
              <FiUser size={24} color="#000" />
            </div>
          </Link>
        )}
        {!loadingAuth && !signed && (
          <Link to="/login">
            <FiLogIn size={24} color="#000" />
          </Link>
        )}
      </div>
    </header>
  )
}
