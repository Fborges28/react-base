import React, { Component }  from 'react';

//Páginas
import Home from '../pages/Home';

const routes = [
{
    path: "/",
    exact: true,
    text: "Home",
    icon: 'home-icon',
    visible: true,
    component: <Home></Home>
}
];

export default routes;