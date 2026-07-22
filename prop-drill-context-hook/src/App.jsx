import { createContext, useState } from 'react'

import './App.css'
import ChildA from './components/ChildA';
// const UserContext=createContext();
// wrap all chiled inside a provider;//pass valu
//consumer k andar consume
const Theme=createContext();

function App() {
  // const [count, setCount] = useState({name:"anu"});
  const [theme,setTheme]=useState("light");
  return (

    <Theme.Provider value={{theme,setTheme}}>
      <div id="con" style={{backgroundColor:theme==="light"?"beige":"black"}}><ChildA/></div>
      
    </Theme.Provider>


    // <>
    // <UserContext.Provider value={count}>
    //   <ChildA/>

    // </UserContext.Provider>
    
    // </>
  )
}

export default App;
// export {UserContext};
export {Theme};