import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class About extends Component {
  
constructor(props) {
  super(props);
  this.state = { markdown: null }
}

  async componentDidMount() {
    const markdownPath = require('../markdown/about.md');
    const response = await fetch(markdownPath);
    let text = await response.text();
    this.setState({
      markdown: text
    });
  }

  render() {

    const { markdown } = this.state;

    return (
      <section id="about">
      <div className="row">
         <div className="twelve columns main-col">
            <ReactMarkdown source={markdown} />
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#contact"><i className="icon-down-circle"></i></a>
      </p>

   </section>
    );
  }
}

export default About;
