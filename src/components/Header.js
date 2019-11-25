import React, { Component } from 'react';

class Header extends Component {
  render() {

    return (
      <header id="home">
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home"><code>Home</code></a></li>
            <li><a className="smoothscroll" href="#about"><code>About</code></a></li>
	         <li><a className="smoothscroll" href="#contact"><code>Contact</code></a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h3><code>{"<"} dalton wais {">"}</code></h3>
            <h4><code>Denver based developer, consultant & curious human</code></h4>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
