import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Landing from './pages/landing';
import ViewCatalog from './pages/view-catalog';
import NotFound from './pages/404';
import ViewOtraPag from './pages/otraPag';


import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/view-catalog'>
            <ViewCatalog />
          </Route>
          <Route exact path='/otraPag'>
            <ViewOtraPag />
          </Route>
          <Route exact path='/'>
            <Landing />
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
