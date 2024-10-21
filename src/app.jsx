import React from 'react'
import Header from './components/Header'
import Nosotros from './components/Nosotros'
import Marcas from './components/Marcas'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import Hero from './components/Hero'

const App = () => {
  return (
    <>
       <Header/>
       <Hero/>
       <Nosotros/>
       <Marcas/>
       <Contacto/>
       <Footer/>
    </>
  )
}

export default App