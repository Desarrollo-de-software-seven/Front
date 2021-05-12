import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import ReactLanding from './pages/reactLanding';
import Ejemplo from './pages/ejemplo';
import OtraPagina from './pages/otraPag';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/otro'>Otro</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/otro'>
            <OtraPagina />
          </Route>
          <Route path='/ejemplo'>
            <Ejemplo />
          </Route>
          <Route path='/'>
            <ReactLanding />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
