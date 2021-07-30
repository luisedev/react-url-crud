import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Application from '../components/Application';
import Error from '../components/Error';
import AxiosReqView from '../components/AxiosReqView';
import Home from '../components/Home';

class Router extends Component {
    render(): JSX.Element {
        return (
            /* Configurar rutas y páginas*/
            <BrowserRouter>
                <Switch>
                    <Redirect
                        exact
                        from="/"
                        to="/home" />

                    <Route exact path="/sincomponente" render={() => (
                        <h1> Soy una ruta sin componente </h1>
                    )} />
                    <Route path="/home" component={Home} ></Route>
                    <Route path="/urls" component={Application} ></Route>
                    <Route path="/axios" component={AxiosReqView} ></Route>
                    <Route exact path="/parametros/:id/:nombre/:apellidos?" render={(props) => {
                        var params = props.match.params;

                        var id = params.id;
                        var nombre = params.nombre;
                        var apellidos = params.apellidos;

                        return (
                            <h1> Parametros {id} {nombre} {apellidos} </h1>);

                    }} />

                    <Route component={Error} />


                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;