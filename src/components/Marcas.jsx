import React from 'react'
import '../styles/marcas.css'


import image1 from '../assets/images/marcas/96.jpg'
import image2 from '../assets/images/marcas/armetal.jpg'
import image3 from '../assets/images/marcas/autobat.jpg'
import image4 from '../assets/images/marcas/bta.jpg'
import image5 from '../assets/images/marcas/btatol.jpg'
import image6 from '../assets/images/marcas/bufallo.jpg'
import image7 from '../assets/images/marcas/carstation.jpg'
import image8 from '../assets/images/marcas/castrol.jpg'
import image9 from '../assets/images/marcas/conarco.jpg'
import image10 from '../assets/images/marcas/dapsa.jpg'
import image11 from '../assets/images/marcas/fixman.jpg'
import image12 from '../assets/images/marcas/fram.jpg'
import image13 from '../assets/images/marcas/hengs.jpg'
import image14 from '../assets/images/marcas/higfill.jpg'
import image15 from '../assets/images/marcas/katana.jpg'
import image16 from '../assets/images/marcas/littletress.jpg'
import image17 from '../assets/images/marcas/michigan.jpg'
import image18 from '../assets/images/marcas/molykote.jpg'
import image19 from '../assets/images/marcas/prestone.jpg'
import image20 from '../assets/images/marcas/racing.jpg'
import image21 from '../assets/images/marcas/racing2.jpg'
import image22 from '../assets/images/marcas/shell.jpg'



const Marcas = () => {
  const images = [
    image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22
  ]


  return (
    <>
      <div className="grid-container">
        {images.map((image, index) => (
          <div className="grid-item" key={index}>
            <img src={image} alt={`Image ${index + 1} `} className='grid-image' />
          </div>
        ))}
      </div>
    </>
  )
}

export default Marcas