import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import MainPage from './components/MainPage';

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path='/' components={MainPage} />
      </Switch>
    </Router >
  );
}

export default App;
