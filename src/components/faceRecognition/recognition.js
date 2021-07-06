import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  frame: {
    margin: theme.spacing(0),
    padding: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function Recognition() {
  const classes = useStyles();

  return (
    <div className="App">
      <head className="App-header">
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <script defer src="face-api.min.js"></script>
        <script defer src="script.js"></script>
      </head>
      <body className={classes.frame} >
        <video id="video" width="720" height="560" autoPlay muted></video>
      </body>
    </div>
  );
}
