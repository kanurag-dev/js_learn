import React from 'react'
import deer from '../assets/deer.jpeg'
import "./UserCard.css"

const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
        <p>{props.name}</p>
        <img src={props.img} alt={props.name} id="user-img" />
        <p id='user-desc'>{props.desc}</p>

    </div>
  )
}

export default UserCard 