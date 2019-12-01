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
            <h4><code>Colorado based developer, consultant & curious human</code></h4>
            <ul className="social">
               <li key="linkedin"><a href="https://www.linkedin.com/in/daltonwais"><i className="fa fa-linkedin"></i></a></li>
               <li key="github"><a href="https://github.com/gdwais/daltonwais"><i className="fa fa-github"></i></a></li>
            </ul>
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
