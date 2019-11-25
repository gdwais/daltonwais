import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class Content extends Component {
  
constructor(props) {
  super(props);
  this.state = { name: this.props.name, markdown: null }
}

  async componentDidMount() {
    const markdownPath = require(`../markdown/${this.state.name}.md`);
    const response = await fetch(markdownPath);
    let text = await response.text();
    this.setState({
      markdown: text
    });
  }

  render() {

    const { markdown } = this.state;

    return (
      <section id={this.state.name}>
      <div className="row">
         <div className="twelve columns main-col">
            <ReactMarkdown source={markdown} />
         </div>
      </div>
   </section>
    );
  }
}

export default Content;
