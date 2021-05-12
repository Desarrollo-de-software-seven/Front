import React from 'react';
import logo from '../logo.svg';
import '../App.css';

const OtraPagina = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>
        Hola! Esta es otra pagina
      </h2>
      <a
        className="App-link"
        href='/'
      >
        volver
      </a>
    </header>
  </div>
);

export default OtraPagina;
