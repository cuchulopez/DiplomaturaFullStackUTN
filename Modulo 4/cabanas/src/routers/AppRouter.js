import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { Navbar } from '../components/layouts/Navbar';
import { Home } from '../components/layouts/Home';
import { Imagenes } from '../components/sections/Imagenes';
import { Servicios } from '../components/sections/Servicios';


export const AppRouter = () => {
    return (
        <Router>
            <div id="header" className = "fixed-top" >
                <Navbar />
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/servicios" component={ Servicios } />
                    <Route exact path="/imagenes" component={ Imagenes } />
                </Switch>
            </div>
        </Router>
    )
}
