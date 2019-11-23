import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as pkg from '../package.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          <code>{"<"}dalton wais{">"}</code>
        </p>
      </header>
      <footer className="App-footer">
      <p>
          version: { pkg.version }
        </p>
      </footer>
    </div>
  );
}

export default App;
