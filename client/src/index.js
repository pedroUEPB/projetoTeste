import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import Main from './components/pages/Main'
//import Login from './components/pages/Login';
//import Cadastrar from './components/pages/Cadastro';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
