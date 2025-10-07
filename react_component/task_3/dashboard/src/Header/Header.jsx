import React from 'react'
import './Header.css'
import Logo from '../assets/holberton-logo.jpg'

function Header() {
    return (
        <div className='App-header'>
            <img src={Logo} alt='holberton logo' />
            <h1>School Dashboard</h1>
        </div>
    )
}

export default Header