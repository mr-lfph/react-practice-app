import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <h1>WelCome to React App</h1>
            <nav>
               <a href="/user"> User's  </a>
               <a href="/friend">Friend's</a>
               <a href="/about">About us</a>
                </nav>
        </div>
    )
}

export default Header
