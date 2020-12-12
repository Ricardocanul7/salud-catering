import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="logo-link">
                    <img src="img/logo-01.png" alt="salud-logo"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/price-list" className="nav-link" activeClassName="active">
                                Lista de precios
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/calculator-imc" className="nav-link" activeClassName="active">
                                Calculadora IMC
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link" activeClassName="active">
                                Contacto
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/team" className="nav-link" activeClassName="active">
                                Nuestro equipo
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link" activeClassName="active">
                                Acerca de nosotros
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
