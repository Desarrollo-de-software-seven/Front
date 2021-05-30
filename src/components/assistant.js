import React, { useState } from 'react';

import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import Modal from '@material-ui/core/Modal';
import { green } from '@material-ui/core/colors';

import logo from '../logo-seven.png';

const Assistant = (props) => {
  const { requestId, name, Product,
  } = props;

  return (
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
};

export default Assistant;
