import React from 'react';

import logo from '../logo-seven.png';

const Assistant = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="title-waiting-view">Estás en la sala de espera para contactar a un asistente</h1>
      <h1 className="title-waiting-view">aguarda un momento</h1>
      <br></br>
      <button size="large" variant="contained" href="/">Ir a encuesta</button>
    </header>
  </div>
);

export default Assistant;
