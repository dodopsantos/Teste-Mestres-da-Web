import React, { createContext, useState, useEffect } from 'react'

interface AuthContextData {
  signed: boolean
  Login(user: string, password: string): Promise<boolean>
  user: object | null
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null)

  // Simulando com o localStorage, uma chamada a API com dados de um DB.
  const accounts = { account: { user: 'teste@teste.com', password: '1234' } }
  localStorage.setItem('accounts', JSON.stringify(accounts))

  useEffect(() => {
    if (localStorage.getItem('connected')) setUser(accounts.account)
  }, [])

  async function Login(user: string, password: string) {
    const account = localStorage.getItem('accounts')
    const userStorage = account !== null ? JSON.parse(account).account.user : {}
    const passwordStorage =
      account !== null ? JSON.parse(account).account.password : {}

    if (user === userStorage && password === passwordStorage) {
      localStorage.setItem('connected', JSON.stringify(accounts))
      setUser(accounts.account)
      return true
    } else {
      setUser(null)
      return false
    }
  }

  return (
    <AuthContext.Provider value={{ signed: Boolean(user), Login, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
