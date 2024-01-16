import React from 'react'
import './style.scss'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p>
        Copyright ©2024 All rights reserved | This template is made with
        <i class="fa-regular fa-heart"></i>  by <span>Colorlib</span>
        </p>

        <div className='footer__container__icon'>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-solid fa-basketball"></i>
        <i class="fa-brands fa-behance"></i>
        </div>
      </div>
    </footer>
  )
}

export default Footer