import React from 'react'
import '../styles/contacto.css'

const Contacto = () => {
  return (
    <>
    <section className='cards'>
    <div className="card-contact">
      <h2>Casa Central</h2>
      <h3>Av. Francisco de Aguirre 2250 - SMT - Tucuman - T4001</h3>
      <p>381 427 7768</p>
      <p><a href="mailto:contacto@antoniolabruna.com.ar">contacto@antoniolabruna.com.ar</a></p>
      <p>Lunes a Viernes 08:00 a 12:30</p>
    </div>
    <div className="card-contact">
      <h2>Sucursal Salta</h2>
      <h3>Roldan 53 - Salta - A4400</h3>
      <p>387 431 3856</p>
      <p><a href="mailto:contacto@antoniolabruna.com.ar">contacto@antoniolabruna.com.ar</a></p>
      <p>Lunes a Viernes 08:00 a 12:30</p>
    </div>

    </section>
    </>
  )
}

export default Contacto