import React from 'react';

import logo from '../logo-seven.png';
import '../App.css';

const Assistant = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="title-waiting-view">Estás en la sala de espera para contactar a un asistente,
          aguarda un momento.</h1>
      <br></br>
      <a href="/video-call">
        <button className="button-waiting-view" size="large" variant="contained">Video llamada</button>
      </a>
    </header>
  </div>
);

export default Assistant;
