import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import ReactLanding from './pages/reactLanding';
import OtraPagina from './pages/otraPag';
import Ejemplo from './pages/ejemplo';
import NotFound from './pages/404';
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
            <li>
              <Link to='/ejemplo'>Catalogo</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/otro'>
            <OtraPagina />
          </Route>
          <Route exact path='/ejemplo'>
            <Ejemplo />
          </Route>
          <Route exact path='/'>
            <ReactLanding />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
