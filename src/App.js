import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Landing from './pages/landing';
import ViewCatalog from './pages/view-catalog';
import WaitingView from './pages/waiting-view';
import NotFound from './pages/404';

import PostAttendanceForm from './pages/post_attendance_form';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/form'>
            <PostAttendanceForm />
          </Route>
          <Route exact path='/:id/view-catalog'>
            <ViewCatalog />
          </Route>
          <Route exact path='/waiting-view'>
            <WaitingView />
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
