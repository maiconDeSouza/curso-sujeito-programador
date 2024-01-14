import { onAuthStateChanged } from 'firebase/auth'
import { ReactNode, createContext, useEffect, useState } from 'react'
import { auth } from '../services'

interface UserProps {
  uid: string
  name: string | null
  email: string | null
}

interface AuthContextData {
  signed: boolean
  loadingAuth: boolean
  user: UserProps | null
  handleInfoUser: (data: UserProps) => void
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProps | null>(null)
  const [loadingAuth, setLoadingAuth] = useState(true)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({ uid: user.uid, name: user.displayName, email: user.email })
        setLoadingAuth(false)
      } else {
        setUser(null)
        setLoadingAuth(false)
      }
    })

    return () => {
      unsub()
    }
  }, [])

  function handleInfoUser(data: UserProps) {
    setUser(data)
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, loadingAuth, user, handleInfoUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}
