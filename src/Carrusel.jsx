import React from 'react'
import bali from './img/bali.png'
import brasil from './img/brasil.png'
import miami from './img/miami.png'
import paris from './img/paris.png'

export default function Carrusel() {
  return (
    <div>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {/*Cada imagen cambia automaticamente cada 5000 ms*/}
            <div className="carousel-item active" data-bs-interval={5000}>
              <img src={bali} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval={5000}>
              <img src={brasil} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval={5000}>
              <img src={miami} className="d-block w-100" alt="..." />
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={5000}>
            <img src={paris} className="d-block w-100" alt="..." />
          </div>
        </div>
        {/*Ademas de cambiar automaticamente, tambien se cre un botón para que el usuario navegue
            por el carousel de imagenes*/}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  )
}