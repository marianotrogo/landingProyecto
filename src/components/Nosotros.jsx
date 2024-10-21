import React from 'react'
import ceo from '../assets/images/direccion/1.png'
import socio1 from '../assets/images/direccion/2.png'
import socio2 from '../assets/images/direccion/3.png'
import '../styles/nosotros.css'

const Nosotros = () => {
  return (
    <section className="features">
      {/* <h2>Nosotros</h2> */}
      <div className="person-card">
        <img src={ceo} alt="" className='profile-pic' />
      </div>
      <div className="person-card">
        <img src={socio1} alt="" className='profile-pic' />
      </div>
      <div className="person-card">
        <img src={socio2} alt="" className='profile-pic' />
      </div>

      <div className="info-card">
        <div className="card-content">
          <h3>Infraestructura y Servicios</h3>
          <p>
            Contamos con una importante infraestructura, compuesta por oficinas y depósitos de más de 10.000 m² cubiertos,
            en condiciones de brindar un servicio de excelente calidad. A principios de 2013 nos trasladamos a un nuevo
            Centro de Distribución con más de 5.000 m² de depósito y una totalidad de 7.000 m² de superficie. Con una cartera de
            más de 5.000 empresas minoristas y clientes activos, logramos poner al alcance de la gente los más de 16.000
            artículos que componen nuestro variado stock.
          </p>
          <p>
            La capacitación permanente y el excelente clima laboral que ANTONIO F. LA BRUNA S.R.L. brinda a sus colaboradores,
            logra que las más de 100 personas que componen nuestro equipo tomen como propia la pasión y vocación de servicio,
            sumando la experiencia que sólo empresas líderes pueden transmitir.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Nosotros