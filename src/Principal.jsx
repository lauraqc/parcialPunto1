import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import React from 'react'
import Tabla from './Tabla'
import Carrusel from './Carrusel'
import Inicio from './Inicio'

export default function Principal() {
  return (
    <div>
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light ng-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <Link to='/tabla' className="nav-link" >Tabla</Link>
                        <Link to='/carrusel' className="nav-link" >Carrusel</Link>
                        <Link to='/' className="nav-link" >Inicio</Link>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path="/tabla" element={<Tabla/>}></Route>
            </Routes>
            <Routes>
                <Route path="/carrusel" element={<Carrusel/>}></Route>
            </Routes>
            <Routes>
                <Route path="/" element={<Inicio/>}></Route>
            </Routes>
        </Router>
    </div>
  )
}

