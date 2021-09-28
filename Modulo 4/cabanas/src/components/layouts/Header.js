import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import { AppRouter } from '../../routers/AppRouter';

export const Header = () => {
    return (
        <AppRouter />
    )
}
