import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Switch,
  Route,
  Redirect,

} from 'react-router-dom';
import Albums from './components/albums/Albums';
import Users from './components/users/Users';

import './App.css';


function App() {
  return (
  <Router>
    <div className="header">
        <ul>
          <li>
            <NavLink to="/albums" activeClassName="selected">
              Albums
           </NavLink>
          </li>
          <li>
            <NavLink to="/users" activeClassName="selected">
              Users
           </NavLink>
          </li>
           <li>
            <Link to="/">
              Home
           </Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/" exact>
            Home
        </Route>
        <Route path="/albums">
          <Albums/>
        </Route>
        <Route path="/users" component={Users} />

        <Route path="*">
            <Redirect to='/users' />
        </Route>

      </Switch>
  </Router>
  
  );
}

export default App;
