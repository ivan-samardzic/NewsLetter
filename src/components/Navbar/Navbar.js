import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar-box'>
            <ul className='navbar-box-list'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/business'>Business</Link>
                </li>
                <li>
                    <Link to='/media'>Media</Link>
                </li>
                <li>
                    <Link to='/sports'>Sports</Link>
                </li>
                <li>
                    <Link to='/science'>Science</Link>
                </li>
                <li>
                    <Link to='/tech'>Tech</Link>
                </li>
                <li>
                    <Link to='/health'>Health</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
