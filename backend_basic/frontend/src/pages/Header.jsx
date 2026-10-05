import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <h2>Image Post</h2>

            <nav>
                <Link to="/feed">Feed</Link>
                <Link to="/create-post">Create Post</Link>
            </nav>
        </header>
    )
}

export default Header