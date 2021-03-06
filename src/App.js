import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Header from './components/Header';
import Content from './components/Content';
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
        <Content name="about" />
        <Content name="contact"/>
        <Content name="this_site"/>
        <Footer />
      </div>
    );
  }
}

export default App;