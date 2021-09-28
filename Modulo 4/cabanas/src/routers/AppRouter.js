import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import { Navbar } from '../components/layouts/Navbar';
import { Home } from '../components/pages/Home';
import { Imagenes } from '../components/pages/Imagenes';
import { Servicios } from '../components/pages/Servicios';
import { Precios } from '../components/pages/Precios';
import { Contacto } from '../components/pages/Contacto';

export const AppRouter = () => {
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
