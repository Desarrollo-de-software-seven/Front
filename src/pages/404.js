import React from 'react';

const NotFound = () => (
  <div style={{ fontFamily: 'Lato, sans-serif',
    color: '#888',
    margin: '0',
    display: 'table',
    width: '100%',
    height: '100%',
    textAlign: 'center',
  }}>
    <div style={{ paddingTop: '13%',
      display: 'table-cell',
    }}>
      <h1 style={{
        fontSize: '50px',
        display: 'inline-block',
        paddingRight: '12px',
        margin: 0,
      }}>Error 404</h1>
      <h4 style= {{ margin: '0' }}>Página no encontrada</h4>
    </div>
  </div>
);

export default NotFound;
