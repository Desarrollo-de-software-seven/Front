/* eslint-disable no-magic-numbers */
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import logo from '../logo-seven.png';
import '../App.css';

const ColorButton = withStyles((theme) => ({
  root: {
    size: 'large',
    color: theme.palette.getContrastText('#2d7e7e'),
    backgroundColor: '#2d7e7e',
    '&:hover': {
      backgroundColor: '#0e4e4e',
    },
  },
}))(Button);

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
        <ColorButton className={classes.root} variant="contained" href="/view-catalog">Ir a Catálogo</ColorButton>
      </header>
    </div>
  );
}
