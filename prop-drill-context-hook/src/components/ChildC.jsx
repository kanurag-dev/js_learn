import React,{useContext} from 'react'
// import { UserContext } from '../App'
import { Theme } from '../App';


const ChildC = () => {
    // const user = useContext(UserContext);
    const {theme,setTheme}=useContext(Theme);
  return (
    <div>
    <button onClick={()=>{
        if(theme==="light")setTheme('dark')
        else setTheme('light')}}>
        Change Theme

    </button>
    
    </div>
  )
}

export default ChildC