import React,{useState} from 'react'
import '../styles/header.css'
import logo from '../assets/images/logo.png'

function Header(){
  const [isMenuOpen, setisMenuOpen] = useState(false)



const toggleMenu = () => {
  setisMenuOpen((prev)=> !prev)
};

  return (
    <>
    <header>
        <nav>
            <div className='logo-container'>
              <img src={logo} alt="" className='logo' />
            </div>
            <ul className={`nav-menu ${isMenuOpen? 'active' :''}`}>
                <li><a href="">Home</a></li>
                <li><a href="">Nosotros</a></li>
                <li><a href="">Marcas</a></li>
                <li><a href="">Contacto</a></li>
                <li><a href="">Ecommerce</a></li>
            </ul>
            <div className='hamb-menu' onClick={toggleMenu} aria-label='Toggle Menu'>
              <div className="menu-icon"></div>
              <div className="menu-icon"></div>
              <div className="menu-icon"></div>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Header