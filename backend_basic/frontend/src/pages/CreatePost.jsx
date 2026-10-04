import React from 'react'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const formData=new FormData(e.target)
        const response=await fetch("http://localhost:3000/create-post",{
            method:"post",
            body:formData
        })

        const data=await response.json()
        console.log(data)
        navigate("/feed");
    }


  return (

    <section className='create-post-section'>
        <h1>Create post</h1>
        <form onSubmit={handleSubmit}>
            <input type="file" name="image" accept='image/*' />
            <input type='text' name="caption" required/>
            <button type='submit'>Submit</button>
        </form>
    </section>
  )
}

export default CreatePost