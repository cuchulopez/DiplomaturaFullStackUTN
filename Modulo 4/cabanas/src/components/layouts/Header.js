import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { Navbar } from './Navbar';
import { Home } from '../sections/Home';
import { Imagenes } from '../sections/Imagenes';
import { Servicios } from '../sections/Servicios';
import { Precios } from '../sections/Precios';
import { Contacto } from '../sections/Contacto';

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
