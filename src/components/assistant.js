import React from 'react';

// import Box from '@material-ui/core/Box';

// import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import { Button } from '@material-ui/core';
// import { green } from '@material-ui/core/colors';

import logo from '../logo-seven.png';
import '../App.css';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const Assistant = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="title-waiting-view">Estás en la sala de espera para contactar a un asistente,
          aguarda un momento.</h1>
        <br></br>
        <a href="/"><button className="button-waiting-view" size="large" variant="contained">Ir a encuesta</button></a>
      </header>
    </div>
  );
};

export default Assistant;
