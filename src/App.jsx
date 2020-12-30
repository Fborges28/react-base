import React from 'react';
import routes from './routes/config';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
} from "react-router-dom";

import './styles/main.scss';

export default function App() {
  return (
    <HashRouter>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={route.component}
          />
          ))
        }
      </Switch>
    </HashRouter>
    );
};