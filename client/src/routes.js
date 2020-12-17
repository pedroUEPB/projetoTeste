import React from 'react';
import {Router, Switch, Route,} from 'react-router';
import {history} from './components/history';

import About from './components/pages/About'
//import List from "./components/pages/Lista/";
import Cadastro from "./components/pages/Cadastro/";
import NavBar from './components/NavBar';
import Main from './components/pages/Main';
import Login from './components/pages/Login';
import PrivateRoute from './components/PrivateRoute';
import Projeto from './components/pages/Projeto';
import Home from './components/pages/Home';
import ListaProjetos from './components/pages/ListaProjetos'
import MeusDados from './components/pages/DadosUser'

import './components/pages/About/styleAbout.css';
import './components/pages/ListaProjetos/styleLista.css';
import './components/pages/DadosUser/styleDados.css';


//<Route path="/" exact component={List} />
function Routes(){

    


    return(
        <Router history={history}>
            <NavBar/>
            <Switch>
                
                <Route path="/" exact component={Main} />
                <Route path="/login" exact component={Login} />
                <PrivateRoute path="/Home" component={Home} />
                <PrivateRoute path="/cadastroProjeto" component={Projeto} />
                <PrivateRoute path="/listaProjetos" component={ListaProjetos} />
                <PrivateRoute path="/dados" component={MeusDados} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/about" component={About} />
            </Switch>
            
            
        </Router>
    );
}

export default Routes;