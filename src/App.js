import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;