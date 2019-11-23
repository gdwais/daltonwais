import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import './App.css';
import * as pkg from '../package.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <code>{"<"}dalton wais{">"}</code>
        </p>
      </header>
      <div className="Menu">
        <Router>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
              <li><Link to={'/about'} className="nav-link">About</Link></li>
            </ul>
            </nav>
            <hr />
            <Switch>
              <div className="Content">
                <Route exact path='/' component={Home} />
                <Route path='/contact' component={Contact} />
                <Route path='/about' component={About} />
              </div>
            </Switch>
          </div>
        </Router>
      </div>
      <footer className="App-footer">
      <p>
          version: { pkg.version }
        </p>
      </footer>
    </div>
  );
}

export default App;
