import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
export default function NavBar() {
    return (
        <header className='header'>
            <nav className='navbar'>
                <Link to="/"> TRANG CHỦ </Link>
                <Link to="/food"> THỨC ĂN </Link>
                <Link to="/cart"> GIỎ HÀNG </Link>
            </nav>
        </header>
    )
}
