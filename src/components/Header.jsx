import React from 'react'
import '../styles/header.css'
import logo from '../assets/images/logo.png'

const Header = () => {
  return (
    <>
    <header>
        <nav>
            <div className='logo-container'>
              <img src={logo} alt="" className='logo' />
            </div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Nosotros</a></li>
                <li><a href="">Marcas</a></li>
                <li><a href="">Contacto</a></li>
                <li><a href="">Ecommerce</a></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header