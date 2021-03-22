import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import PiecePage from './PiecePage';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component = {App} />
            <Route exact path="/piece/:objectid" component = {PiecePage} />
        </Switch>
    </BrowserRouter>
)

export default Router;