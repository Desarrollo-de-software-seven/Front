import React from 'react';
import logo from '../logo-seven.png';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      color:'primary',
    },
  },
}));

export default function ReactLanding(){
  const classes = useStyles();
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      {/* <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a> */}
        <br></br>
        <Button className={classes.root} size="large" variant="contained" href="/view-catalog">Ir a Catálogo</Button>
      </header>
    </div>
  );
};
