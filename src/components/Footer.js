import React, { Component } from 'react';
import { version } from '../../package.json';

class Footer extends Component {
  render() {
    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {/* {networks} */}
           </ul>

           <ul className="copyright">
              <li>&copy; Copyright { new Date().getFullYear() } Dalton Wais | v {version}</li>
              <li>source code availible on <a title="Styleshout" href="https://github.com/gdwais/daltonwais">github</a></li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;