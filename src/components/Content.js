import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class Content extends Component {

    constructor(props) {
        super(props);
        this.setState({
            title: props.title || "",
            name: props.name || "",
            markdown: null
        })
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
      const {title, markdown} = this.state;
    return (
      <section id="contact">
         <div className="row section-head">
            <div className="twelve columns">
                <p className="lead"><code>{title}</code></p>
            </div>
         </div>
         <div className="row">
            <div className="twelve columns">
             <div className="twelve columns main-col">
                <ReactMarkdown source={markdown} />
        </div>
        </div>
      </div>
   </section>
    );
  }
}

export default Content;
