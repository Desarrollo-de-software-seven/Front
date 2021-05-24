import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import logo from '../logo-seven.png';
import '../App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      color: 'primary',
    },
  },
}));

export default function ReactLanding() {
  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <Button className={classes.root} size="large" variant="contained" href="/view-catalog">Ir a Catálogo</Button>
      </header>
    </div>
  );
}
