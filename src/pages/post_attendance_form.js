import React from 'react';
import Button from '@material-ui/core/Button';

import logo from '../logo-seven.png';

const PostAttendanceForm = () => (
  <div>
    <a href='/'>
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        style={{ height: '6%', width: '10%', marginTop: '1%', marginLeft: '2%' }}
      />
    </a>
    <div>
      <iframe
        // eslint-disable-next-line max-len
        src="https://docs.google.com/forms/d/e/1FAIpQLSeeHV8nbBNZ5-2XznPtkh56syoHEdwCwvDQeb_p1sNvz4UbNQ/viewform?embedded=true"
        width="100%"
        height="867"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Cargando…
      </iframe>
    </div>
    <Button href='/view-catalog' variant='contained' style={{ marginBottom: '3%', marginLeft: '80%' }}>
      Volver al catalogo
    </Button>
  </div>
);

export default PostAttendanceForm;
