import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import VideoCall from '@material-ui/icons/VideoCall';
import ListAlt from '@material-ui/icons/ListAlt';
import logo from '../logo-seven.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    fontSize: '25px',
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: '#2d7e7e',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className= {classes.appbar}>
        <Toolbar>
          <a href='/'>
            <img src={logo} className="App-logo" alt="logo" style={{ height: '6%', width: '20%', marginTop: '1%' }}/>
          </a>
          <Typography variant="h6" className={classes.title}>
            Asistente Virtual
          </Typography>
          <Button
            className={classes.menuButton}
            color="inherit"
            aria-label="catalog"
            startIcon = {<ListAlt />}
            href='/view-catalog'
          />
          <Button
            className={classes.menuButton}
            color="inherit"
            aria-label="videocall"
            startIcon = {<VideoCall />}
            href='/waiting-view'
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
