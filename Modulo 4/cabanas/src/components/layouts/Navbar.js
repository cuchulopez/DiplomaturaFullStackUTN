import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <header id="header" className = "header" >
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Cabañas Ariel
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                exact
                to="/Servicios"
              >
                Servicios
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                exact
                to="/imagenes"
              >
                Nuestras cabañas
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                exact
                to="/precios"
              >
                Precios
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                exact
                to="/contacto"
              >
                Contacto
              </NavLink>
            </li>
          </ul>
          <span className="navbar-text justify-content-center iconos">
            <a href="https://www.instagram.com/">
              <i className="fab fa-instagram"> </i>
            </a>
            <a href="https://www.facebook.com/">
              <i className="fab fa-facebook"></i>
            </a>
          </span>
        </div>
      </div>
      <div className="navbar-collapse collapse order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink 
                        activeClassName="active"
                        className="nav-link" 
                        exact
                        to="/login"
                    >
                        Login
                    </NavLink>
                  </li>
                </ul>
            </div>
    </nav>
    </header>
  );
};
