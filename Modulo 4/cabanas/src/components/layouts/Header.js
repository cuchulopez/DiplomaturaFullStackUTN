import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { Navbar } from './Navbar';
import { Home } from '../pages/Home';
import { Imagenes } from '../pages/Imagenes';
import { Servicios } from '../pages/Servicios';
import { Precios } from '../pages/Precios';
import { Contacto } from '../pages/Contacto';

export const Header = () => {
    return (
        <Router>
            <header id="header" className = "header" >
                <Navbar />
            </header>
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/servicios" component={ Servicios } />
                    <Route exact path="/imagenes" component={ Imagenes } />
                    <Route exact path="/precios" component={ Precios } />
                    <Route exact path="/contacto" component={ Contacto } />
                </Switch>
        </Router>
    )
}
