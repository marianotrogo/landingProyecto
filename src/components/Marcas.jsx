import React from 'react'
import '../styles/marcas.css'

const importImages = () => {
  const images = import.meta.glob('../assets/images/marcas/*.{png,jpg,jpeg,svg}', { eager: true })
  return Object.values(images).map((module) => module.default)
}

const Marcas = () => {
  const images = importImages()

  return (
    <>
      <div className="grid-container">
        {images.map((image, index) => (
          <div className="grid-item" key={index}>
            <img src={image} alt={`Image ${index + 1}`} className='grid-image' />
          </div>
        ))}
      </div>
    </>
  )

}
 
export default Marcas