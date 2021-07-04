/* eslint-disable no-magic-numbers */
import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Select, InputLabel, MenuItem, FormHelperText } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import axios from 'axios';
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
  const [shopId, setShopId] = useState();
  const [shops, setShops] = useState([]);

  const handleChange = (event) => {
    setShopId(event.target.value);
  };
  useEffect(() => {
    axios.get('http://localhost:3000/stores').then((result) => setShops(result.data));
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <InputLabel id="shop-label">Elija la tienda</InputLabel>
        <Select
          labelId="shop-label"
          id="shopId"
          name="shop"
          value={shopId}
          onChange={handleChange}
          inputProps={{ className: classes.inputText }}
        >
          {shops.map((shop) => (
            <MenuItem key={shop.id} value={shop.id}>
              {shop.name}
              {' '}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText className={classes.helperText}>{''}</FormHelperText>

        <ColorButton className={classes.root} variant="contained" href={`${shopId}/view-catalog`}>
          Ir a Catálogo
        </ColorButton>
      </header>
    </div>
  );
}
