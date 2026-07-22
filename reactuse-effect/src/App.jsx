
import './App.css'
import { useEffect,useState } from 'react'


function App() {
  const [count,setCount]=useState(0);
  const [total,setTotal]=useState(1);
  //  first -> side effect function 
  //  second -> clean up function 
  //  third -> comma seperatd dep list 

  //  cariation 1 run on every render 

  // useEffect(()=>{
  //   alert("i will run on render")
  // })

  // variation 2 on 1st render 
  // useEffect(()=>{
  //   alert("i will run on 1st render")
  // },[])

  // variation 3 
  // useEffect(()=>{
  //   alert("i will run on count update ")
  // },[count])

  // variation 4 multiple dependencies
  // useEffect(()=>{
  //   alert("i will run on count and total update ")
  // },[count,total])


  // variation 5 clean up 
  useEffect(()=>{
    alert("count is updated")
    return()=>{
      alert ("count is unmounted")

    }
  },[count])




  return (
    <>
      <div>
        <button onClick={()=>{setCount(count+1);}}>count me</button>
        <br/>
        coutn : {count}
        <br />
        <button onClick={()=>{setTotal(total+1);}}>total me</button>
        <br/>
        total : {total}
      </div>
      
    </>
  )
}

export default App
