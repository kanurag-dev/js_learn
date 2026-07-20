import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import usercard from './components/UserCard.jsx'
import UserCard from './components/UserCard.jsx'
import deer from "./assets/deer.jpeg"
import rabbit from "./assets/rabbit.jpg"
import frog from "./assets/frog.jpg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <UserCard name="deer" desc="desc1" img ={deer} style={{"border-radius":"10px"}}/>
      <UserCard name="rabbit" desc="desc2" img={rabbit} style={{"border-radius":"10px"}}/>
      <UserCard name="frog" desc="desc3" img={frog} style={{"border-radius":"10px"}}/>
    </div>
  )
}

export default App
