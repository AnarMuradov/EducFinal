import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar__container'>
            <img src="https://preview.colorlib.com/theme/educature/img/logo.png" alt="" />
            <div className='navbar__container__items'>
                <ul className='navbar__container__items__list'>
                <Link to={'/AddPage'}><li>AddPage</li></Link>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/Basket'}><li>Basket</li></Link>
                <li>About</li>
                <li>Courses</li>
                <li>Pages</li>
                <li>Blog</li>
                <li>Contact</li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar