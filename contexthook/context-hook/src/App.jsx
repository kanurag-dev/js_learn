import { createContext, useState } from 'react'

import './App.css'
import Childa from './components/Childa';

const UserContext=createContext();



function App() {
  const [count, setCount] = useState({name:"anu"})

  return (
    <>
    <UserContext.Provider value={count}>
      <Childa/>
    </UserContext.Provider>
    
    </>
  )
}

export default App
export {UserContext}