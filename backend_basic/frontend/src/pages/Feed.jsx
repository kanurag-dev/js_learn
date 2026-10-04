import React from 'react'
import { useState,useEffect } from 'react'

const Feed = () => {
    const [posts,setPost]=useState([
        {
            _id:"1",
            image:"https://ik.imagekit.io/uhmbvagqu/image_UvhvOv81R.jpg?updatedAt=1791093987813",
            caption:"test img"
        }
    ])
    useEffect(()=>{
        async function fetchPosts(){
            const response=await fetch("http://localhost:3000/feed")
            const data=await response.json()
            setPost(data.posts)
        }
        fetchPosts()

    },[])
  return (
    <section className='feed-section'>
        {
        posts.length>0?(
            posts.map((post)=>(
            <div key={post._id} className='post-card'>
                <img src={post.image} alt={post.caption}/>
                <p>{post.caption}</p>
            </div>
        ))):(<h1>No Posets</h1>
        )
        }

    </section>
  )
}

export default Feed