import axios from 'axios';

import  { createContext, Dispatch, FC, ReactNode, SetStateAction, useEffect, useState } from 'react'


type User = {
  name: string,
  email: string,
  age: string,
  phone: string
}

interface GlobalContextType {
  count: number,
  setCount: Dispatch<SetStateAction<number>>
  user: User[] | [],
  setUser: Dispatch<SetStateAction<User[]>>
  authToken: any;
  setAuthTokenHandler: (token: string | null) => void;
  message: string,
  setMessage: Dispatch<SetStateAction<string>>
}
const initialValues: GlobalContextType = {
  count: 0,
  setCount: () => { },
  user: [],
  setUser: () => { },
  message: "",
  setMessage: () => { },
  authToken: '',
  // setAuthToken:()=>{},
  setAuthTokenHandler: (token: string | null) => { }
}
interface GlobalProviderIterface {
  children: ReactNode
}

export const GlobalContext = createContext(initialValues)
const GlobalProvider: FC<GlobalProviderIterface> = ({ children }) => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState<User[] | []>([])
  const [authToken, setAuthToken] = useState<any>('')
  const [message, setMessage] = useState<string>("")

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setAuthToken(token);
    }
  }, [])

  const setAuthTokenHandler = (token: string | null) => {
    if (token) {
      localStorage.setItem("authToken", token)
    }
    else {
      localStorage.removeItem('authToken')
    }
    setAuthToken(token)
  }


  useEffect(() => {
    axios.interceptors.request.use(
      (config) => {
        if (authToken) {
          config.headers['Authorization'] = `Bearer ${authToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
  }, [authToken])

  return (
    <GlobalContext.Provider value={{
      user, setUser, count, setCount, message, setMessage, authToken, setAuthTokenHandler
    }}>
      {children}

    </GlobalContext.Provider>
  )
}

export default GlobalProvider