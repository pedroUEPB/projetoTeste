import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';
//import Login from './components/pages/Login';
//import Cadastrar from './components/pages/Cadastro';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
